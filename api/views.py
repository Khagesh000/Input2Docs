from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.core.mail import send_mail
import logging
from .serializers import EmailSerializer 
import html
from django.conf import settings
import os

logger = logging.getLogger(__name__)  

# Email templates (consider moving to a separate file for maintainability)
emailTemplates = {
    "Sales Emails": {
        "Introduction Email": {
            "template": "Hi {RecipientName},\n\nMy name is {SenderName}, and I am the {SenderPosition} at {SenderCompany}.\nI am writing to introduce our company and the services we offer.\n\n{EmailBody}\n\nLooking forward to hearing from you.\n\nBest regards,\n{SenderName}",
            "fields": [
                { "id": "RecipientName", "label": "Recipient Name", "type": "text" },
                { "id": "SenderName", "label": "Sender Name", "type": "text" },
                { "id": "SenderPosition", "label": "Sender Position", "type": "text" },
                { "id": "SenderCompany", "label": "Sender Company", "type": "text" },
                { "id": "SenderEmail", "label": "Your Email", "type": "email" },
                { "id": "RecipientEmail", "label": "Recipient Email", "type": "email" },
                { "id": "EmailBody", "label": "Email Body", "type": "quill" }
            ]
        },
        "Follow-Up Email": {
            "template": "Hi {RecipientName},\n\nI hope this email finds you well. I wanted to follow up on our previous conversation regarding.\n\n{EmailBody}\n\nLooking forward to your response.\n\nBest regards,\n{SenderName}",
            "fields": [
                { "id": "RecipientName", "label": "Recipient Name", "type": "text" },
                { "id": "SenderName", "label": "Sender Name", "type": "text" },
                { "id": "SenderEmail", "label": "Your Email", "type": "email" },
                { "id": "RecipientEmail", "label": "Recipient Email", "type": "email" },
                { "id": "EmailBody", "label": "Email Body", "type": "quill" }
            ]
        }
    },
    "Marketing Emails": {
        "Product Launch Email": {
            "template": "Hi {RecipientName},\n\nWe are excited to announce the launch of our new product, {ProductName}!\n\n{EmailBody}\n\nPlease visit our website to learn more about {ProductName}.\n\nBest regards,\n{SenderName}",
            "fields": [
                { "id": "RecipientName", "label": "Recipient Name", "type": "text" },
                { "id": "ProductName", "label": "Product Name", "type": "text" },
                { "id": "SenderName", "label": "Sender Name", "type": "text" },
                { "id": "SenderEmail", "label": "Your Email", "type": "email" },
                { "id": "RecipientEmail", "label": "Recipient Email", "type": "email" },
                { "id": "EmailBody", "label": "Email Body", "type": "quill" }
            ]
        },
        "Newsletter Email": {
            "template": "Hi {RecipientName},\n\nWelcome to our latest newsletter! Here are some updates and news from {CompanyName}:\n\n{EmailBody}\n\nStay tuned for more updates in our upcoming newsletters.\n\nBest regards,\n{SenderName}",
            "fields": [
                { "id": "RecipientName", "label": "Recipient Name", "type": "text" },
                { "id": "CompanyName", "label": "Company Name", "type": "text" },
                { "id": "SenderName", "label": "Sender Name", "type": "text" },
                { "id": "SenderEmail", "label": "Your Email", "type": "email" },
                { "id": "RecipientEmail", "label": "Recipient Email", "type": "email" },
                { "id": "EmailBody", "label": "Email Body", "type": "quill" }
            ]
        }
    }
}

class SendEmailView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = EmailSerializer(data=request.data)
        
        if not serializer.is_valid():
            logger.error(f'Serializer errors: {serializer.errors}')
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        email_data = serializer.validated_data

        # Extract category and email type from the request data
        email_type = email_data.get("email_type")
        category = email_data.get("category")

        if category not in emailTemplates:
            logger.error(f'Invalid email category: {category}')
            return Response({"error": "Invalid email category"}, status=status.HTTP_400_BAD_REQUEST)

        if email_type not in emailTemplates[category]:
            logger.error(f'Invalid email type: {email_type}')
            return Response({"error": "Invalid email type"}, status=status.HTTP_400_BAD_REQUEST)

        # Get the template and required fields
        template = emailTemplates[category][email_type]["template"]
        required_fields = {field["id"] for field in emailTemplates[category][email_type]["fields"]}
        
        # Check for missing required fields
        missing_fields = [field for field in required_fields if field not in email_data]
        if missing_fields:
            return Response({"error": f"Missing required fields: {', '.join(missing_fields)}"}, status=status.HTTP_400_BAD_REQUEST)
        
        # Fill in the placeholders in the template
        try:
            email_body = template.format(**email_data)

            email_body = html.unescape(email_body).replace("<p>", "").replace("</p>", "")

            send_mail(
                subject=email_data.get("subject", "No Subject"),
                message=email_body,
                from_email=email_data.get("SenderEmail"),
                recipient_list=[email_data.get("RecipientEmail")],
                fail_silently=False,
            )
            return Response({"status": "Email sent successfully"}, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error(f'Error sending email: {str(e)}')
            return Response({"error": "Failed to send email"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

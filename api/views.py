from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import EmailSerializer
from django.core.mail import send_mail
import logging

logger = logging.getLogger(__name__)

# Email templates
emailTemplates = {
    "Sales Emails": {
        "Introduction Email": {
            "template": "Hi {RecipientName},\n\nI hope this email finds you well. My name is {SenderName}, and I am the {SenderPosition} at {SenderCompany}. I am reaching out to introduce our company and the solutions we provide that could benefit your organization.\n\nAt {SenderCompany}, we specialize in {ProductOrService} and have helped companies like {NotableClient} achieve {KeyBenefit}. We believe our offerings can significantly address {RecipientCompany}'s needs for {SpecificNeed}.\n\nI would love to schedule a brief call to discuss how we can assist you further. Please let me know a convenient time for you.\n\nBest regards,\n{SenderName}\n{SenderPosition}\n{SenderCompany}\n{SenderPhone}\n{SenderEmail}\n{SenderWebsite}",
            "fields": [
                { "id": "RecipientName", "label": "Recipient Name", "type": "text" },
                { "id": "SenderName", "label": "Sender Name", "type": "text" },
                { "id": "SenderPosition", "label": "Sender Position", "type": "text" },
                { "id": "SenderCompany", "label": "Sender Company", "type": "text" },
                { "id": "ProductOrService", "label": "Product or Service", "type": "text" },
                { "id": "NotableClient", "label": "Notable Client", "type": "text" },
                { "id": "KeyBenefit", "label": "Key Benefit", "type": "text" },
                { "id": "RecipientCompany", "label": "Recipient Company", "type": "text" },
                { "id": "SpecificNeed", "label": "Specific Need", "type": "text" },
                { "id": "SenderPhone", "label": "Sender Phone", "type": "text" },
                { "id": "SenderEmail", "label": "Sender Email", "type": "email" },
                { "id": "SenderWebsite", "label": "Sender Website", "type": "text" }
            ]
        }
    },
    # Add other email templates here as needed
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

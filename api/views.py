from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import EmailSerializer
from django.core.mail import send_mail
from django.utils.html import strip_tags
import logging

logger = logging.getLogger(__name__)

emailTemplates = {
    "Sales Emails": {
        "Introduction Email": {
            "template": """
                Hi {RecipientName},

                My name is {SenderName}, and I am the {SenderPosition} at {SenderCompany}.
                I am writing to introduce our company and the services we offer.

                {EmailBody}

                Looking forward to hearing from you.

                Best regards,
                {SenderName}
            """,
            "fields": [
                {"id": 'RecipientName', "label": 'Recipient Name', "type": 'text'},
                {"id": 'SenderName', "label": 'Sender Name', "type": 'text'},
                {"id": 'SenderPosition', "label": 'Sender Position', "type": 'text'},
                {"id": 'SenderCompany', "label": 'Sender Company', "type": 'text'},
                {"id": 'SenderEmail', "label": 'Your Email', "type": 'email'},
                {"id": 'RecipientEmail', "label": 'Recipient Email', "type": 'email'},
                {"id": 'EmailBody', "label": 'EmailBody', "type": 'quill'},
            ]
        },
        "Follow-Up Email": {
            "template": """
                Hi {RecipientName},

                I hope this email finds you well. I wanted to follow up on our previous conversation regarding.

                {EmailBody}

                Looking forward to your response.

                Best regards,
                {SenderName}
            """,
            "fields": [
                {"id": 'RecipientName', "label": 'Recipient Name', "type": 'text'},
                {"id": 'SenderName', "label": 'Sender Name', "type": 'text'},
                {"id": 'SenderEmail', "label": 'Your Email', "type": 'email'},
                {"id": 'RecipientEmail', "label": 'Recipient Email', "type": 'email'},
                {"id": 'EmailBody', "label": 'EmailBody', "type": 'quill'},
            ]
        }
    },
    "Marketing Emails": {
        "Product Launch Email": {
            "template": """
                Hi {RecipientName},

                We are excited to announce the launch of our new product, {ProductName}!

                {EmailBody}

                Please visit our website to learn more about {ProductName}.

                Best regards,
                {SenderName}
            """,
            "fields": [
                {"id": 'RecipientName', "label": 'Recipient Name', "type": 'text'},
                {"id": 'ProductName', "label": 'Product Name', "type": 'text'},
                {"id": 'SenderName', "label": 'Sender Name', "type": 'text'},
                {"id": 'SenderEmail', "label": 'Sender Email', "type": 'email'},
                {"id": 'RecipientEmail', "label": 'Recipient Email', "type": 'email'},
                {"id": 'EmailBody', "label": 'EmailBody', "type": 'quill'},
            ]
        },
        "Newsletter Email": {
            "template": """
                Hi {RecipientName},

                Welcome to our latest newsletter! Here are some updates and news from {CompanyName}:

                {EmailBody}

                Stay tuned for more updates in our upcoming newsletters.

                Best regards,
                {SenderName}
            """,
            "fields": [
                {"id": 'RecipientName', "label": 'Recipient Name', "type": 'text'},
                {"id": 'CompanyName', "label": 'Company Name', "type": 'text'},
                {"id": 'SenderName', "label": 'Sender Name', "type": 'text'},
                {"id": 'SenderEmail', "label": 'Sender Email', "type": 'email'},
                {"id": 'RecipientEmail', "label": 'Recipient Email', "type": 'email'},
                {"id": 'EmailBody', "label": 'EmailBody', "type": 'quill'},
            ]
        }
    }
}

class SendEmailView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = EmailSerializer(data=request.data)
        
        if not serializer.is_valid():
            logging.error(f'Serializer errors: {serializer.errors}')
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        email_data = serializer.validated_data

        try:
            email_type = email_data.get("email_type")
            category = email_data.get("category")
            
            if category not in emailTemplates or email_type not in emailTemplates[category]:
                logging.error('Invalid email type or category')
                return Response({"error": "Invalid email type or category"}, status=status.HTTP_400_BAD_REQUEST)
            
            template = emailTemplates[category][email_type]["template"]
            email_body = template.format(**email_data)

            subject = f'Introduction from {email_data.get("SenderCompany", "Unknown Company")}'

            plain_email_body = strip_tags(email_body)

            send_mail(
                subject=subject,
                message=plain_email_body,
                from_email=email_data["SenderEmail"],
                recipient_list=[email_data["RecipientEmail"]],
                fail_silently=False,
                html_message=email_body,
            )
            return Response({'message': 'Email sent successfully'}, status=status.HTTP_200_OK)
        except KeyError as e:
            logger.error(f"Missing placeholder in email data: {str(e)}")
            return Response({'error': f'Missing placeholder: {str(e)}'}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            logger.error(f"Error sending email: {str(e)}")
            return Response({'error': 'Failed to send email'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
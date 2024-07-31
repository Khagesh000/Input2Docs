from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import EmailSerializer
from django.core.mail import send_mail
from django.utils.html import strip_tags
import logging

logger = logging.getLogger(__name__)

emailTemplates = {
   
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
import json
from django.conf import settings
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.core.mail import send_mail, BadHeaderError
import logging
from .serializers import EmailSerializer
import html
import os
import re

logger = logging.getLogger(__name__)

def load_email_templates():
    path = os.path.join(settings.BASE_DIR, 'api', 'data', 'templates.json')
    try:
        with open(path, 'r') as file:
            return json.load(file)
    except FileNotFoundError:
        logger.error("The email templates file was not found.")
        raise
    except json.JSONDecodeError:
        logger.error("Error decoding the email templates file.")
        raise

emailTemplates = load_email_templates() 

def remove_html_tags(text):
    """Remove HTML tags from a string, replacing them with appropriate spaces."""
    # List of tags to replace with space to maintain proper spacing in text
    tags_with_space = ['</p>', '</div>', '</br>', '<br>', '</li>', '</ul>', '</strong>', '</em>']
    for tag in tags_with_space:
        text = text.replace(tag, ' ')
    clean = re.compile('<.*?>')
    return re.sub(clean, '', text).strip()

class SendEmailView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = EmailSerializer(data=request.data)
        
        if not serializer.is_valid():
            logger.error(f'Serializer errors: {serializer.errors}')
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        email_data = serializer.validated_data
        email_type = email_data.get("email_type")
        category = email_data.get("category")

        if category not in emailTemplates:
            return Response({"error": "Invalid email category"}, status=status.HTTP_400_BAD_REQUEST)

        if email_type not in emailTemplates[category]:
            return Response({"error": "Invalid email type"}, status=status.HTTP_400_BAD_REQUEST)

        # Get the template and required fields
        template_data = emailTemplates[category][email_type]
        template = template_data["template"]
        subject_template = template_data.get("subject", "No Subject")
        required_fields = {field["id"] for field in template_data["fields"]}

        # Check for missing required fields
        missing_fields = [field for field in required_fields if field not in email_data]
        if missing_fields:
            return Response({"error": f"Missing required fields: {', '.join(missing_fields)}"}, status=status.HTTP_400_BAD_REQUEST)
        
        # Fill in the placeholders in the template
        try:
            subject = subject_template.format(**email_data)
            email_body = template.format(**email_data)
            email_body = html.unescape(email_body).replace("<p>", "").replace("</p>", "")
            email_body = remove_html_tags(email_body)  # Remove all HTML tags
            
            try:
                send_mail(
                    subject=subject,
                    message=email_body,
                    from_email=email_data.get("SenderEmail"),
                    recipient_list=[email_data.get("RecipientEmail")],
                    fail_silently=False,
                )
            except BadHeaderError:
                logger.error('Invalid header found.')
                return Response({"error": "Invalid header found."}, status=status.HTTP_400_BAD_REQUEST)
            except Exception as e:
                logger.error(f'Error sending email: {str(e)}')
                return Response({"error": f"Failed to send email: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

            return Response({"status": "Email sent successfully"}, status=status.HTTP_200_OK)
        except KeyError as e:
            logger.error(f'Missing key in email data: {e}')
            return Response({"error": f"Missing key: {e}"}, status=status.HTTP_400_BAD_REQUEST)
        except ValueError as e:
            logger.error(f'Value error: {e}')
            return Response({"error": f"Value error: {e}"}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            logger.error(f'Unexpected error: {str(e)}')
            return Response({"error": "Failed to process email data"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

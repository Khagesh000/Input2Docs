from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import EmailSerializer
from django.core.mail import send_mail
from django.utils.html import strip_tags

# Define email templates (you can store these in a separate module or database)
emailTemplates = {
    "Sales Emails": {
        "template": """
            Subject: {Subject}

            Dear {RecipientName},

            {EmailBody}

            Sincerely,
            {YourName}
        """,
        "fields": [
            { "id": 'YourName', "label": 'Your Name', "type": 'text' },
            { "id": 'YourEmail', "label": 'Your Email', "type": 'email' },
            { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
            { "id": 'RecipientEmail', "label": 'Recipient Email', "type": 'email' },
            { "id": 'Subject', "label": 'Subject', "type": 'text' },
            { "id": 'EmailBody', "label": 'Email Body', "type": 'quill' },
        ]
    },
    "Job Application Emails": {
        "template": """
            Subject: Application for {Position}

            Dear {Company},

            {CoverLetterBody}

            Sincerely,
            {YourName}
        """,
        "fields": [
            { "id": 'YourName', "label": 'Your Name', "type": 'text' },
            { "id": 'YourEmail', "label": 'Your Email', "type": 'email' },
            { "id": 'Company', "label": 'Company Name', "type": 'text' },
            { "id": 'CompanyEmail', "label": 'Company Email', "type": 'email' },
            { "id": 'Position', "label": 'Position', "type": 'text' },
            { "id": 'CoverLetterBody', "label": 'Cover Letter Body', "type": 'quill' },
        ]
    },
    # Add new templates here as needed
    "New Template Name": {
        "template": """
            Subject: {Subject}

            Dear {RecipientName},

            {EmailBody}

            Sincerely,
            {YourName}
        """,
        "fields": [
            { "id": 'YourName', "label": 'Your Name', "type": 'text' },
            { "id": 'YourEmail', "label": 'Your Email', "type": 'email' },
            { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
            { "id": 'RecipientEmail', "label": 'Recipient Email', "type": 'email' },
            { "id": 'Subject', "label": 'Subject', "type": 'text' },
            { "id": 'EmailBody', "label": 'Email Body', "type": 'quill' },
        ]
    },
}

class SendEmailView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = EmailSerializer(data=request.data)
        
        if serializer.is_valid():
            email_data = serializer.validated_data
            selected_template = email_data.get('selectedTemplate')
            
            # Check if selected template exists in emailTemplates
            if selected_template in emailTemplates:
                template_details = emailTemplates[selected_template]
                email_body_field = 'CoverLetterBody' if selected_template == 'Job Application Emails' else 'EmailBody'
                email_body = strip_tags(email_data[email_body_field])

                # Substitute placeholders in the template with actual values
                filled_template = template_details['template'].format(
                    Subject=email_data.get('Subject', ''),
                    RecipientName=email_data.get('RecipientName', ''),
                    EmailBody=email_body,
                    YourName=email_data.get('YourName', ''),
                    Company=email_data.get('Company', ''),
                    Position=email_data.get('Position', ''),
                    CoverLetterBody=email_data.get('CoverLetterBody', ''),
                )

                try:
                    send_mail(
                        subject=filled_template.split('\n', 1)[0],  # Extract subject from filled template
                        message=filled_template,
                        from_email=email_data['YourEmail'],
                        recipient_list=[email_data['RecipientEmail'] if 'RecipientEmail' in email_data else email_data['CompanyEmail']],
                        fail_silently=False,
                    )
                    return Response({'message': 'Email sent successfully'}, status=status.HTTP_200_OK)
                except Exception as e:
                    return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            else:
                return Response({'error': 'Selected template does not exist'}, status=status.HTTP_400_BAD_REQUEST)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

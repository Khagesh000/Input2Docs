from rest_framework import serializers
from django.core.mail import send_mail
from django.utils.html import strip_tags

class DynamicEmailSerializer(serializers.Serializer):
    YourName = serializers.CharField(max_length=100, required=True)
    YourEmail = serializers.EmailField(required=True)
    RecipientName = serializers.CharField(max_length=100, required=True)
    RecipientEmail = serializers.EmailField(required=True)
    Subject = serializers.CharField(required=True)
    EmailBody = serializers.CharField(required=True)
    Company = serializers.CharField(required=False)
    CompanyEmail = serializers.EmailField(required=False)
    Position = serializers.CharField(required=False)
    CoverLetterBody = serializers.CharField(required=False)

    def save(self):
        validated_data = self.validated_data
        subject = validated_data.get('Subject', 'No Subject')
        email_body = validated_data.get('EmailBody', '')
        from_email = validated_data.get('YourEmail', 'no-reply@example.com')
        to_email = validated_data.get('RecipientEmail', 'recipient@example.com')

        # Strip HTML tags for plain text version
        plain_message = strip_tags(email_body)

        try:
            # Send email using Django's send_mail function
            send_mail(
                subject,
                plain_message,
                from_email,
                [to_email],
                html_message=email_body  # Send HTML content as well
            )
        except Exception as e:
            # Handle any exceptions or errors here
            raise serializers.ValidationError({'error': str(e)})

        # Assuming you want to return something after saving, if needed
        return validated_data

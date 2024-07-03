from rest_framework import serializers
from django.core.mail import send_mail
from django.utils.html import strip_tags

class DynamicEmailSerializer(serializers.Serializer):
    template_name = serializers.CharField(max_length=100, write_only=True)

    def validate(self, data):
        template_name = data.get('template_name')
        
        # Define required fields for each template
        template_fields = {
            "Sales Emails": ['YourName', 'YourEmail', 'RecipientName', 'RecipientEmail', 'Subject', 'EmailBody'],
            "Job Application Emails": ['YourName', 'YourEmail', 'Company', 'CompanyEmail', 'Position', 'CoverLetterBody']
            # Add more templates as needed
        }

        # Get required fields for the selected template
        required_fields = template_fields.get(template_name, [])

        # Check if all required fields are provided
        missing_fields = [field for field in required_fields if not data.get(field)]
        if missing_fields:
            raise serializers.ValidationError({field: 'This field is required.' for field in missing_fields})

        return data

    def create(self, validated_data):
        template_name = validated_data.get('template_name')
        email_body = self.generate_email_body(template_name, validated_data)
        
        try:
            send_mail(
                subject=validated_data.get('Subject', ''),
                message=strip_tags(email_body),
                from_email=validated_data.get('YourEmail', ''),
                recipient_list=[validated_data.get('RecipientEmail', ''), validated_data.get('CompanyEmail', '')],
                fail_silently=False,
            )
        except Exception as e:
            raise serializers.ValidationError(f"Failed to send email. Error: {str(e)}")

        return validated_data

    def generate_email_body(self, template_name, data):
        if template_name == 'Sales Emails':
            return f"""
                From: {data['YourName']} <{data['YourEmail']}>
                To: {data['RecipientName']} <{data['RecipientEmail']}>

                Subject: {data['Subject']}

                Dear {data['RecipientName']},

                {data['EmailBody']}

                Sincerely,
                {data['YourName']}
            """
        elif template_name == 'Job Application Emails':
            return f"""
                From: {data['YourName']} <{data['YourEmail']}>
                To: {data['Company']} <{data['CompanyEmail']}>

                Subject: Application for {data['Position']}

                Dear {data['Company']},

                {data['CoverLetterBody']}

                Sincerely,
                {data['YourName']}
            """
        # Add more templates as needed

        return ""


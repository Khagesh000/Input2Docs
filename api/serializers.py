from rest_framework import serializers

class EmailSerializer(serializers.Serializer):
    category = serializers.CharField(max_length=100)
    email_type = serializers.CharField(max_length=100)
    RecipientName = serializers.CharField(max_length=100, required=False)
    RecipientEmail = serializers.EmailField(required=False)
    SenderCompany = serializers.CharField(max_length=100, required=False)
    SenderEmail = serializers.EmailField()
    SenderName = serializers.CharField(max_length=100, required=False)
    SenderPosition = serializers.CharField(max_length=100, required=False)
    ProductName = serializers.CharField(max_length=100, required=False)
    CompanyName = serializers.CharField(max_length=100, required=False)
    SenderPhone = serializers.CharField(max_length=100, required=False)
    EmailBody = serializers.CharField(required=False)
    
    subject = serializers.CharField(max_length=255, required=False)

    def validate(self, attrs):
        # Additional validation logic if needed
        email_type = attrs.get('email_type')
        if email_type == 'Newsletter Email' and not attrs.get('CompanyName'):
            raise serializers.ValidationError({'CompanyName': 'This field is required for Newsletter Email'})
        return attrs

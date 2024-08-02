from rest_framework import serializers

class EmailSerializer(serializers.Serializer):
    RecipientName = serializers.CharField(max_length=100, required=False)
    RecipientEmail = serializers.EmailField(required=False)
    SenderCompany = serializers.CharField(max_length=100, required=False)
    SenderEmail = serializers.EmailField()
    SenderName = serializers.CharField(max_length=100, required=False)
    SenderPosition = serializers.CharField(max_length=100, required=False)
    ProductOrService = serializers.CharField(max_length=100, required=False)
    NotableClient = serializers.CharField(max_length=100, required=False)
    KeyBenefit = serializers.CharField(max_length=100, required=False)
    RecipientCompany = serializers.CharField(max_length=100, required=False)
    SpecificNeed = serializers.CharField(max_length=100, required=False)
    SenderPhone = serializers.CharField(max_length=100, required=False)
    SenderWebsite = serializers.CharField(max_length=100, required=False)
    subject = serializers.CharField(max_length=255, required=False)
    
    def validate(self, attrs):
        # Add any specific validation logic here if needed
        return attrs

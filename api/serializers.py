from rest_framework import serializers

class EmailSerializer(serializers.Serializer):
    YourName = serializers.CharField(max_length=100)
    YourEmail = serializers.EmailField()
    RecipientName = serializers.CharField(max_length=100, required=False)
    RecipientEmail = serializers.EmailField(required=False)
    Company = serializers.CharField(max_length=100, required=False)
    CompanyEmail = serializers.EmailField(required=False)
    Subject = serializers.CharField(max_length=100)
    EmailBody = serializers.CharField(required=False)
    CoverLetterBody = serializers.CharField(required=False)
    Position = serializers.CharField(max_length=100, required=False)
    selectedTemplate = serializers.CharField(max_length=100)

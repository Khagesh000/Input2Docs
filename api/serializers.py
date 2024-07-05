from rest_framework import serializers

class EmailSerializer(serializers.Serializer):
    YourName = serializers.CharField(max_length=100)
    YourEmail = serializers.EmailField()
    RecipientName = serializers.CharField(max_length=100, required=False)
    RecipientEmail = serializers.EmailField()
    Subject = serializers.CharField(max_length=200)
    EmailBody = serializers.CharField()
    Company = serializers.CharField(max_length=100, required=False)
    CompanyEmail = serializers.EmailField(required=False)
    Position = serializers.CharField(max_length=100, required=False)
    CoverLetterBody = serializers.CharField(required=False)
    ReminderBody = serializers.CharField(required=False)

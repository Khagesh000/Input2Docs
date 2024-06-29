# emailer/serializers.py
from rest_framework import serializers

class EmailSerializer(serializers.Serializer):
    YourName = serializers.CharField(max_length=100)
    YourEmail = serializers.EmailField()
    RecipientName = serializers.CharField(max_length=100)
    RecipientEmail = serializers.EmailField()
    Subject = serializers.CharField(max_length=100)
    EmailBody = serializers.CharField()

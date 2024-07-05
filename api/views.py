from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.core.mail import send_mail
from .serializers import EmailSerializer
from django.utils.html import strip_tags

class SendEmailView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = EmailSerializer(data=request.data)
        if serializer.is_valid():
            data = serializer.validated_data
            email_body = strip_tags(data['EmailBody'])  # Remove HTML tags from the email body
            send_mail(
                subject=data['Subject'],
                message=email_body,
                from_email=data['YourEmail'],
                recipient_list=[data['RecipientEmail']],
                fail_silently=False,
            )
            return Response({"message": "Email sent successfully"}, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

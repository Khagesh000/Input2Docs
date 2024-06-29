# emailer/views.py

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.core.mail import send_mail
from .serializers import EmailSerializer

class SendEmailView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = EmailSerializer(data=request.data)
        if serializer.is_valid():
            data = serializer.validated_data
            send_mail(
                subject=data['Subject'],
                message=data['EmailBody'],
                from_email=data['YourEmail'],
                recipient_list=[data['RecipientEmail']],
                fail_silently=False,
            )
            return Response({"message": "Email sent successfully"}, status=status.HTTP_200_OK)
        else:
            print("Validation Errors:", serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

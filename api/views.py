from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import DynamicEmailSerializer

class SendEmailView(APIView):
    serializer_class = DynamicEmailSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Email sent successfully!"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

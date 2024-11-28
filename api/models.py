from django.db import models

class EmailRecord(models.Model):
    sender_email = models.EmailField()
    recipient_email = models.EmailField()
    subject = models.CharField(max_length=255)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.subject} - {self.recipient_email}"


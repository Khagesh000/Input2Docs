from django.contrib import admin
from .models import EmailRecord

@admin.register(EmailRecord)
class EmailRecordAdmin(admin.ModelAdmin):
    list_display = ('sender_email', 'recipient_email', 'subject', 'body', 'created_at')


# emailer/urls.py
from django.urls import path
from .views import SendEmailView
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('send-email/', SendEmailView.as_view(), name='send-email'),
]




if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.contrib.auth.models import BaseUserManager


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(email, password, **extra_fields)

class CustomUser(AbstractUser):
    username = None  # remove the username field
    email = models.EmailField(unique=True, verbose_name='email address')
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']  # removes email from REQUIRED_FIELDS
    
    is_verified = models.BooleanField(default=False)
    email_confirmation_code = models.CharField(max_length=30, blank=True, null=True)
    
    objects = CustomUserManager() 
    
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail
from django.conf import settings
import uuid
from django.template.loader import render_to_string

@receiver(post_save, sender=CustomUser)
def send_verification_email(sender, instance, **kwargs):
    if not instance.is_verified and not instance.email_confirmation_code:
        # Generate a unique confirmation code
        confirmation_code = generate_confirmation_code()
        instance.email_confirmation_code = confirmation_code
        instance.save()

        # Render the email content with the template
        html_message = render_to_string('path_to_templates/email_verification_template.html', {
            'confirmation_code': confirmation_code
        })

        # Send an email with the confirmation code
        send_mail(
            'Confirm your email address',
            'Use the code provided in the attached HTML to confirm your email address.',  # This is a fallback for email clients that do not support HTML
            settings.EMAIL_HOST_USER,
            [instance.email],
            fail_silently=False,
            html_message=html_message  # This is the HTML message
        )


import random
def generate_confirmation_code(length=6):
    """Generate a random numerical confirmation code of a given length."""
    return ''.join([str(random.randint(0, 9)) for _ in range(length)])
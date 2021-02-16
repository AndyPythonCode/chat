from django.contrib.auth.models import AbstractUser, AbstractBaseUser
from django.utils.translation import gettext_lazy as _
from django.utils import timezone
from django.db import models

# Create your models here.
class MyUser(AbstractUser):
    #Custom Field
    email = models.EmailField(_('email address'), max_length=80, unique=True)
    
    #Opcion
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username','first_name','last_name']

    def __str__(self):
        return f"{self.email}"
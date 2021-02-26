from django.shortcuts import render
from django.contrib.auth import views as auth_views
from django.views import generic
# Create your views here.

class LoginView(auth_views.LoginView):
    template_name = 'index.html'

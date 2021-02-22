from django.urls import path, re_path
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    path('', views.Home.as_view()),
    path('chat/<str:room_name>/',views.Room.as_view(), name='room')
]

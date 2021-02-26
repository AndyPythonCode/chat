from django.urls import path
from django.views.generic import TemplateView
from . import views

#Rutas manejadas por react, no es obligatoria funciona igual, pero si deseas pasar algun parametro de contexto es necesario
#Main url: chat/
REACT_ROUTER = [
    '',
    '<str:room_name>/',
    '<str:room_name>',
]

urlpatterns = [path(f'{urls}', views.Room.as_view()) for urls in REACT_ROUTER]
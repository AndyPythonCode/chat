from django.shortcuts import render
from django.views.generic import TemplateView, ListView

# Create your views here.

class Home(TemplateView):
    template_name = 'index.html'

def room(request, room_name):
    return render(request, 'chatRoom.html')
    
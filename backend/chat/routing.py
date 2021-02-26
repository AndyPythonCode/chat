"""

Cuando Django acepta una solicitud HTTP, consulta la URLconf raíz para buscar una función de vista y luego llama a la función de vista para manejar la solicitud. De manera similar, cuando Channels acepta una conexión WebSocket, consulta la configuración de enrutamiento raíz para buscar un consumidor y luego llama a varias funciones en el consumidor para manejar los eventos de la conexión.

"""
from django.urls import re_path
from . import consumers

websocket_urlpatterns = [
    re_path(r'ws/chat/(?P<room_name>\w+)/$', consumers.ChatConsumer.as_asgi()),
]

# re_path(r'^stores/\w+/',.....) Caracteres de palabras (cualquier letra minúscula, número o guión bajo)
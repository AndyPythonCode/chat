"""
https://channels.readthedocs.io/en/stable/tutorial/part_2.html

ASGI config for core project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')

#Channels
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.security.websocket import AllowedHostsOriginValidator
import chat.routing as chat

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": AllowedHostsOriginValidator( #restrict domain 'security', ALLOWED_HOSTS in setting.py
      AuthMiddlewareStack( #self.scope, it's give you some information
        URLRouter(
            chat.websocket_urlpatterns #Where it's the url that i have to match when i call a socket
            )
        ),
    ) 
})

"""
Esta configuración de enrutamiento raíz especifica que cuando se realiza una conexión con el servidor de desarrollo de Canales, ProtocolTypeRouterprimero inspeccionará el tipo de conexión. Si se trata de una conexión WebSocket ( ws: // o wss: // ), la conexión se dará al AuthMiddlewareStack.

El completará AuthMiddlewareStackel alcance de la conexión con una referencia al usuario actualmente autenticado, similar a cómo Django AuthenticationMiddlewarellena el objeto de solicitud de una función de vista con el usuario actualmente autenticado. (Los alcances se discutirán más adelante en este tutorial). Luego, se le dará la conexión al URLRouter.

El URLRouterexaminará la ruta HTTP de la conexión a la ruta a un consumidor en particular, sobre la base de las previstas urlpatrones.
"""
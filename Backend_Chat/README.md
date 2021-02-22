# Chat App

## WebSockets
    A diferencia de HTTP, el protocolo WebSockets permite la comunicación bidireccional, lo que significa que el servidor puede enviar datos al cliente sin que el usuario lo solicite. Con HTTP, solo el cliente que realizó una solicitud recibe una respuesta. Con WebSockets, el servidor puede comunicarse con varios clientes simultáneamente. enviamos mensajes de WebSockets usando el ws://prefijo, en lugar de http://.

    Las aplicaciones del mundo real para WebSockets son infinitas, incluidas aplicaciones de chat, Internet de las cosas, juegos multijugador en línea y, en realidad, cualquier aplicación en tiempo real.

## Channels
    Los canales envuelven el soporte de vista asíncrono nativo de Django, lo que permite que los proyectos de Django manejen no solo HTTP, sino también protocolos que requieren conexiones de larga duración: WebSockets, chatbots y más.

    Hace esto mientras preserva la naturaleza síncrona y fácil de usar de Django, lo que le permite elegir cómo escribe su código: síncrono en un estilo como las vistas de Django, totalmente asíncrono o una mezcla de ambos. Además de esto, proporciona integraciones con el sistema de autenticación, el sistema de sesión y más de Django, lo que hace que sea más fácil que nunca extender su proyecto solo HTTP a otros protocolos.

    Channels  le proporciona Consumers , una rica abstracción que le permite crear aplicaciones ASGI fácilmente. Los consumidores hacen un par de cosas en particular: estructuran su código como una serie de funciones que se llamarán cada vez que ocurre un evento, en lugar de hacer que escriba un bucle de eventos.

    Un Consumers es una clase cuyos métodos puede elegir escribir como funciones normales de Python (sincrónicas) o como esperables (asincrónicas). El código asincrónico no debe mezclarse con el código sincrónico. Así que hay funciones de conversión para convertir de asincrónico a sincronizado y viceversa. Recuerde que las partes de Django son sincrónicas.

* Documentacion: https://channels.readthedocs.io/en/stable/installation.html
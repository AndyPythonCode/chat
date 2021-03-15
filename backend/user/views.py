from rest_framework.views import APIView, View
from rest_framework.response import Response
from rest_framework import authentication, permissions

class CurrentUser(APIView):
    def get(self, request, format=None):
        user = request.user.username
        return Response({'user':user})

from rest_framework.serializers import ModelSerializer
from .models import MyUser

class UserSerializers(ModelSerializer):
    class Meta:
        model = MyUser
        fields = '__all__'
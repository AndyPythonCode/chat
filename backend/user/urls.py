from django.urls import path, include
from . import views

urlpatterns = [
    path('user/current_user/', views.CurrentUser.as_view(), name='current_user'),
    path('api/v1/', include('djoser.urls')),
    path('api/v1/', include('djoser.urls.authtoken')),
]

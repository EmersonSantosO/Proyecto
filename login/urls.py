from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, CustomAuthToken

router = DefaultRouter()
router.register(r'users', UserViewSet, basename='users')

urlpatterns = [
    path('', include(router.urls)),
    path('api-token-auth/', CustomAuthToken.as_view(), name='api_token_auth'),
]

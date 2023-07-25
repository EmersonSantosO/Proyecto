from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FamiliaViewSet, MonstruoViewSet, MasmorraViewSet

router = DefaultRouter()
router.register(r'familias', FamiliaViewSet, basename='familias')
router.register(r'monstruos', MonstruoViewSet, basename='monstruos')
router.register(r'masmorras', MasmorraViewSet, basename='masmorras')

urlpatterns = [
    path('', include(router.urls)),
]

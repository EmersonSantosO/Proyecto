from rest_framework import viewsets
from .models import Familia, Monstruo, Masmorra
from .serializers import FamiliaSerializer, MonstruoSerializer, MasmorraSerializer

class FamiliaViewSet(viewsets.ModelViewSet):
    queryset = Familia.objects.all()
    serializer_class = FamiliaSerializer

class MonstruoViewSet(viewsets.ModelViewSet):
    queryset = Monstruo.objects.all()
    serializer_class = MonstruoSerializer

class MasmorraViewSet(viewsets.ModelViewSet):
    queryset = Masmorra.objects.all()
    serializer_class = MasmorraSerializer

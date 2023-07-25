from rest_framework import serializers
from .models import Familia, Monstruo, Masmorra

class FamiliaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Familia
        fields = '__all__'


class MonstruoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Monstruo
        fields = '__all__'


class MasmorraSerializer(serializers.ModelSerializer):
    monstruos = MonstruoSerializer(many=True, read_only=True)
    class Meta:
        model = Masmorra
        fields = '__all__'

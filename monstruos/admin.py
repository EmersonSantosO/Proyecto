from django.contrib import admin
from .models import Familia, Monstruo, Masmorra

@admin.register(Familia)
class FamiliaAdmin(admin.ModelAdmin):
    list_display = ['nombre']


@admin.register(Monstruo)
class MonstruoAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'vida', 'familia']


@admin.register(Masmorra)
class MasmorraAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'nivel']

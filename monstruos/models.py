from django.db import models

class Familia(models.Model):
    nombre = models.CharField(max_length=200)

    def __str__(self):
        return self.nombre


class Monstruo(models.Model):
    nombre = models.CharField(max_length=200)
    vida = models.IntegerField()
    imagen = models.ImageField(upload_to="monstruos", null=True, blank=True)
    familia = models.ForeignKey(Familia, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre


class Masmorra(models.Model):
    nombre = models.CharField(max_length=200)
    nivel = models.IntegerField()
    monstruos = models.ManyToManyField(Monstruo)

    def __str__(self):
        return self.nombre

from django.db import models
from django.urls import reverse

# Create your models here.
class Category(models.Model) :
    name = models.CharField(max_length=20, db_index=True)
    meta_description = models.TextField(blank=True)

    class Meta :
        ordering = ['name']
        verbose_name = 'category'
        verbose_name_plural = 'categories'

    def __str__(self):
        return self.name


class Place(models.Model) :
    name = models.CharField(max_length=20, db_index=True)
    address = models.CharField(max_length=30, db_index=True)
    image = models.ImageField(upload_to='place/%Y/%m/%d', blank= True)
    description = models.TextField(max_length=100, blank= True)
    cleanliness = models.IntegerField()
    station = models.IntegerField()
    toilet = models.IntegerField()

class Street(models.Model) :
    name = models.CharField(max_length=20, db_index=True)
    address = models.CharField(max_length=30, db_index=True)
    image = models.ImageField(upload_to='place/%Y/%m/%d', blank=True)
    description = models.TextField(max_length=100, blank= True)
    light = models.IntegerField()
    people = models.IntegerField()
    clear = models.IntegerField()
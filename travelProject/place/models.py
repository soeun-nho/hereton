from django.db import models


# Create your models here.

class Review(models.Model):
    content = models.CharField(verbose_name="텍스트리뷰", max_length=128)
    light = models.IntegerField(null=True)
    people = models.IntegerField(null=True)
    clear = models.IntegerField(null=True)
    title = models.CharField(verbose_name="주소이름", max_length=1208, default=True)
    date = models.DateTimeField(verbose_name="작성일", auto_now_add=True)
    
    def __str__(self): 
        return self.content
    

class Kenmare(models.Model) :
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    # light = models.DecimalField(max_digits=2, decimal_places=1)
    # people = models.DecimalField(max_digits=2, decimal_places=1)
    # clear = models.DecimalField(max_digits=2, decimal_places=1)
    avg = models.DecimalField(max_digits=2, decimal_places=1)
    user_name = models.CharField(max_length=20)
    user_id = models.CharField(max_length=20)
    user_avg = models.DecimalField(max_digits=2, decimal_places=1)
    user_light = models.DecimalField(max_digits=2, decimal_places=1)
    user_people = models.DecimalField(max_digits=2, decimal_places=1)
    user_clear = models.DecimalField(max_digits=2, decimal_places=1)
    date = models.DateTimeField(verbose_name="작성일", auto_now_add=True)
    content = models.TextField(max_length=500)



class Bowery153_171(models.Model) :
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    # light = models.DecimalField(max_digits=2, decimal_places=1)
    # people = models.DecimalField(max_digits=2, decimal_places=1)
    # clear = models.DecimalField(max_digits=2, decimal_places=1)
    avg = models.DecimalField(max_digits=2, decimal_places=1)
    user_name = models.CharField(max_length=20)
    user_id = models.CharField(max_length=20)
    user_avg = models.DecimalField(max_digits=2, decimal_places=1)
    user_light = models.DecimalField(max_digits=2, decimal_places=1)
    user_people = models.DecimalField(max_digits=2, decimal_places=1)
    user_clear = models.DecimalField(max_digits=2, decimal_places=1)
    date = models.DateTimeField(verbose_name="작성일", auto_now_add=True)
    content = models.TextField(max_length=500)

class Bowery181(models.Model) :
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    # light = models.DecimalField(max_digits=2, decimal_places=1)
    # people = models.DecimalField(max_digits=2, decimal_places=1)
    # clear = models.DecimalField(max_digits=2, decimal_places=1)
    avg = models.DecimalField(max_digits=2, decimal_places=1)
    user_name = models.CharField(max_length=20)
    user_id = models.CharField(max_length=20)
    user_avg = models.DecimalField(max_digits=2, decimal_places=1)
    user_light = models.DecimalField(max_digits=2, decimal_places=1)
    user_people = models.DecimalField(max_digits=2, decimal_places=1)
    user_clear = models.DecimalField(max_digits=2, decimal_places=1)
    date = models.DateTimeField(verbose_name="작성일", auto_now_add=True)
    content = models.TextField(max_length=500, blank=True)

class Broome334(models.Model) :
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    # light = models.DecimalField(max_digits=2, decimal_places=1)
    # people = models.DecimalField(max_digits=2, decimal_places=1)
    # clear = models.DecimalField(max_digits=2, decimal_places=1)
    avg = models.DecimalField(max_digits=2, decimal_places=1)
    user_name = models.CharField(max_length=20)
    user_id = models.CharField(max_length=20)
    user_avg = models.DecimalField(max_digits=2, decimal_places=1)
    user_light = models.DecimalField(max_digits=2, decimal_places=1)
    user_people = models.DecimalField(max_digits=2, decimal_places=1)
    user_clear = models.DecimalField(max_digits=2, decimal_places=1)
    date = models.DateTimeField(verbose_name="작성일", auto_now_add=True)
    content = models.TextField(max_length=500)

class Bowery68(models.Model) :
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    # light = models.DecimalField(max_digits=2, decimal_places=1)
    # people = models.DecimalField(max_digits=2, decimal_places=1)
    # clear = models.DecimalField(max_digits=2, decimal_places=1)
    avg = models.DecimalField(max_digits=2, decimal_places=1)
    user_name = models.CharField(max_length=20)
    user_id = models.CharField(max_length=20)
    user_avg = models.DecimalField(max_digits=2, decimal_places=1)
    user_light = models.DecimalField(max_digits=2, decimal_places=1)
    user_people = models.DecimalField(max_digits=2, decimal_places=1)
    user_clear = models.DecimalField(max_digits=2, decimal_places=1)
    date = models.DateTimeField(verbose_name="작성일", auto_now_add=True)
    content = models.TextField(max_length=500)

class Chrystie(models.Model) :
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    # light = models.DecimalField(max_digits=2, decimal_places=1)
    # people = models.DecimalField(max_digits=2, decimal_places=1)
    # clear = models.DecimalField(max_digits=2, decimal_places=1)
    avg = models.DecimalField(max_digits=2, decimal_places=1)
    user_name = models.CharField(max_length=20)
    user_id = models.CharField(max_length=20)
    user_avg = models.DecimalField(max_digits=2, decimal_places=1)
    user_light = models.DecimalField(max_digits=2, decimal_places=1)
    user_people = models.DecimalField(max_digits=2, decimal_places=1)
    user_clear = models.DecimalField(max_digits=2, decimal_places=1)
    date = models.DateTimeField(verbose_name="작성일", auto_now_add=True)
    content = models.TextField(max_length=500)
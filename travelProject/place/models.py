from django.db import models


# Create your models here.

# class Category(models.Model) :
#     name = models.CharField(max_length=200, db_index=True)
#     meta_description = models.TextField(blank = True)
#     slug = models.SlugField(max_length=200, db_index=True, unique=True, allow_unicode=True)

#     class Meta :
#         ordering = ['name']
#         verbose_name = 'category'
#         verbose_name_plural = 'categories'

#     def __str__(self):
#         return self.name

#     def get_absolute_url(self):
#         return reverse('place:place_in_category', args=[self.slug])


# class Place(models.Model) :
#     category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name='places')
#     name = models.CharField(max_length=20, db_index=True)
#     slug = models.SlugField(max_length=100, db_index=True, unique=True, allow_unicode=True)
#     address = models.CharField(max_length=30, db_index=True)
#     image = models.ImageField(upload_to='place/%Y/%m/%d', blank= True)
#     description = models.TextField(max_length=100, blank= True)
#     cleanliness = models.IntegerField()
#     station = models.IntegerField()
#     toilet = models.IntegerField()

#     class Meta :
#         ordering = ['-created']
#         index_together = [['id', 'slug']]

#     def __str__(self):
#         return self.name

#     def get_absolute_url(self):
#         return reverse('place:place_detail', args=[self.id, self.slug])

# class Street(models.Model) :
#     category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name='places')
#     name = models.CharField(max_length=20, db_index=True)
#     slug = models.SlugField(max_length=100, db_index=True, unique=True, allow_unicode=True)
#     address = models.CharField(max_length=30, db_index=True)
#     image = models.ImageField(upload_to='place/%Y/%m/%d', blank=True)
#     description = models.TextField(max_length=100, blank= True)
#     light = models.IntegerField()
#     people = models.IntegerField()
#     clear = models.IntegerField()

#     class Meta:
#         ordering = ['-created']
#         index_together = [['id', 'slug']]

#     def __str__(self):
#         return self.name

#     def get_absolute_url(self):
#         return reverse('place:place_detail', args=[self.id, self.slug])


class Review(models.Model):
    content = models.CharField(verbose_name="텍스트리뷰", max_length=128)
    light = models.IntegerField(null=True)
    people = models.IntegerField(null=True)
    clear = models.IntegerField(null=True)
    title = models.CharField(verbose_name="주소이름", max_length=1208, default=True)

    def __str__(self): 
        return self.content
from django.db import models

class Organization(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(default="Organization in the KBTU")
    number_of_students = models.IntegerField(default=0)

    class Meta:
        verbose_name = 'Organization'
        verbose_name_plural = 'Organizations'
    
    def __str__(self):
        return f'{self.id}: {self.name}' 
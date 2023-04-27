from django.db import models
from django.contrib.auth.hashers import make_password

class Profile(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField()
    password = models.CharField(max_length=30)
    faculty = models.CharField(max_length=50)
    image = models.ImageField()

    class Meta:
        verbose_name = 'Profile'
        verbose_name_plural = 'Profiles'
    
    def __str__(self):
        return f'{self.id}: {self.first_name} {self.last_name}'
    
    def save(self, *args, **kwargs):
        self.password = make_password(self.password)
        super(Profile, self).save(*args, **kwargs)
from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractUser

class MyUserManager(BaseUserManager):
    def create_user(self, email, password, **kwargs):
        if not email:
            raise ValueError('The Email field must be set')

        user = self.model(
            email=self.normalize_email(email),
            **kwargs
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password, **kwargs):
        kwargs.setdefault('is_staff', True)
        kwargs.setdefault('is_superuser', True)

        if kwargs.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if kwargs.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, password, **kwargs)
    

class User(AbstractUser):
    email = models.EmailField(unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['password']

    objects = MyUserManager()

    def __str__(self):
        return self.email
    
class Faculty(models.Model):
    name = models.CharField(max_length=255)

    class Meta:
        verbose_name = 'Faculty'
        verbose_name_plural = 'Faculties'

    def __str__(self):
        return f'{self.name}'

class StudGovernment(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.name} {self.description}'

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    faculty = models.ForeignKey(Faculty, on_delete=models.PROTECT, default=None, null=True)
    
    def __str__(self):
        return f'{self.user}'
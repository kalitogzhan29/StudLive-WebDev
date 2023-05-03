from django.contrib import admin
from user_management.models import Faculty, Profile
from. import models

@admin.register(Faculty)
class FacultyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name')


admin.site.register(models.User)

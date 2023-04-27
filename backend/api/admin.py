from django.contrib import admin
from api import models

@admin.register(models.Organization)
class OrganizationAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'number_of_students')

@admin.register(models.Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('id', 'first_name', 'last_name')
from django.contrib import admin
from api import models

@admin.register(models.Organization)
class OrganizationAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'number_of_students')
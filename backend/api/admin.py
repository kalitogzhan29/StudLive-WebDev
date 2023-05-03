from django.contrib import admin
from api import models

@admin.register(models.Organization)
class OrganizationAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'number_of_students')

@admin.register(models.Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'description')

@admin.register(models.News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'pub_date')
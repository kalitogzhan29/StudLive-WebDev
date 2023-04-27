from django.urls import path
from api import views

urlpatterns = [
    path('organizations/', views.organization_list),
    path('organizations/<int:organization_id>', views.organization_detail),
]
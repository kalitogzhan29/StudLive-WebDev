from django.urls import path
from api import views

urlpatterns = [

    path('organizations/', views.organization_list),
    path('organizations/<int:pk>', views.organization_detail),

    path('events/', views.event_list),
    path('events/<int:pk>', views.event_detail),
    
    path('news/', views.NewsView.as_view()),
    path('news/<int:pk>', views.NewsDetailView.as_view()),
]
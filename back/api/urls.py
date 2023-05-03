from django.urls import path
from api import views

urlpatterns = [
    # path('login/', obtain_jwt_token),

    path('organizations/', views.organization_list),
    path('organizations/<int:organization_id>', views.organization_detail),

    path('events/', views.event_list),
    path('events/<int:event_id>', views.event_detail),
    
    # path('news/', views.news_list),
    # path('news/<int:news_id>', views.news_detail),
]
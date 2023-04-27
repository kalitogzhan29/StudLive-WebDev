from django.urls import path
from api import views




urlpatterns = [
    # path('login/', obtain_jwt_token),

    path('organizations/', views.organization_list),
    path('organizations/<int:organization_id>', views.organization_detail),

    path('profiles/', views.ProfileListAPIView.as_view()),
    path('profiles/<int:id>', views.ProfileByIdAPIView.as_view())
]
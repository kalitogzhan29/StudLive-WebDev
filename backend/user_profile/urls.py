from django.urls import path
from user_profile.views import ProfileListAPIView, ProfileByIdAPIView

urlpatterns = [
    path('profiles/', ProfileListAPIView.as_view()),
    path('profiles/<int:id>', ProfileByIdAPIView.as_view()),
]
from django.urls import path

from users.views import RegisterUserView

urlpatterns = [
    path('register/', RegisterUserView, name="register-user"),
]
from django.urls import path

from users.views import BlackListTokenview, RegisterUserView

# Simple JWT dependencies
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path("register/", RegisterUserView, name="register-user"),
    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("logout/blacklist/", BlackListTokenview, name="blacklist_tokens"),
]

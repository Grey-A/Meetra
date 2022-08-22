from django.urls import path

from call.views import GetUserInvites
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
    path("token/blacklist/", BlackListTokenview, name="blacklist_tokens"),
    path("invites/<int:pk>/", GetUserInvites, name="get-user-invites"),
]

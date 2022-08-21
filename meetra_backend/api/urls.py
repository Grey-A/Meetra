from django.urls import path, include

from api.views import ApiEndpointsView

# Simple JWT dependencies
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path("", ApiEndpointsView, name="api-endpoints"),
    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("user/", include("users.urls")),
]

from django.urls import path, include

from api.views import ApiEndpointsView


urlpatterns = [
    path("", ApiEndpointsView, name="api-endpoints"),
    path("user/", include("users.urls")),
    path("call/", include('call.urls'))
]

from django.urls import path

from api.views import ApiEndpointsView

urlpatterns = [
    path('', ApiEndpointsView, name="api-endpoints"),
]
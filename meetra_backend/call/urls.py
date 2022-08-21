from django.urls import path

from call.views import CreateCall


urlpatterns = [
    path("create/", CreateCall, name="create-call"),
]
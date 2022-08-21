from django.urls import path

from call.views import CreateCall, CreateMilestone


urlpatterns = [
    path("create/", CreateCall, name="create-call"),
    path("milestone/create/", CreateMilestone, name="create-milestone"),
]
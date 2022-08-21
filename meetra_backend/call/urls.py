from django.urls import path

from call.views import CreateCall, CreateMilestone, CreateInvite


urlpatterns = [
    path("create/", CreateCall, name="create-call"),
    path("milestone/create/", CreateMilestone, name="create-milestone"),
    path("invite/create/", CreateInvite, name="create-invite")
]
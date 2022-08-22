from django.urls import path

from call.views import CreateCall, CreateMilestone, CreateInvite, GetCallDetails, GenerateToken


urlpatterns = [
    path("create/", CreateCall, name="create-call"),
    path("milestone/create/", CreateMilestone, name="create-milestone"),
    path("invite/create/", CreateInvite, name="create-invite"),
    path("details/<uuid:uid>/", GetCallDetails, name="get-call-details"),
    path("token/<uuid:uid>/", GenerateToken, name="generate-token"),
]
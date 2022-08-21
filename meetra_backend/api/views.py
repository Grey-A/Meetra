from django.shortcuts import render

# Django rest imports
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.
@api_view(["GET"])
def ApiEndpointsView(request):
    api_endpoints = {
        "api/": "This URL contains all the available api endpoints",
        "api/user/register": "This accepts a POST request with the data full_name, username, email and password",
        "api/user/token": "This accepts the users email and pasword then returns a jwt [refresh and access]token",
        "api/user/token/refresh": "This accepts the users refresh token if the access token is expired and returns a new access token",
        "api/user/token/blacklist": "This blacklists the users tokens which is equivalent to logging them out NOTE: make sure to remove the tokens from the users local storage",
    }
    return Response(api_endpoints)

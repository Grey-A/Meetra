from django.shortcuts import render

# Django rest imports
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.
@api_view(["GET"])
def ApiEndpointsView(request):
    api_endpoints = {
        'api/': 'This URL contains all the available api endpoints',
        'api/user/register': 'This accepts a POST request with the data full_name, username, email and password',
    }
    return Response(api_endpoints)
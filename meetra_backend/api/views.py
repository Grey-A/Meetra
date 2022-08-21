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
        "api/call/create/": "This accepts [host(user_id), channel_name(txt), scheld_time(NOTE: the format is YYYY-MM-DDThh:mm, you can ignore the seconds, e.g. 2015-10-22T18:17), and is_group which is either True or False]",
        "api/call/milestone/create/": "This accepts [call(uid of the call), title(txt), info(txt), duration(min:5, max: 60)]",
        "api/call/invite/create": "This accepts [call_uid, user_id]"
    }
    return Response(api_endpoints)

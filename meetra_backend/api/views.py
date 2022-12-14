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
        "api/call/milestone/create/": "This accepts [call(uid of the call), num(the number of the milestone e.g the ordering) title(txt), info(txt), duration(min:5, max: 60)]",
        "api/call/invite/create": "This accepts [call_uid, user_id]",
        "api/call/details/<uuid:uid>/": "The <uuid:uid> should contain the call uid, this returns a dictionary containting [DURATION(of the call), MILESTONES(this is a list of dictionaries that contains all the milestones associated with the call), CALL(this is a dictionary containing all the call details)", 
        "api/user/invites/<int:pk>": "The <int:pk> refers to the users_id, this returns all the meetings the user has been invited to and their id",
        "api/call/invite/<uuid:uid>/": "This accepts the call uid in the field uuid and returns a token for joining calls"
    }
    return Response(api_endpoints)

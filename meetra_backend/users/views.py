from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from rest_framework_simplejwt.tokens import RefreshToken

from users.serializers import RegisterUserSerializer

# Create your views here.
@api_view(["POST"])
def RegisterUserView(request):
    reg_serializer = RegisterUserSerializer(data=request.data)
    if reg_serializer.is_valid():
        new_user = reg_serializer.save()
        if new_user:
            created = {"response": "User has been Created"}
            return Response(status=status.HTTP_201_CREATED, data=created)
    return Response(reg_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def BlackListTokenview(request):
    try:
        refresh_token = request.data["refresh_token"]
        token = RefreshToken(refresh_token)
        token.blacklist()
        success = {"Success": "User has been logged out"}
        return Response(data=success)
    except Exception as e:
        return Response(status=status.HTTP_400_BAD_REQUEST)

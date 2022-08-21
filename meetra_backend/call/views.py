from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from call.serializers import CallSerializer
from call.serializers import MilestoneSerializer


# Create your views here.
@api_view(["POST"])
def CreateCall(request):
    call_serializer = CallSerializer(data=request.data)
    if call_serializer.is_valid():
        call = call_serializer.save()
        if call:
            return Response(status=status.HTTP_201_CREATED)
    return Response(call_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def CreateMilestone(request):
    milstn_serializer = MilestoneSerializer(data=request.data)
    if milstn_serializer.is_valid():
        milestone = milstn_serializer.save()
        if milestone:
            return Response(status=status.HTTP_201_CREATED)
    return Response(milstn_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

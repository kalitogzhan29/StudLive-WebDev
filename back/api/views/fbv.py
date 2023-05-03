from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.serializers import *
from api.models import *

@api_view(['GET', 'POST'])
def organization_list(request):
    if request.method == 'GET':
        companies = Organization.objects.all()
        serializer = OrganizationSerializer(companies, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = OrganizationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'PUT', 'DELETE']) 
def organization_detail(request, organization_id):
    try:
        organization = Organization.objects.get(id=organization_id)
    except Organization.DoesNotExist as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'GET':
        serializer = OrganizationSerializer(organization)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = OrganizationSerializer(instance=organization, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        organization.delete()
        return Response({'deleted': True})
    



@api_view(['GET', 'POST'])
def event_list(request):
    if request.method == 'GET':
        events = Event.objects.all()
        serializer = EventModelSerializer(events, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = EventModelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def event_detail(request, pk):
    try:
        event = Event.objects.get(pk=pk)
    except Event.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = EventModelSerializer(event)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = EventModelSerializer(event, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        event.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.serializers import OrganizationSerializer, EventModelSerializer
from api.models import Organization, Event

@api_view(['GET', 'POST'])
def organization_list(request):
    if request.method == 'GET':
        organization = Organization.objects.all()
        serializer = OrganizationSerializer(organization, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = OrganizationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'PUT', 'DELETE']) 
def organization_detail(request, pk):
    try:
        organization = Organization.objects.get(pk=pk)
    except Organization.DoesNotExist as e:
        return Response({'error': "Organization doesn't exist"}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = OrganizationSerializer(organization)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = OrganizationSerializer(instance=organization, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        organization.delete()
        return Response({'deleted': True}, status=status.HTTP_204_NO_CONTENT)
    



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
    except Event.DoesNotExist as e:
        return Response({"error": "Event doesn't exist"}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = EventModelSerializer(event)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = EventModelSerializer(event, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        event.delete()
        return Response({'deleted': True}, status=status.HTTP_204_NO_CONTENT)

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

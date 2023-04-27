from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from api.models import *
from api.serializers.profile_srlzr import *

class ProfileListAPIView(APIView):
    def get(self, request):
        profiles = Profile.objects.all()
        serializer = ProfileModelSerializer(profiles,many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = ProfileModelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProfileByIdAPIView(APIView):
    permission_classes = [IsAuthenticated]
    def get_object(self, id):
        try:
            return Profile.objects.get(id=id)
        except Profile.DoesNotExist as e:
            return Response({'error': e}, status=status.HTTP_400_BAD_REQUEST)
    def get(self, request, id):
        try:
            instance = self.get_object(id)
        except Profile.DoesNotExist as e:
            return Response({'error': e}, status=status.HTTP_400_BAD_REQUEST)
        serializer = ProfileModelSerializer(instance)
        return Response(serializer.data)
    def put(self, request, id):
        instance = self.get_object(id)
        serializer = ProfileModelSerializer(instance=instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self,request,id):
        instance = self.get_object(id)
        instance.delete()
        return Response({'deleted': True})
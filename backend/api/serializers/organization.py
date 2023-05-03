from rest_framework import serializers
from api import models

class OrganizationSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=255)
    description = serializers.CharField(required=False)
    number_of_students = serializers.IntegerField(default=0)

    def create(self, validated_data):
        organization = models.Organization.objects.create(**validated_data)
        return organization
    
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.number_of_students = validated_data.get('number_of_students', instance.number_of_students)
        instance.save()
        return instance

from rest_framework import serializers
from api import models

class ProfileSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    first_name = serializers.CharField(max_length=50)
    last_name = serializers.CharField(max_length=50)
    email = serializers.EmailField()
    password = serializers.CharField()
    faculty = serializers.CharField(max_length=50)
    image = serializers.ImageField()

    def create(self, validated_data):
        organization = models.Profile.objects.create(**validated_data)
        return organization
    
    def update(self, instance, validated_data):
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.course = validated_data.get('course', instance.course)
        instance.faculty = validated_data.get('faculty', instance.faculty)
        instance.organization = validated_data.get('organization', instance.organization)
        instance.save()
        return instance

class ProfileModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Profile
        fields = '__all__'
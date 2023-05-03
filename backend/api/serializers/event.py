from rest_framework import serializers
from api.models import Event

class EventModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'
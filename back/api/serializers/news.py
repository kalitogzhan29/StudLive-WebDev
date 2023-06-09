from rest_framework import serializers
from api.models import News

class NewsSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(max_length=255)
    description = serializers.CharField(required=False, max_length=255)
    pub_date = serializers.DateField(required=False)

    def create(self, validated_data):
        news = News.objects.create(**validated_data)
        return news
    
    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        instance.save()
        return instance

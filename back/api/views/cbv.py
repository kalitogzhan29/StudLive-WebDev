from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from api.models import News
from api.serializers import NewsSerializer

class NewsView(APIView):
    def get(self, request):
        news = News.objects.all()
        serializer = NewsSerializer(news, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = NewsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class NewsDetailView(APIView):
    def get_object(self, pk):
        try:
            news = News.objects.get(pk=pk)
            return news
        except News.DoesNotExist:
            return Response({"error": "News doesn't exist"}, status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        news = self.get_object(pk=pk)
        serializer = NewsSerializer(news)
        return Response(serializer.data)

    def put(self, request, pk):
        news = self.get_object(pk)
        serializer = NewsSerializer(news, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        news = self.get_object(pk)
        news.delete()
        return Response({"deleted": True}, status=status.HTTP_204_NO_CONTENT)
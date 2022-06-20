from urllib import request
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Text
from .serializers.common import TextSerializer
from .serializers.populated import PopulatedTextSerializer

from rest_framework.permissions import IsAuthenticatedOrReadOnly


class TextListView(APIView):

    def get(self, _request):
        texts = Text.objects.all()
        serialized_texts = TextSerializer(texts, many=True)
        return Response(serialized_texts.data, status=status.HTTP_200_OK)

    def post(self, request):
        deserialized_text = TextSerializer(data=request.data)

        print(deserialized_text)

        try:
            deserialized_text.is_valid()
            deserialized_text.save()
            return Response(deserialized_text.data, status.HTTP_201_CREATED)
        except Exception as e:
            print(type(e))
            print(e)
            return Response({'detail': str(e)}, status.HTTP_422_UNPROCESSABLE_ENTITY)


class TextDetailView(APIView):

    def get_text(self, pk):
        try:
            return Text.objects.get(pk=pk)
        except Text.DoesNotExist as e:
            print(e)
            return Response({'detail': str(e)})

    def get(self, _request, pk):
        text = self.get_text(pk)
        serialized_text = TextSerializer(text)
        return Response(serialized_text.data, status.HTTP_200_OK)

    def delete(self, _request, pk):
        text_to_delete = self.get_text(pk)
        text_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        print(request.data)
        text_to_update = self.get_text(pk=pk)
        print(type(text_to_update))
        deserialized_Text = TextSerializer(text_to_update, request.data)
        try:
            deserialized_Text.is_valid()
            deserialized_Text.save()
            return Response(deserialized_Text.data, status.HTTP_202_ACCEPTED)
        except Exception as e:
            print(e)
            return Response({'detail': str(e)}, status.HTTP_422_UNPROCESSABLE_ENTITY)


class TextGroupView(APIView):
    def get_text(self, user):
        try:
            return Text.objects.filter(user=user)
        except Text.DoesNotExist as e:
            print(e)
            return Response({'detail': str(e)})

    def get(self, _request, user):
        text = self.get_text(user)
        serialized_text = TextSerializer(text, many=True)
        return Response(serialized_text.data, status.HTTP_200_OK)

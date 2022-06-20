from .common import UserSerializer
from texts.serializers.populated import TextSerializer

class PopulatedTextSerializer(TextSerializer):
    texts = TextSerializer(many=True)
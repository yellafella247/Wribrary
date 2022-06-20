from .common import TextSerializer
from jwt_auth.serializers.common import UserSerializer

class PopulatedTextSerializer(TextSerializer):
    user = UserSerializer()
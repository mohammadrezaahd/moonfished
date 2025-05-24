from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny
from authentication.models import CustomUser
from authentication.serializers import RegisterSerializer


class RegisterView(CreateAPIView):
    queryset = CustomUser.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

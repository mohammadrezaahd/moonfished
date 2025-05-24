from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from authentication.serializers import (
    RegisterSerializer,
    LoginSerializer,
    LogoutSerializer,
)
from authentication.models import CustomUser
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken


class RegisterView(CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)
        refresh_token = str(refresh)

        data = {
            "user": {
                "id": user.id,
                "username": user.username,
                "email": user.email,
            },
            "refresh": refresh_token,
            "access": access_token,
        }

        return Response(data, status=status.HTTP_201_CREATED)


class LoginView(CreateAPIView):
    queryset = None  # چون کاربر رو authenticate می‌کنیم، نیازی به queryset نیست
    serializer_class = LoginSerializer
    permission_classes = (AllowAny,)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)
        refresh_token = str(refresh)

        data = {
            "user": {
                "id": user.id,
                "username": user.username,
                "email": user.email,
            },
            "refresh": refresh_token,
            "access": access_token,
        }
        return Response(data, status=status.HTTP_200_OK)


class LogoutView(CreateAPIView):
    serializer_class = LogoutSerializer
    permission_classes = (IsAuthenticated,)
    queryset = None  # نیازی به کوئری ست نیست چون صرفا توکن رو بلاک می‌کنیم

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()  # بلاک کردن توکن انجام می‌شود
        return Response(
            {"detail": "Logout successful"}, status=status.HTTP_204_NO_CONTENT
        )

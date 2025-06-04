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
            "message": "User created successfull",
            "data": {
                "id": user.id,
                "username": user.username,
                "email": user.email,
            },
        }

        response = Response(data, status=status.HTTP_201_CREATED)
        response.set_cookie(
            key="access_token",
            value=access_token,
            httponly=True,
            secure=False,  # Https only
            samesite='Lax',
            max_age=3600
        )
        response.set_cookie(
            key="refresh_token",
            value=refresh_token,
            httponly=True,
            secure=True,
            samesite='Lax',
            max_age=7 * 24 * 3600
        )

        return response


class LoginView(CreateAPIView):
    queryset = None
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
            "message": "User logged-in successfull",
            "user": {
                "id": user.id,
                "username": user.username,
                "email": user.email,
            },
        }
        response = Response(data, status=status.HTTP_200_OK)
        response.set_cookie(
            key="access_token",
            value=access_token,
            httponly=True,
            secure=False,  # Https only
            samesite='Lax',
            max_age=3600
        )
        response.set_cookie(
            key="refresh_token",
            value=refresh_token,
            httponly=True,
            secure=True,
            samesite='Lax',
            max_age=7 * 24 * 3600
        )

        return response


class LogoutView(CreateAPIView):
    serializer_class = LogoutSerializer
    permission_classes = (IsAuthenticated,)
    queryset = None

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(
            {"detail": "Logout successful"}, status=status.HTTP_204_NO_CONTENT
        )

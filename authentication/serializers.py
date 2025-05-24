from rest_framework import serializers
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken, TokenError
from .models import CustomUser


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)
    repeat_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = CustomUser
        fields = ("username", "email", "password", "repeat_password")

    def validate(self, attrs):
        if attrs["password"] != attrs["repeat_password"]:
            raise serializers.ValidationError({"password": "Passwords do not match"})
        return attrs

    def create(self, validated_data):
        validated_data.pop("repeat_password")
        password = validated_data.pop("password")
        user = CustomUser(**validated_data)
        user.set_password(password)
        user.save()
        return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, attrs):
        username = attrs.get("username")
        password = attrs.get("password")
        if not username or not password:
            raise serializers.ValidationError("Both username and password are required")

        user = authenticate(username=username, password=password)
        if not user:
            raise serializers.ValidationError("Invalid username or password")

        self.user = user
        return attrs

    def create(self, validated_data):
        # فقط برای رفع ارور CreateAPIView
        return self.user


class LogoutSerializer(serializers.Serializer):
    refresh = serializers.CharField()

    def validate(self, attrs):
        self.token = attrs.get("refresh")
        if not self.token:
            raise serializers.ValidationError("Refresh token is required")
        return attrs

    def save(self, **kwargs):
        try:
            token = RefreshToken(self.token)
            token.blacklist()
        except TokenError:
            raise serializers.ValidationError("Invalid or expired token")

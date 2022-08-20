# Django Rest Framework 
from rest_framework import serializers

# Project Imports
from users.models import CustomUser


# Create Your Serializers here
class RegisterUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomUser
        fields = (
            'full_name',
            'username',
            'email',
            'password',
        ) 
        extra_kwargs = {
            'password':{
                'write_only':True
            }
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
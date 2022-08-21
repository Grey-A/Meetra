# Django Rest Framework
from rest_framework import serializers

from call.models import Call

class CallSerializer(serializers.ModelSerializer):
    class Meta:
        model = Call
        fields = (
            "host",
            "channel_name",
            "about",
            "scheld_time",
            "is_group",
        )

    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance
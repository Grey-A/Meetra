# Django Rest Framework
from rest_framework import serializers

from call.models import Call, Milestone, Invite


class CallSerializer(serializers.ModelSerializer):
    class Meta:
        model = Call
        fields = (
            "uid",
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


class MilestoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Milestone
        fields = (
            "call",
            "num",
            "title",
            "info",
            "duration",
        )

    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance


class InviteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Invite
        fields = (
            "call",
            "user",
            "date_sent",
            "accepted"
        )

    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance

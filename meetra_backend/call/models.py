import uuid
from django.db import models
from django.db.models import Sum
from django.core.validators import MaxValueValidator, MinValueValidator

from users.models import CustomUser

# Create your models here.
class Milestone(models.Model):
    call = models.ForeignKey("Call", on_delete=models.CASCADE, to_field="uid")
    num = models.IntegerField()
    title = models.CharField(max_length=150, help_text="Title of the milestone")
    info = models.TextField(
        max_length=300, blank=True, null=True, help_text="more info about the milestone"
    )
    # timefield or integer? fix it later
    duration = models.PositiveSmallIntegerField(
        help_text="duration of the milestone in minuites",
        validators=[MaxValueValidator(60), MinValueValidator(5)],
    )

    def __str__(self):
        return f"{ self.title } from { self.call.channel_name }"


class Call(models.Model):
    uid = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False
    )
    host = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    channel_name = models.CharField(
        help_text="This refers to the title of the call e.g. Product Meeting",
        max_length=100,
        db_index=True,
    )
    about = models.TextField(
        help_text="What is the meeting about e.g. discussion for latest product model",
        max_length=300,
        blank=True,
        null=True,
    )
    scheld_time = models.DateTimeField(
        blank=True, null=True, help_text="The date and time the meeting will be held"
    )
    is_group = models.BooleanField(default=False)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.channel_name + " | " + str(self.uid)

    def duration(self):
        milestones = Milestone.objects.filter(call=self.uid)
        duration = milestones.aggregate(Sum("duration"))
        return duration


class Invite(models.Model):
    call = models.ForeignKey(Call, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    date_sent = models.DateTimeField(auto_now_add=True)
    accepted = models.BooleanField(default=False)

    def __str__(self):
        return f"{ self.user } - { self.call }"

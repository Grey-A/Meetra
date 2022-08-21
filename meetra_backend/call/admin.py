from django.contrib import admin

from call.models import Milestone, Call, Invite

# Register your models here.
admin.site.register(Milestone)
admin.site.register(Call)
admin.site.register(Invite)
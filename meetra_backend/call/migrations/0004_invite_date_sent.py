# Generated by Django 4.1 on 2022-08-22 10:15

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('call', '0003_milestone_num'),
    ]

    operations = [
        migrations.AddField(
            model_name='invite',
            name='date_sent',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
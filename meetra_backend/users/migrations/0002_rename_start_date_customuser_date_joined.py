# Generated by Django 4.1 on 2022-08-20 13:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='customuser',
            old_name='start_date',
            new_name='date_joined',
        ),
    ]
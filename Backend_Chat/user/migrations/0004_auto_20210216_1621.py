# Generated by Django 3.1.6 on 2021-02-16 20:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0003_auto_20210216_1614'),
    ]

    operations = [
        migrations.AlterField(
            model_name='myuser',
            name='email',
            field=models.EmailField(max_length=80, unique=True, verbose_name='email address'),
        ),
    ]

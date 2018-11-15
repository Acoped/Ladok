from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Grade(models.Model):
    ideal = models.CharField(max_length = 10)
    enroll_code = models.CharField(max_length = 50)
    grade = models.CharField(max_length = 3)

    def __str__(self):
        return self.ideal + " : " + self.enroll_code


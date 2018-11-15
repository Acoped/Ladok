from django.shortcuts import render

from rest_framework import generics

from .models import Grade
from .serializers import GradeSerializer

# Create your views here.


class GradeList(generics.ListCreateAPIView):
    queryset = Grade.objects.all()
    serializer_class = GradeSerializer


class GradeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Grade.objects.all()
    serializer_class = GradeSerializer


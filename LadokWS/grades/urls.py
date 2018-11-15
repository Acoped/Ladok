from django.urls import path
from .views import GradeList, GradeDetail

urlpatterns = [
    path('<int:pk>/', GradeDetail.as_view()),
    path('', GradeList.as_view()),
]

from django.test import TestCase
from django.contrib.auth.models import User

from .models import Grade

# Create your tests here.

class LadokWSTests(TestCase):

    @classmethod
    def setUpTestData(cls):

        # Create a grade
        test_grade = Grade.objects.create(ideal = 'abcdef-0', enroll_code = 'LTU00000', grade = 'VG')
        test_grade.save()

    def test_grade_content(self):

        grade = Grade.objects.get(id=1)

        expected_ideal = f'{grade.ideal}'
        expected_enroll_code = f'{grade.enroll_code}'
        expected_grade = f'{grade.grade}'

        self.assertEquals(expected_ideal, 'abcdef-0')
        self.assertEquals(expected_enroll_code, 'LTU00000')
        self.assertEquals(expected_grade, 'VG')

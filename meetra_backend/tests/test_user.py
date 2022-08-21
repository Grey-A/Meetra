from django.test import TestCase

from rest_framework import status
from rest_framework.test import APITestCase
from rest_framework.test import APIRequestFactory

from users.models import CustomUser


class CustomUserModelTest(TestCase):
    """This Tests the custom user model"""

    def setUp(self):
        self.user = CustomUser.objects.create(
            full_name="test case",
            username="testcase",
            email="test@case.com",
            password="testcase",
        )

    def test_user_details(self):

        self.assertEqual(self.user.full_name, "test case")
        self.assertEqual(self.user.username, "testcase")
        self.assertEqual(self.user.email, "test@case.com")
        self.assertEqual(self.user.password, "testcase")
        self.assertEqual(self.user.is_staff, False)
        self.assertEqual(self.user.is_superuser, False)
        self.assertEqual(self.user.is_active, True)


class UserApiTest(APITestCase):
    """This tests all the user API calls e.g. register, login, logout"""

    def test_registration(self):
        data = {
            "full_name": "registration test",
            "username": "testcase",
            "email": "test@testcase.com",
            "password": "test_boyyy",
        }
        response = self.client.post("http://127.0.0.1:8000/api/user/register/", data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

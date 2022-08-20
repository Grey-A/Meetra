
from rest_framework import status
from rest_framework.test import APITestCase

class CustomUserTest(APITestCase):

    def test_registration(self):
        data = {
            "full_name": "registration test",
            "username": "testcase",
            "email": "test@testcase.com",
            "password": "test_boyyy",
        }
        response = self.client.post('http://127.0.0.1:8000/api/user/register/', data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

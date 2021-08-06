from django.conf import settings
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

from requests.auth import HTTPBasicAuth
import requests


def index(request):
    response  = requests.get(settings.URL_API + '/solicitudes/sol/ures/')
    ures      = response.json()

    return render(request, "principal/index.html" , { 'ureslist': ures })
from django.conf import settings
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

from requests.auth import HTTPBasicAuth
import requests


def index(request):
    response  = requests.get(settings.URL_API + '/solicitudes/sol/ures/')
    ures      = response.json()

    return render(request, "principal/index.html" , { 'ureslist': ures })

def forms(request, area):
    response  = requests.get(settings.URL_API + '/solicitudes/sol/ures/')
    ures      = response.json()
    
    new_url =request.scheme+'://'+request.get_host() + '/digitalapp/'
    
    return render(request, "principal/forms.html" , { 'ureslist': ures, 'area': area , 'url': new_url })
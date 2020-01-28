from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import requests

from requests.auth import HTTPBasicAuth


def index(request):
    response  = requests.get('http://192.168.10.46:8000/solicitudes/sol/ures/')
    ures      = response.json()
    ureslist = {}

    for k in ures:
        ureslist.update({ k['id']: k['ures_descrip']})

    return render(request, "principal/index.html" , { 'ureslist': ureslist })
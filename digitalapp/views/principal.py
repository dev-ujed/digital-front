from django.shortcuts import render
import requests

from requests.auth import HTTPBasicAuth


def index(request):
    ureslist = requests.get('http://192.168.10.46:8000/solicitudes/sol/ures/')
    return render(request, "principal/index.html" , { 'ureslist': ureslist.json() })
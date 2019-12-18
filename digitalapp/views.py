from django.shortcuts import render
from django.http import HttpResponse
import requests
from requests.auth import HTTPBasicAuth


def index(request):

    ureslist = requests.get('http://192.168.10.46:8000/solicitudes/sol/ures/')
    return render(request, "principal/index.html" , { 'ureslist': ureslist.json() })


def save(request):
    data = {
        "matricula":"123465",
        "ures": 1,
        "nombre": "ejemplo",
        "apellido_paterno": "ejem",
        "apellido_materno": "plos",
        "correo": "ejemplo@ujed.mx",
        "extension": "542",
        "telefono": "12345678",
        "pautoriza": "EjemploMayor",
        "servicio": 2,
        "subservicio": 1,
        "descripcion": "Deseo un sitio web de ejemplo",
        "descripcon_archivo": "",
    }

    response = requests.post('http://192.168.10.46:8000/solicitudes/sol/solicitudes/', data=data)

    return HttpResponse(response)



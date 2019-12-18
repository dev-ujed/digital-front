from django.shortcuts import render
from django.http import HttpResponse
import requests, json
from requests.auth import HTTPBasicAuth


def index(request):

    ureslist = requests.get('http://192.168.10.46:8000/solicitudes/sol/ures/')
    return render(request, "principal/index.html" , { 'ureslist': ureslist.json() })


def save(request):
    data_request = json.loads(request.body.decode('utf-8'))

    data = {
        "matricula": data_request['matricula'],
        "ures": data_request['unit'],
        "nombre": data_request['name'],
        "apellido_paterno": data_request['first_last_name'],
        "apellido_materno": data_request['second_last_name'],
        "correo": data_request['email'],
        "extension": data_request['extension'],
        "telefono": data_request['phone'],
        "pautoriza": data_request['from'],
        "servicio": 2,
        "subservicio": 1,
        "descripcion": data_request['request_description'],
        "descripcon_archivo": "",
    }

    response = requests.post('http://192.168.10.46:8000/solicitudes/sol/solicitudes/', data=data)

    return HttpResponse(response)



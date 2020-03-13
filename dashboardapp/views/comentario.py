from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import requests, json

from requests.auth import HTTPBasicAuth


def comentario(request):
    data = {
        "user": request.session['user']['id'],
        "descripcion": request.POST['descripcion'],
        "tipo": request.POST['tipo'],
        "subservicio": request.POST['subservicio']
    }

    response = requests.post('http://192.168.10.46:8000/solicitudes/sol/comment/')

    return HttpResponse(response, status = 200)

    return displayResponse(response)


def displayResponse(response):
    if response.status_code == 422:
        return JsonResponse({'errors':response.json()}, status = 422)
    else:
        return JsonResponse(response.json())
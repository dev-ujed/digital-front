from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
import requests
import json

def actualizarTitulo(request, folio):
    errors = {}
    data  = {
        "titulo": request.POST['title']
    }

    response = requests.put('http://192.168.10.46:8000/solicitudes/sol/actualizar-titulo/'+folio, data=data)

    return JsonResponse(response.json(), safe=False)
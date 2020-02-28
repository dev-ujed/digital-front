from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
import requests
import json

def guardarServicio(request, folio):

    data_request = json.loads(request.body.decode('utf-8'))
    errors = {}

    data = {
        "folio": folio,
        "subservice_id": data_request['subservice_id'],
        "comentario": data_request['comentario']
    }

    response = requests.post('http://192.168.10.46:8000/solicitudes/sol/guardar-subservicio/', data=data)

    if response.status_code == 201:
        return JsonResponse(response.json())
    else:
        errors.update(response.json())
        return JsonResponse({'errors':errors}, status = 422)
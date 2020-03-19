from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
import requests
import json
from datetime import datetime

def guardarServicio(request, folio):

    data_request = json.loads(request.body.decode('utf-8'))
    errors = {}

    data = {
        "folio": folio,
        "subservice_id": data_request['subservicio'],
        "comentario": data_request['comentario'],
        "user" : request.session['user']['id']
    }

    response = requests.post('http://192.168.10.46:8000/solicitudes/sol/guardar-subservicio/', data=data)

    #return JsonResponse({'errors':response.json()})

    if response.status_code == 201:

        process = response.json()

        date = datetime.strptime(process['fec_subservicio'], "%d/%m/%Y %H:%M")
        fec_subservicio = date.strftime("%A %d %h %Y, %I:%M %p")
        process.update({'fec_subservicio' : fec_subservicio.capitalize()})

        return JsonResponse(process)
    else:
        errors.update(response.json())
        return JsonResponse({'errors':errors}, status = 422)
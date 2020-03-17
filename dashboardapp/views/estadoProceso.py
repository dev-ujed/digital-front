from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import requests, json
from datetime import datetime

from requests.auth import HTTPBasicAuth

def estadoProceso(request, subservice):

    data_request = json.loads(request.body.decode('utf-8'))

    data = {
        "subservice_id": subservice,
        "status": data_request['status'],
        "comentario": data_request['comentario'],
        "user": request.session['user']['id']
    }

    response = requests.put('http://192.168.10.46:8000/solicitudes/sol/actualizar-subservicio/', data=data)

    if response.status_code == 422:
        return JsonResponse({'errors':response.json()}, status = 422)
    else:

        process = response.json()

        date = datetime.strptime(process['fec_subservicio'], "%d/%m/%Y %H:%M")
        fec_subservicio = date.strftime("%A %d %h %Y, %I:%M %p")
        process.update({'fec_subservicio' : fec_subservicio.capitalize()})

        date = datetime.strptime(process['estatus_update'], "%d/%m/%Y %H:%M")
        estatus_update = date.strftime("%A %d %h %Y, %I:%M %p")
        process.update({'estatus_update' : estatus_update.capitalize()})

        return JsonResponse(process)
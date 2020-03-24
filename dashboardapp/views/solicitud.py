from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
import requests
import locale
from datetime import datetime
import json
from django.urls import reverse_lazy

def solicitud(request, folio):

    if request.session.is_empty():
        return redirect(reverse_lazy('public:ingresar'))
    else:

        responseServices = requests.get('http://192.168.10.46:8000/solicitudes/sol/servicios/')
        services  = responseServices.json()

        response = requests.get('http://192.168.10.46:8000/solicitudes/sol/detallesol/'+folio)
        solicitud  = response.json()

        statuses = requests.get('http://192.168.10.46:8000/solicitudes/sol/estatus_proceso/')
        statuses = statuses.json()

        if solicitud[0]['fecha_sol'] != None:
            locale.setlocale(locale.LC_TIME, 'es_ES')
            date = datetime.strptime(solicitud[0]['fecha_sol'], "%d/%m/%Y %H:%M")
            localDate = getLocaleDate(date);
            solicitud[0]['fecha_sol'] = date.strftime("%d %B %Y, %I:%M")+' '+localDate
            

        for file in solicitud[0]['archivos_solicitud']:

            date = datetime.strptime(file['subido'], "%d/%m/%Y %H:%M")
            localDate = getLocaleDate(date);
            file['subido'] = date.strftime("%d %h %Y, %I:%M")+' '+localDate

        for service in solicitud[0]['subservices']:

            date = datetime.strptime(service['fec_subservicio'], "%d/%m/%Y %H:%M")
            localDate = getLocaleDate(date);
            service['fec_subservicio'] = date.strftime("%d %h %Y, %I:%M")+' '+localDate

        return render(request, "solicitudes/show.html", {
            'request': solicitud[0],
            'subservices': json.dumps(solicitud[0]['subservices']),
            'services': services,
            'statuses': statuses
        })

def getLocaleDate(date):
    if(date.strftime("%p") == 'PM'):
        return 'p.m.'
    else:
        return 'a.m.'
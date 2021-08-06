from django.conf import settings
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from django.urls import reverse_lazy

from datetime import datetime
import json, locale, requests


def solicitud(request, folio):
    if request.session.is_empty():
        return redirect(reverse_lazy('public:ingresar'))
    else:
        team = requests.get(settings.URL_API + '/solicitudes/sol/participante/')
        team = team.json()

        responseServices = requests.get(settings.URL_API + '/solicitudes/sol/servicios/')
        services  = responseServices.json()

        response = requests.get(settings.URL_API + '/solicitudes/sol/detallesol/'+folio)
        solicitud  = response.json()

        statuses = requests.get(settings.URL_API + '/solicitudes/sol/estatus_proceso/')
        statuses = statuses.json()

        if solicitud[0]['fecha_sol'] != None:
            #locale.setlocale(locale.LC_TIME, '')
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
            'request' : solicitud[0],
            'subservices' : json.dumps(solicitud[0]['subservices']),
            'services' : services,
            'statuses' : statuses,
            'team': team
        })

def getLocaleDate(date):
    if(date.strftime("%p") == 'PM'):
        return 'p.m.'
    else:
        return 'a.m.'
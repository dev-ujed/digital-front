from django.conf import settings
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.utils.dateparse import parse_date

from datetime import datetime
import json, locale, requests


def solicitudesProceso(request):
    #locale.setlocale(locale.LC_TIME, '')

    if request.session.is_empty():
        return redirect(reverse_lazy('public:ingresar'))
    else:
        team = requests.get(settings.URL_API + '/solicitudes/sol/participante/')
        team = team.json()

        statuses = requests.get(settings.URL_API + '/solicitudes/sol/estatus_proceso/')
        statuses = statuses.json()

        statusSubservices = []
        statusResponse = requests.get(settings.URL_API + '/solicitudes/sol/cat_estatus/')
        for status in statusResponse.json():
            if status['desc_tipo_estatus'] == 'SUBSERVICIOS':
                statusSubservices.append(status)

        response    = requests.get(settings.URL_API + '/solicitudes/sol/proceso/')
        solicitudes = response.json()

        for solicitud in solicitudes:
            if solicitud['fecha_sol'] != None:
                date = datetime.strptime(solicitud['fecha_sol'], "%d/%m/%Y %H:%M")
                formatedDate = date.strftime("%d %h %Y")
                solicitud.update({'formated_date' : formatedDate})

            if int(solicitud['countsubservices']) != 0 and int(solicitud['count_concluido']) != 0:
                division =  (int(solicitud['count_concluido']) / int(solicitud['countsubservices'])) * 100
            else:
                division = 0

            solicitud.update({ 'porcentajeCompleted' : division })

            for key, subservices in solicitud['subservices'].items():
                for subservice in subservices:
                    date = datetime.strptime(subservice['fec_subservicio'], "%d/%m/%Y %H:%M")
                    formatedDate = date.strftime("%d %h %Y, %I:%M")
                    localDate = getLocaleDate(date);
                    subservice.update({'formated_date' : formatedDate+' '+localDate})

                    if subservice['estatus_update'] != None:
                        dateupdate = datetime.strptime(subservice['fec_subservicio'], "%d/%m/%Y %H:%M")
                        formatedDateupdate = dateupdate.strftime("%d %h %Y, %I:%M")
                        localDate = getLocaleDate(dateupdate);
                        subservice.update({'formated_date_update' : formatedDateupdate+' '+localDate})

                    for public in subservice['comentarios_publicos']:
                        date = datetime.strptime(public['fecha_comment'], "%d/%m/%Y %H:%M")
                        publicDate = date.strftime("%A %d %h %Y, %I:%M")
                        localDate = getLocaleDate(date);
                        public.update({'fecha_comment' : (publicDate+' '+localDate).capitalize()})

                    for private in subservice['comentarios_privados']:
                        date = datetime.strptime(private['fecha_comment'], "%d/%m/%Y %H:%M")
                        privateDate = date.strftime("%A %d %h %Y, %I:%M")
                        localDate = getLocaleDate(date);
                        private.update({'fecha_comment' : (privateDate+' '+localDate).capitalize()})

                    for bitacora in subservice['bitacora']:
                        date = datetime.strptime(bitacora['fecha_bitacora'], "%d/%m/%Y %H:%M")
                        bitacoraDate = date.strftime("%A %d %h %Y, %I:%M")
                        localDate = getLocaleDate(date);
                        bitacora.update( {'fecha_bitacora' : (bitacoraDate+' '+localDate).capitalize()})
                        bitacora.update({'comentario' : decapitalize(bitacora['comentario']) })

        return render(request, "solicitudes/process.html",
            {
                'solicitudes':  solicitudes,
                'statuses': statuses,
                'statustitle': statusSubservices,
                'team': team
            })

def decapitalize(s):
    if not s:  # check that s is not empty string
        return s
    return s[0].lower() + s[1:]

def getLocaleDate(date):
    if(date.strftime("%p") == 'PM'):
        return 'p.m.'
    else:
        return 'a.m.'

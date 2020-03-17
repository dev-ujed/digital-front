from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
import requests
from datetime import datetime
from django.utils.dateparse import parse_date
import locale, json
from django.urls import reverse_lazy


def solicitudesProceso(request):
    locale.setlocale(locale.LC_TIME, '')

    if request.session.is_empty():
        return redirect(reverse_lazy('public:ingresar'))
    else:
        statuses = requests.get('http://192.168.10.46:8000/solicitudes/sol/estatus_proceso/')
        statuses = statuses.json()

        statusSubservices = []
        statusResponse = requests.get('http://192.168.10.46:8000/solicitudes/sol/cat_estatus/')
        for status in statusResponse.json():
            if status['desc_tipo_estatus'] == 'SUBSERVICIOS':
                statusSubservices.append(status)

        response    = requests.get('http://192.168.10.46:8000/solicitudes/sol/proceso/')
        jsonData = json.loads(response.content.decode())
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
                    formatedDate = date.strftime("%d %h %Y, %I:%M %p")
                    subservice.update({'formated_date' : formatedDate})

                    if subservice['estatus_update'] != None:
                        dateupdate = datetime.strptime(subservice['fec_subservicio'], "%d/%m/%Y %H:%M")
                        formatedDateupdate = dateupdate.strftime("%d %h %Y, %I:%M %p")
                        subservice.update({'formated_date_update' : formatedDateupdate})

                    for public in subservice['comentarios_publicos']:
                        date = datetime.strptime(public['fecha_comment'], "%d/%m/%Y %H:%M")
                        publicDate = date.strftime("%A %d %h %Y, %I:%M %p")
                        public.update({'fecha_comment' : publicDate.capitalize()})

                    for private in subservice['comentarios_privados']:
                        date = datetime.strptime(private['fecha_comment'], "%d/%m/%Y %H:%M")
                        privateDate = date.strftime("%A %d %h %Y, %I:%M %p")
                        private.update({'fecha_comment' : privateDate.capitalize()})

                    for bitacora in subservice['bitacora']:
                        date = datetime.strptime(bitacora['fecha_bitacora'], "%d/%m/%Y %H:%M")
                        bitacoraDate = date.strftime("%A %d %h %Y, %I:%M %p")
                        bitacora.update({'fecha_bitacora' : bitacoraDate.capitalize()})
                        bitacora.update({'comentario' : decapitalize(bitacora['comentario']) })

        return render(request, "solicitudes/process.html",
            {
                'solicitudes': solicitudes,
                'statuses': statuses,
                'statustitle': statusSubservices
            })

def decapitalize(s):
    if not s:  # check that s is not empty string
        return s
    return s[0].lower() + s[1:]
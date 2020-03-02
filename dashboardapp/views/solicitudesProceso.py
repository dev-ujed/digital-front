from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
import requests
from datetime import datetime
from django.utils.dateparse import parse_date
import locale

def solicitudesProceso(request):
    locale.setlocale(locale.LC_TIME, '')
    if request.session.is_empty():
        domain = request.build_absolute_uri('/')[:-1]
        return redirect(domain+'/digitalapp/ingresar')
    else:

        response = requests.get('http://192.168.10.46:8000/solicitudes/sol/proceso/')

        solicitudes = response.json()

        for solicitud in solicitudes:
            date = datetime.strptime(solicitud['fecha_sol'], "%d/%m/%Y %H:%M")
            formatedDate = date.strftime("%d %h %Y")
            solicitud.update({'formated_date' : formatedDate})

            if int(solicitud['countsubservices']) != 0 and int(solicitud['count_concluido']) != 0:
                division = int(solicitud['countsubservices']) / int(solicitud['count_concluido'])
            else:
                division = 0
            solicitud.update({ 'porcentajeCompleted' : division })

            for key, subservices in solicitud['subservices'].items():
                for subservice in subservices:

                    date = datetime.strptime(subservice['fec_subservicio'], "%d/%m/%Y %H:%M")
                    formatedDate = date.strftime("%d %h %Y, %I:%M %p")
                    subservice.update({'formated_date' : formatedDate})

        return render(request, "solicitudes/process.html", { 'solicitudes': solicitudes})
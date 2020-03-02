from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
import requests
import locale
from datetime import datetime
import json
from django.utils.text import slugify

def solicitud(request, folio):

    if request.session.is_empty():
        domain = request.build_absolute_uri('/')[:-1]
        return redirect(domain+'/digitalapp/ingresar')
    else:

        responseServices = requests.get('http://192.168.10.46:8000/solicitudes/sol/servicios/')
        services  = responseServices.json()

        response = requests.get('http://192.168.10.46:8000/solicitudes/sol/detallesol/'+folio+'/yo@gmail.com/')
        solicitud  = response.json()

        locale.setlocale(locale.LC_TIME, '')
        date = datetime.strptime(solicitud[0]['fecha_sol'], "%d/%m/%Y %H:%M")
        solicitud[0]['fecha_sol'] = date.strftime("%d %B %Y, %I:%M %p")

        for file in solicitud[0]['archivos_solicitud']:

            date = datetime.strptime(file['subido'], "%d/%m/%Y %H:%M")
            file['subido'] = date.strftime("%d %h %Y, %I:%M %p")

        for service in solicitud[0]['subservices']:

            date = datetime.strptime(service['fec_subservicio'], "%d/%m/%Y %H:%M")
            service['fec_subservicio'] = date.strftime("%d %h %Y, %I:%M %p")
            service['slug'] = slugify(service['servicio'])

        return render(request, "solicitudes/show.html", {
            'request': solicitud[0],
            'subservices': json.dumps(solicitud[0]['subservices']),
            'services': services
        })

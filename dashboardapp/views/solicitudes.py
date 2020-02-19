from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
import requests
from datetime import datetime
from django.utils.dateparse import parse_date
import locale

def inbox(request):
    locale.setlocale(locale.LC_TIME, '')
    services= []
    if request.session.is_empty():
        domain = request.build_absolute_uri('/')[:-1]
        return redirect(domain+'/digitalapp/ingresar')
    else:
        status   = requests.get('http://192.168.10.46:8000/solicitudes/sol/cat_estatus/')
        statuses = {}

        requestByStatus = {}

        for state in status.json():
            statuses.update({ state['key_name']: state['Descripcion']})
            response = requests.get('http://192.168.10.46:8000/solicitudes/sol/estatus_sol/' + str(state['id']))
            requestByStatus.update({ state['key_name']: response.json() })


        for key, value in requestByStatus.items():
            for element in value:

                date = datetime.strptime(element['fecha_sol'], "%d/%m/%Y %H:%M")
                formatedDate = date.strftime("%d %h %Y, %I:%M %p")
                element.update({'formated_date' : formatedDate})

                archivos = eval(element['archivos'][0])
                element.update({'archivos': archivos['count']})

                if element['servicios'] != None:
                    for servicio in element['servicios']:
                        services.append(eval(servicio))

                    element.update({'servicios': services})

        return render(request, "solicitudes/index.html", {
            'statuses': statuses,
            'requestByStatus': requestByStatus
        })
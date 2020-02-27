from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
import requests
from datetime import datetime
from django.utils.dateparse import parse_date
import locale

def inbox(request):
    locale.setlocale(locale.LC_TIME, '')
    if request.session.is_empty():
        domain = request.build_absolute_uri('/')[:-1]
        return redirect(domain+'/digitalapp/ingresar')

    else:

        response = requests.get('http://192.168.10.46:8000/solicitudes/sol/cat_estatus/')
        statuses = {}
        requestByStatus = {}

        StatusArray = [
            'received',
            'concluided',
            'canceled'
        ]

        for state in response.json():

            if state['key_name'] in StatusArray:

                statuses.update({ state['key_name']: state['estatus_descrip']})
                responseSol = requests.get('http://192.168.10.46:8000/solicitudes/sol/estatus_sol/' + str(state['id']))
                requestByStatus.update({ state['key_name']: responseSol.json() })

        for key, value in requestByStatus.items():
            for element in value:
                date = datetime.strptime(element['fecha_sol'], "%d/%m/%Y %H:%M")
                formatedDate = date.strftime("%d %h %Y, %I:%M %p")
                element.update({'formated_date' : formatedDate})

        return render(request, "solicitudes/index.html", {
            'statuses': statuses,
            'requestByStatus': requestByStatus
        })

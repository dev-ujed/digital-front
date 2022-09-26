from django.conf import settings
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

from requests.auth import HTTPBasicAuth
from datetime import datetime
import requests, json


def comentario(request):
    data = {
        "user": request.session['user']['id'],
        "descripcion": request.POST['descripcion'],
        "tipo": request.POST['tipo'],
        "subservicio": request.POST['subservicio']
    }

    response = requests.post(settings.URL_API + '/solicitudes/sol/comment/', data=data)

    if response.status_code == 422:
        return JsonResponse({'errors':response.json()}, status = 422)
    else:

        comment = response.json()

        date = datetime.strptime(comment['fecha_comment'], "%d/%m/%Y %H:%M")
        dateFormat = date.strftime("%A %d %h %Y, %I:%M")
        localedate =  date.strftime("%p")

        if(localedate == 'PM'):
            localedate = 'p.m'
        else:
            localedate = 'a.m'

        comment.update({'fecha_comment' : (dateFormat+' '+localedate).capitalize()})

        return JsonResponse(comment)
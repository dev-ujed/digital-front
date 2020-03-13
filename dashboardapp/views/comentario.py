from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import requests, json
from datetime import datetime

from requests.auth import HTTPBasicAuth


def comentario(request):

    data = {
        "user": request.session['user']['id'],
        "descripcion": request.POST['descripcion'],
        "tipo": request.POST['tipo'],
        "subservicio": request.POST['subservicio']
    }

    response = requests.post('http://192.168.10.46:8000/solicitudes/sol/comment/', data=data)

    if response.status_code == 422:
        return JsonResponse({'errors':response.json()}, status = 422)
    else:

        comment = response.json()

        date = datetime.strptime(comment['fecha_comment'], "%d/%m/%Y %H:%M")
        dateFormat = date.strftime("%A %d %h %Y, %I:%M %p")
        comment.update({'fecha_comment' : dateFormat.capitalize()})

        return JsonResponse(comment)
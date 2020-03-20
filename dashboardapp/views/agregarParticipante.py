from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
import requests
import json

def agregarParticipante(request):
    data = {
        "user": request.session['user']['id'],
        "participante": request.POST['participante'],
        "subservicio": request.POST['subservicio'],
    }

    response = requests.post('http://192.168.10.46:8000/solicitudes/sol/participantes/', data=data)

    if response.status_code == 422:
        return JsonResponse({'errors':response.json()}, status = 422)
    else:

        comment = response.json()

        date = datetime.strptime(comment['fecha_comment'], "%d/%m/%Y %H:%M")
        dateFormat = date.strftime("%A %d %h %Y, %I:%M %p")
        comment.update({'fecha_comment' : dateFormat.capitalize()})

        return JsonResponse(comment)
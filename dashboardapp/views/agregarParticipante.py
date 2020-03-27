from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from datetime import datetime
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

        res = response.json()

        date = datetime.strptime(res['bitacora']['fecha_bitacora'], "%d/%m/%Y %H:%M")
        bitacoraDate = date.strftime("%A %d %h %Y, %I:%M")
        localedate =  date.strftime("%p")

        if(localedate == 'PM'):
            localedate = 'p.m'
        else:
            localedate = 'a.m'

        res['bitacora'].update({'fecha_bitacora' : (bitacoraDate+' '+localedate).capitalize()})

        return JsonResponse(res)
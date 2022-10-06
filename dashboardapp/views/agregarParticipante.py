from django.conf import settings
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect

from datetime import datetime 
import json, requests


def agregarParticipante(request):
    data = {
        "user": request.session['user']['id'],
        "participante": request.POST['participante'],
        "subservicio": request.POST['subservicio'],
    }

    response = requests.post(settings.URL_API + '/solicitudes/sol/participantes/', data=data)

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

def borrarSolicitud(request):
    data = {
        "user": request.session['user']['id'],
        "folio": request.POST['folio'],
    }

    response = requests.post(settings.URL_API + 'sol/solicitudes/delete/<slug:folio>', data=data) 
    return JsonResponse({'msg':response.json()}, status = 200)   

from django.conf import settings
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

from requests.auth import HTTPBasicAuth
import requests, json


def uploadfile(request):

    headers = {
        'Content-type': 'multipart/form-data'
    }

    files = {
        "file": request.FILES['file'],
    }

    data = {
        "solicitud": request.POST['request']
    }

    response = requests.post(settings.URL_API + '/solicitudes/sol/solicitudes/'+request.POST['request']+'/upload/', files=files, data=data)

    if response.status_code == 400:
        return JsonResponse({'errors':response.json()}, status = 422)
    else:
        return JsonResponse(response.json())


def deletefile(request):
    response = requests.delete(settings.URL_API + '/solicitudes/sol/solicitudes/'+request.POST['file']+'/delete/')

    return displayResponse(response)


def displayResponse(response):
    if response.status_code == 422:
        return JsonResponse({'errors':response.json()}, status = 422)
    else:
        return JsonResponse(response.json())
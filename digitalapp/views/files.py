from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import requests, json

from requests.auth import HTTPBasicAuth


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

    response = requests.post('http://192.168.10.46:8000/solicitudes/sol/solicitudes/'+request.POST['request']+'/upload/', files=files, data=data)

    if response.status_code == 400:
        return JsonResponse({'errors':response.json()}, status = 422)
    else:
        return JsonResponse(response.json())


def deletefile(request):

    response = requests.delete('http://192.168.10.46:8000/solicitudes/sol/solicitudes/'+request.POST['file']+'/delete/')

    return displayResponse(response)


def displayResponse(response):
    if response.status_code == 422:
        return JsonResponse({'errors':response.json()}, status = 422)
    else:
        return JsonResponse(response.json())
from django.conf import settings
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect

import json, requests


def actualizarTitulo(request, folio):
    errors = {}
    data  = {
        "titulo": request.POST['title']
    }

    response = requests.put(settings.URL_API + '/solicitudes/sol/actualizar-titulo/'+folio, data=data)

    return JsonResponse(response.json(), safe=False)
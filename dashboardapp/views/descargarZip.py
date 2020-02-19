from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
import requests
import zipfile

def descargarZip(request, folio):

    #responseFile = requests.get('http://192.168.10.46:8000/solicitudes/sol/solicitudes/7/detalle/')
    #files  = responseFile.json()

    files = {
        0 : "static/img/fondo-peticiones.jpg",
        1 : "static/img/fondo-peticiones-sm.jpg"
    }

    response = HttpResponse(content_type='application/zip')
    zip_file = zipfile.ZipFile(response, 'w')

    for attr, value in files.items():
        zip_file.write(value)
        response['Content-Disposition'] = 'attachment; filename={}'.format('Solicitud_'str(folio)+".zip")

    return response
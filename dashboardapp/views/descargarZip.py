from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
import os, io, zipfile, requests

def descargarZip(request, folio):
    responseSol  = requests.get('http://192.168.10.46:8000/solicitudes/sol/detallesol/'+folio)
    solicitud_id = responseSol.json()[0]['id']
    responseFile = requests.get('http://192.168.10.46:8000/solicitudes/sol/solicitudes/'+str(solicitud_id)+'/detalle/')
    Datafile     = responseFile.json()

    buffer   = io.BytesIO()
    zip_file = zipfile.ZipFile(buffer, 'w')

    for file in Datafile:

        url = file['urlfile']
        response = requests.get(url)
        filename = os.path.split(url)[1]
        zip_file.writestr(filename, response.content)
    zip_file.close()

    response = HttpResponse(buffer.getvalue())
    response['Content-Type'] = 'application/x-zip-compressed'
    response['Content-Disposition'] = 'attachment; filename='+folio+'.zip'

    return response
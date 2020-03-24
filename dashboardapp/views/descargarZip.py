from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse, FileResponse
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

def downloadfile(request, file):

    local_filename = file.split('/')[-1]
    # NOTE the stream=True parameter below
    with requests.get(file, stream=True) as r:
        r.raise_for_status()
        with open('temporal/'+local_filename, 'wb') as f:
            for chunk in r.iter_content(chunk_size=8192):
                if chunk: # filter out keep-alive new chunks
                    f.write(chunk)
                    # f.flush()

    files = requests.get(file, stream=True)
    with open('temporal/'+local_filename, 'rb') as fh:
        response = HttpResponse(fh.read(), content_type="application/force-download")
        response['Content-Disposition'] = 'inline; filename=' + local_filename
        return response
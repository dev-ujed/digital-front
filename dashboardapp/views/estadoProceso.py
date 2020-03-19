from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import requests, json
from datetime import datetime

from requests.auth import HTTPBasicAuth

from django.core.mail import EmailMessage
from django.template.loader import render_to_string

def estadoProceso(request, subservice):

    data_request = json.loads(request.body.decode('utf-8'))

    data = {
        "subservice_id": subservice,
        "status": data_request['status'],
        "comentario": data_request['comentario'],
        "user": request.session['user']['id']
    }

    response = requests.put('http://192.168.10.46:8000/solicitudes/sol/actualizar-subservicio/', data=data)

    if response.status_code == 422:
        return JsonResponse({'errors':response.json()}, status = 422)
    else:

        process = response.json()

        if process['estatus_update'] != None:
            dateupdate = datetime.strptime(process['fec_subservicio'], "%d/%m/%Y %H:%M")
            formatedDateupdate = dateupdate.strftime("%d %h %Y, %I:%M %p")
            process.update({'formated_date_update' : formatedDateupdate})

        for public in process['comentarios_publicos']:
            date = datetime.strptime(public['fecha_comment'], "%d/%m/%Y %H:%M")
            publicDate = date.strftime("%A %d %h %Y, %I:%M %p")
            public.update({'fecha_comment' : publicDate.capitalize()})

        for private in process['comentarios_privados']:
            date = datetime.strptime(private['fecha_comment'], "%d/%m/%Y %H:%M")
            privateDate = date.strftime("%A %d %h %Y, %I:%M %p")
            private.update({'fecha_comment' : privateDate.capitalize()})

        for bitacora in process['bitacora']:
            date = datetime.strptime(bitacora['fecha_bitacora'], "%d/%m/%Y %H:%M")
            bitacoraDate = date.strftime("%A %d %h %Y, %I:%M %p")
            bitacora.update({'fecha_bitacora' : bitacoraDate.capitalize()})
            bitacora.update({'comentario' : decapitalize(bitacora['comentario']) })


        if process['estatus_key_name'] == 'concluido':
            subservicio  = process['subservicio_name']
            servicio     = process['servicio']
            folio        = process['solicitud_folio']
            getrequest   = requests.get('http://192.168.10.46:8000/solicitudes/sol/detallecoreo/'+folio)
            request      = getrequest.json()[0]
            subservicios = request['subservices']
            correo       = request['correo']

            sendEmail(subservicio, servicio, folio, subservicios, correo)
        return JsonResponse(process)

def decapitalize(s):
    if not s:  # check that s is not empty string
        return s
    return s[0].lower() + s[1:]


def sendEmail(subservicio, servicio, folio, subservicios, correo):
    body = render_to_string('emails/concluded-subservice.html',
        {
        'subservicio': subservicio,
        'folio': folio,
        'servicio' : servicio,
        'subservicios' : subservicios,
        }
    )
    from_email = 'no-reply@ujed.mx'
    to = correo

    email = EmailMessage(
        subject    = 'Servicio concluido',
        body       = body,
        from_email = from_email,
        to         =[to]
        )
    email.content_subtype = 'html'
    email.send()
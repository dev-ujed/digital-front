from django.conf import settings
from django.core.mail import EmailMessage
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.template.loader import render_to_string

from requests.auth import HTTPBasicAuth
from datetime import datetime
import requests, json


def modificarEmail(request): 
    data = json.loads(request.body.decode('utf-8'))

    comentario   = data['comentario']
    subservicio  = data['subservicio']
    servicio     = data['servicio']
    folio        = data['folio']
    getrequest   = requests.get(settings.URL_API + '/solicitudes/sol/detallecoreo/'+folio)
    request      = getrequest.json()[0]
    subservicios = request['subservices']
    correo       = request['correo']

    sendEmail(subservicio, servicio, folio, subservicios, correo)

    return JsonResponse(True, safe=False)


def sendEmail(subservicio, servicio, folio, subservicios, correo, comentario):
    body = render_to_string('emails/concluded-subservice.html',
        {
        'subservicio': subservicio,
        'folio': folio,
        'servicio' : servicio,
        'subservicios' : subservicios,
        'comentario' : comentario,
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
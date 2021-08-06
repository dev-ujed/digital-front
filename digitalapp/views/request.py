from django.conf import settings
from django.core.mail import EmailMessage
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.template.loader import render_to_string

from requests.auth import HTTPBasicAuth
import requests, json


def save(request):
    data_request = json.loads(request.body.decode('utf-8'))
    errors = {}
    data = {
        'descripcion' : data_request['descripcion']
    }

    if data_request['descripcion'] == '':
        errors.update({'descripcion' : ['Este campo no puede estar en blanco.']})

    for i in data_request['files']:
        index = i.split("_")[1]
        dataFile = { "descripcion": data_request['files'][i] }

        responseFiles = requests.put(settings.URL_API + '/solicitudes/sol/solicitudes/'+index+'/update/',data = dataFile)

        if responseFiles.status_code == 422:
            errors.update({i: ['Asegúrese de que este campo no tenga más de 80 caracteres.'] })

    response = validateUpdateRequest(data_request, data)

    if response.status_code == 422:
        errors.update(response.json())

    if bool(errors):
        return JsonResponse({'errors':errors}, status = 422)

    sendEmail(response.json())

    return displayResponse(response)

def saveuser(request):
    response     = {}
    customMsn    = {}
    data_request = json.loads(request.body.decode('utf-8'))
    datanull     = ['id', 'apellido_materno', 'telefono', 'extension', 'telefono', 'pautoriza']
    datainitial  = {
        "matricula": data_request['matricula'],
        "ures": data_request['ures'],
        "nombre": data_request['nombre'],
        "apellido_paterno": data_request['apellido_paterno'],
        "correo": data_request['correo'],
    }

    data          = validatenulls(data_request, datainitial, datanull)
    customMessage = validateRequired(data_request, customMsn, datanull)


    if data_request['id'] == '':
        response = requests.post(settings.URL_API + '/solicitudes/sol/solicitudes/', data=data)
    else:
        if not bool(customMessage):
           response = requests.put(settings.URL_API + '/solicitudes/sol/update-sol/'+data_request['id'], data=data)
           return HttpResponse(response)

    return displayResponse(response, customMessage)


def deleteRequest(request):
    data_request = json.loads(request.body.decode('utf-8'))
    response = requests.delete(settings.URL_API + '/solicitudes/sol/solicitudes/'+data_request['id'])
    return HttpResponse(response)


def validateUpdateRequest(data_request, data):
    getdata = requests.get(settings.URL_API + '/solicitudes/sol/solicitudes/'+data_request['id'])

    if 'descripcion' in getdata.json():
        if getdata.json().get('descripcion') == None:
            responseUpdate = requests.put(
                settings.URL_API + '/solicitudes/sol/descripcion/'+data_request['id'],
                data = data
            )
        else:
            return {'solicitud': 'No se puede modificar una solicitud ya enviada.'},
    else:
        return {'solicitud': 'No se encontró el registro.'}

    return responseUpdate


def validatenulls(data_request, datainitial, datanull):
    for i in datanull:
        if data_request[i] != '':
            datainitial.update({i: data_request[i]})
    return datainitial

def validateRequired(data_request, customMessage, datanull):
    customMessage = {}
    for i in data_request:
        if data_request[i] == '' and  i not in datanull:
            customMessage.update({i: 'Este campo no puede estar en blanco.'})

    if data_request['ures'] == '':
        customMessage.update({'ures': 'Selecciona una opción.'})

    if data_request['telefono'] == '' and data_request['extension'] == '':
        customMessage.update({
            'telefono': 'Ingresa un teléfono o una extension valida',
            'extension': '',
        })

    return customMessage

def ChangeMessage(customMessage, errors):
    for key, value in customMessage.items():
        errors.update({key: [value]})
    return errors


def displayResponse(response, customMessage={}):
    errors = {}
    if bool(response):
        if response.status_code == 422:
            errors.update(response.json())

    if bool(customMessage):
        errors.update(ChangeMessage(customMessage, errors))

    if response.status_code == 422:
        errors.update(response.json())

    if bool(errors):
        return JsonResponse({'errors':errors}, status = 422)
    else:
        return JsonResponse(response.json())


def sendEmail(response):
    body = render_to_string('emails/request.html',
        {
        'name': response['nombre'],
        'folio': response['folio'],
        'token': 'qwnqe213jsadej213213SAdasdada12ada12354ddsaZ'
        }
    )
    from_email = 'no-reply@ujed.mx'
    to = response['correo']

    email = EmailMessage(
        subject    = 'Solicitud registrada',
        body       = body,
        from_email = from_email,
        to         =[to]
        )
    email.content_subtype = 'html'
    email.send()
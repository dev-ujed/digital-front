from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import requests, json

from requests.auth import HTTPBasicAuth

from django.core.mail import EmailMessage
from django.template.loader import render_to_string


def save(request):
    data_request = json.loads(request.body.decode('utf-8'))

    if data_request['descripcion'] == '':
        return JsonResponse({'errors': {'descripcion': ['Este campo no puede estar en blanco.']}}, status=422)
    else:
        data = {
            "descripcion": data_request['descripcion'],
        }

        response = validateUpdateRequest(data_request, data)
        sendEmail(response.json())

    return displayResponse(response)


def saveuser(request):
    data_request = json.loads(request.body.decode('utf-8'))
    datanull     = ['apellido_materno', 'telefono', 'extension', 'telefono', 'pautoriza']
    datainitial  = {
        "matricula": data_request['matricula'],
        "ures": data_request['ures'],
        "nombre": data_request['nombre'],
        "apellido_paterno": data_request['apellido_paterno'],
        "correo": data_request['correo'],
    }

    data = validatenulls(data_request, datainitial, datanull)

    if data_request['id'] == '':
        response = requests.post('http://192.168.10.46:8000/solicitudes/sol/solicitudes/', data=data)
    else:
        response = validateUpdateRequest(data_request, data)

    if data_request['telefono'] == '' and data_request['extension'] == '':
        errors = {}
        errors.update({'telefono': ['El Telefono o la Extensión no pueden ir vacios'],'extension': ['']})
        return displayResponse(response, errors)

    return displayResponse(response)

def deleteRequest(request):
    data_request = json.loads(request.body.decode('utf-8'))
    response = requests.delete('http://192.168.10.46:8000/solicitudes/sol/solicitudes/'+data_request['id'])
    return HttpResponse(response)

def validateUpdateRequest(data_request, data):
    getdata = requests.get('http://192.168.10.46:8000/solicitudes/sol/solicitudes/'+data_request['id'])


    if 'descripcion' in getdata.json():
        if getdata.json().get('descripcion') == None:
            responseUpdate = requests.put(
                'http://192.168.10.46:8000/solicitudes/sol/solicitudes/'+data_request['id'],
                data = data
            )
        else:
            return {'solicitud': 'No se puede modificar una solicitud ya enviada.'},
    else:
        return {'solicitud': 'no se encontró registro.'}

    return responseUpdate

def validatenulls(data_request, datainitial, datanull):
    for i in datanull:
        if data_request[i] != '':
            datainitial.update({i: data_request[i]})
    return datainitial

def displayResponse(response, errors={}):
    if response.status_code == 422:
        errors.update(response.json())

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
    from_email = 'from@yourdjangoapp.com'
    to = response['correo']

    email = EmailMessage(
        subject    = 'Solicitud registrada',
        body       = body,
        from_email = from_email,
        to         =[to]
        )
    email.content_subtype = 'html'
    email.send()
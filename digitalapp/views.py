from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import requests, json

from requests.auth import HTTPBasicAuth

from django.core.mail import EmailMessage
from django.template.loader import render_to_string


def index(request):
    ureslist = requests.get('http://192.168.10.46:8000/solicitudes/sol/ures/')
    return render(request, "principal/index.html" , { 'ureslist': ureslist.json() })


def save(request):
    data_request = json.loads(request.body.decode('utf-8'))

    data = {
        "descripcion": data_request['descripcion'],
    }

    response = validateUpdateRequest(data_request, data)

    sendEmail(response.json())

    return response


def saveuser(request):
    data_request = json.loads(request.body.decode('utf-8'))
    getdata = requests.get('http://192.168.10.46:8000/solicitudes/sol/solicitudes/'+data_request['id'])

    data = {
        "matricula": data_request['matricula'],
        "ures": data_request['ures'],
        "nombre": data_request['nombre'],
        "apellido_paterno": data_request['apellido_paterno'],
        "apellido_materno": data_request['apellido_materno'],
        "correo": data_request['correo'],
        "extension": data_request['extension'],
        "telefono": data_request['telefono'],
        "pautoriza": data_request['pautoriza'],
    }

    if data_request['id'] == '':
        response = requests.post('http://192.168.10.46:8000/solicitudes/sol/solicitudes/', data=data)
    else:
        return validateUpdateRequest(data_request, data)

    return displayResponse(response)



def validateUpdateRequest(data_request, data):
    getdata = requests.get('http://192.168.10.46:8000/solicitudes/sol/solicitudes/'+data_request['id'])

    if 'descripcion' in getdata.json():
        if getdata.json().get('descripcion') == None:
            responseUpdate = requests.put(
                'http://192.168.10.46:8000/solicitudes/sol/solicitudes/'+data_request['id'],
                data = data
            )
        else:
            return HttpResponse({'errors': 'No se puede modificar una solicitud ya enviada.'}, status=422)
    else:
        return HttpResponse({'errors': 'no se encontró registro.'}, status=422)

    return displayResponse(responseUpdate)


def displayResponse(response):
    if response.status_code == 422:
        return JsonResponse({'errors':response.json()}, status=422)
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

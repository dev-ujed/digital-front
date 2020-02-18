from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
import requests, json
from django.contrib.auth.hashers import make_password, check_password
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import logout


def index_login(request):
    if request.session.is_empty():
        return render(request, "principal/login.html")
    else:
        domain = request.build_absolute_uri('/')[:-1]
        return redirect(domain+'/administracion')


def user_login(request):
    if request.method == 'POST':
        data_request = json.loads(request.body.decode('utf-8'))
        errors       = formRequestLogin(data_request)

        if errors != {}:
            return JsonResponse({'errors':errors}, status = 422)

        domain = request.build_absolute_uri('/')[:-1]
        data   = {
            'email' : data_request['email'],
        }

        response = requests.post('http://192.168.10.46:8000/solicitudes/sol/login/', data=data)
        data     = response.json()

        if 'data' in data:
            user    = data['data']
            user_id = user['id']
            active  =  user['active']

            if check_password(data_request['password'], user['password']):
                pass
            else:
                return JsonResponse({'errors':{'password': ['La contraseña es incorrecta']}}, status = 422)

            if active:
                pass
            else:
                return JsonResponse({'errors':{'email': ['El usuario no está activo']}}, status = 422)

            request.session[user_id] = user
            response = HttpResponse('')
            response["Redirect-To"] = domain+'/administracion'
            return response
        else:
            return JsonResponse({'errors':{'email': ['El usuario no está registrado']}}, status = 422)
    else:
        return redirect(index_login)


def user_logout(request):
    logout(request)
    return redirect(index_login)


def formRequestLogin(data_request):
    errors = {}
    customMessage = {
        'email': 'Este campo no puede estar en blanco.',
        'password': 'Este campo no puede estar en blanco.'
    }

    for key, value in customMessage.items():
        if data_request[key] == '':
            errors.update({key: [value]})
    return errors

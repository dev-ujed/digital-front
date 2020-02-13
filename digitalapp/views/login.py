from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
import requests, json
from django.contrib.auth.hashers import make_password
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
        user   = {
            'email' : data_request['email'],
            'password': make_password(data_request['password'])
        }

        if user != {}:
            request.session['user1'] = user
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

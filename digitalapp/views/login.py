from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
import requests, json
from django.contrib.auth.hashers import make_password
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import logout


def index_login(request):
    return render(request, "principal/login.html")

def user_login(request):
    data_request = json.loads(request.body.decode('utf-8'))
    if request.method == 'POST':
        domain = request.build_absolute_uri('/')[:-1]
        user = {
            'email' : 'arturo.morales@ujed.mx',
            'password': make_password('1234567')
        }
        if user is not None:
            request.session['user1'] = user
            response = HttpResponse("")
            response["Redirect-To"] = domain+'/admin'
            return response
    else:
        return redirect(index_login)

def user_logout(request):
    logout(request)
    return redirect(index_login)



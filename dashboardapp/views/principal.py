from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
import requests

def index(request):
    if request.session.is_empty():
        domain = request.build_absolute_uri('/')[:-1]
        return redirect(domain+'/digitalapp/ingresar')
    else:
        return render(request, "index.html")

from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from django.urls import reverse_lazy
import requests

def index(request):
    if request.session.is_empty():
        return redirect(reverse_lazy('public:ingresar'))
    else:
        return render(request, "index.html")


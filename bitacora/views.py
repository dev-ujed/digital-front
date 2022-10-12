import json
from django.shortcuts import render

# Create your views here.

def index(request):
    if request.method=='POST':
        print('si')
    else:
        print('no')
    return render(request, 'bitacora/index.html')

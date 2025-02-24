from django.conf import settings
# from django.contrib.auth.hashers import make_password
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from django.urls import reverse_lazy

from dashboardapp.models import Catalogo_Estatus, Solicitud
from django.core.paginator import Paginator
from dashboardapp.serializers import CatalogoEstatusSerializer, SolicitudesSerializer

from datetime import datetime
import json


def inbox(request):
    if request.session.is_empty():
        return redirect(reverse_lazy('public:ingresar'))
    else:
        statuses = {}
        requestByStatus = {}

        StatusArray = [
            'received',
            'concluided',
            'canceled'
        ]

        cat_status = Catalogo_Estatus.objects.all().order_by('id')
        cat_status_serializer = CatalogoEstatusSerializer(cat_status, many=True).data

        for state in cat_status_serializer:
            if state['key_name'] in StatusArray:
                statuses[state['key_name']] = state['estatus_descrip']

                solicitudes = Solicitud.objects.filter(estatus__key_name=state['key_name']).order_by('-fecha_sol')
                
                
                paginator = Paginator(solicitudes, 10) 
                page_number = request.GET.get(f'page_{state["key_name"]}', 1)
                solicitudes_paginadas = paginator.get_page(page_number)

                solicitudes_serializer = SolicitudesSerializer(solicitudes_paginadas, many=True).data
                requestByStatus[state['key_name']] = {
                    'solicitudes': solicitudes_serializer,
                    'paginator': solicitudes_paginadas
                }

        return render(request, "solicitudes/index.html", {
            'statuses': statuses,
            'requestByStatus': requestByStatus
        })



# def createUsers(request):
#     Users = [
#         {
#             'name' : 'Jaime Uriel',
#             'last_name' : 'García Navarro',
#             'email': 'jaime.garcia@ujed.mx',
#         },
#         {
#             'name' : 'José Luis',
#             'last_name' : 'Bautista Cabrera',
#             'email': 'joseluis.bautista@ujed.mx',
#         },
#         {
#             'name' : 'Jesús Álvaro',
#             'last_name' : 'Martínez Hinojosa',
#             'email': 'alvaro.martinez@ujed.mx',
#         },
#         {
#             'name' : 'Ernesto',
#             'last_name' : 'Cisneros Almeida',
#             'email': 'ernesto.cisneros@ujed.mx',
#         },
#         {
#             'name' : 'Adalberto Rafael',
#             'last_name' : 'Sánchez Salazar',
#             'email': 'rafael.sanchez@ujed.mx',
#         },
#         {
#             'name' : 'Sergio',
#             'last_name' : 'Noris Peinado',
#             'email': 'sergio.noris@ujed.mx',
#         },
#         {
#             'name' : 'Felipe de Jesús',
#             'last_name' : 'Fernández Aguirre',
#             'email': 'felipe.fernandez@ujed.mx',
#         },
#         {
#             'name' : 'Gerardo Alberto',
#             'last_name' : 'Rodríguez Figueroa',
#             'email': 'gerardo.rodriguez@ujed.mx',
#         },
#         {
#             'name' : 'Manuel Rodrigo',
#             'last_name' : 'Calderón Pérez',
#             'email': 'manuel.calderon@ujed.mx',
#         },
#         {
#             'name' : 'Adrián',
#             'last_name' : 'Pérez Mascorro',
#             'email': 'adrian.perez@ujed.mx',
#         },
#         {
#             'name' : 'Gloria Adriana',
#             'last_name' : 'García Aquino',
#             'email': 'gloria.garcia@ujed.mx',
#         },
#         {
#             'name' : 'Oscar Hiram',
#             'last_name' : 'Gutiérrez Gómez',
#             'email': 'oscar.gutierrez@ujed.mx',
#         },
#         {
#             'name' : 'Ariana',
#             'last_name' : 'Fernández Aguirre',
#             'email': 'ariana.fernandez@ujed.mx',
#         },
#         {
#             'name' : 'Edith Natalia',
#             'last_name' : 'Cisneros Mireles',
#             'email': 'natalia.cisneros@ujed.mx',
#         },
#         {
#             'name' : 'Ramón Arturo',
#             'last_name' : 'Morales Sánchez',
#             'email': 'arturo.morales@ujed.mx',
#         },
#         {
#             'name' : 'Juan Carlos',
#             'last_name' : 'Melero Hernández',
#             'email': 'juancarlos.melero@ujed.mx',
#         },
#         {
#             'name' : 'Jesús',
#             'last_name' : 'Heredia Castañeda',
#             'email': 'jesus.heredia@ujed.mx',
#         },
#         {
#             'name' : 'Maria del Carmen',
#             'last_name' : 'Romero Villaseñor',
#             'email': 'carmen.romero@ujed.mx',
#         },
#         {
#             'name' : 'Xochitl',
#             'last_name' : 'Escamilla Arango',
#             'email': 'xochitl.escamilla@ujed.mx',
#         },
#         {
#             'name' : 'Hiram',
#             'last_name' : 'Weyman Vela',
#             'email': 'hiram.weyman@ujed.mx',
#         },
#         {
#             'name' : 'Alejandro',
#             'last_name' : 'Candelas Tirado',
#             'email': 'alex.candelas@ujed.mx',
#         },
#         {
#             'name' : 'Antonio Alberto',
#             'last_name' : 'Lardizabal Silvaín',
#             'email': 'antonio.lardizaval@ujed.mx',
#         },
#     ]
#     for user in Users:
#         data = {
#             'name' : user['name'],
#             'last_name': user['last_name'],
#             'email' : user['email'],
#             'active': 1,
#             'password': make_password('testing1234'),
#             'avatar' : 'foto.png',
#             'token' : 1,
#             'role': 1
#         }
#         response = requests.post(settings.URL_API + '/solicitudes/sol/usuarios/', data=data)
#     return HttpResponse('success')
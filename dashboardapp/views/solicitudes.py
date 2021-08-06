from django.conf import settings
from django.contrib.auth.hashers import make_password
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.utils.dateparse import parse_date

from datetime import datetime
import locale, requests


def inbox(request):
    #locale.setlocale(locale.LC_TIME, '')

    if request.session.is_empty():
        return redirect(reverse_lazy('public:ingresar'))

    else:
        response = requests.get(settings.URL_API + '/solicitudes/sol/cat_estatus/')
        print(response)
        statuses = {}
        requestByStatus = {}

        StatusArray = [
            'received',
            'concluided',
            'canceled'
        ]

        for state in response.json():

            if state['key_name'] in StatusArray:

                statuses.update({ state['key_name']: state['estatus_descrip']})
                responseSol = requests.get(settings.URL_API + '/solicitudes/sol/estatus_sol/' + str(state['id']))
                requestByStatus.update({ state['key_name']: responseSol.json() })

        for key, value in requestByStatus.items():
            for element in value:
                date = datetime.strptime(element['fecha_sol'], "%d/%m/%Y %H:%M")
                formatedDate = date.strftime("%d %h %Y, %I:%M")
                localedate =  date.strftime("%p")
                
                if(localedate == 'PM'):
                    localedate = 'p.m'
                else:
                    localedate = 'a.m'

                element.update({'formated_date' : formatedDate + ' ' + localedate})

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
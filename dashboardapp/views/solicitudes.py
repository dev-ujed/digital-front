from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
import requests
from datetime import datetime
from django.utils.dateparse import parse_date
import locale

def inbox(request):
    locale.setlocale(locale.LC_TIME, '')
    services= []
    if request.session.is_empty():
        domain = request.build_absolute_uri('/')[:-1]
        return redirect(domain+'/digitalapp/ingresar')
    else:
        dataUrl = {
            0 : {
                "id" : 1,
                "name" : "Solicitudes",
                "tile" : "request.png",
                "order" : 1,
                "created_at" : "2019-05-06 11:52:57",
                "updated_at" : "2019-05-06 11:52:57",
                "active" : 1,
                "slug" : "acl",
                "submenus" : {
                    0 : {
                        "id" : 1,
                        "name" : "Solicitudes",
                        "icon" : "users.png",
                        "order" : 1,
                        "section_id" : 1,
                        "created_at" : "2019-05-06 11:52:57",
                        "updated_at" : "2019-05-06 11:52:57",
                        "active" : 1,
                        "searchable_name" : "solicitudes",
                        "links": {
                            0 : {
                                "id" : 1,
                                "name" : "Bandeja",
                                "route" : "bandeja",
                                "permission" : "create.users",
                                "order" : 1,
                                "submenu_id" : 1,
                                "created_at" : "2019-05-06 11:52:57",
                                "updated_at" : "2019-05-06 11:52:57",
                                "active" : 1
                            },
                            1 : {
                                "id" : 2,
                                "name" : "En proceso",
                                "route" : "",
                                "permission" : "update.users",
                                "order" : 2,
                                "submenu_id" : 1,
                                "created_at" : "2019-05-06 11:52:57",
                                "updated_at" : "2019-05-06 11:52:57",
                                "active" : 0
                            }
                        }
                    },
                    1 : {
                        "id" : 2,
                        "name" : "Roles",
                        "icon" : "roles.png",
                        "order" : 2,
                        "section_id" : 1,
                        "created_at" : "2019-05-06 11:52:57",
                        "updated_at" : "2019-05-06 11:52:57",
                        "active" : 0,
                        "searchable_name" : "roles",
                        "links" : {
                            0 : {
                                "id" : 3,
                                "name" : "Agregar",
                                "route" : "",
                                "permission" : "create.roles",
                                "order" : 1,
                                "submenu_id" : 2,
                                "created_at" : "2019-05-06 11:52:57",
                                "updated_at" : "2019-05-06 11:52:57",
                                "active" : 0
                            },
                            1 : {
                                "id" : 4,
                                "name" : "Ver lista",
                                "route" : "",
                                "permission" : "update.roles",
                                "order" : 2,
                                "submenu_id" : 2,
                                "created_at" : "2019-05-06 11:52:57",
                                "updated_at" : "2019-05-06 11:52:57",
                                "active" : 0
                            }
                        }
                    },
                    2  : {
                        "id" : 3,
                        "name" : "Permisos",
                        "icon" : "permissions.png",
                        "order" : 3,
                        "section_id" : 1,
                        "created_at" : "2019-05-06 11:52:57",
                        "updated_at" : "2019-05-06 11:52:57",
                        "active" : 0,
                        "searchable_name" : "permisos",
                        "links" : {
                            0 : {
                                "id" : 5,
                                "name" : "Agregar",
                                "route" : "",
                                "permission" : "create.permissions",
                                "order" : 1,
                                "submenu_id" : 3,
                                "created_at" : "2019-05-06 11:52:57",
                                "updated_at" : "2019-05-06 11:52:57",
                                "active" : 0
                            },
                            1 : {
                                "id" : 6,
                                "name" : "Ver lista",
                                "route" : "",
                                "permission" : "update.permissions",
                                "order" : 2,
                                "submenu_id" : 3,
                                "created_at" : "2019-05-06 11:52:57",
                                "updated_at" : "2019-05-06 11:52:57",
                                "active" : 0
                            }
                        }
                    }
                }
            },
            1 : {
                "id" : 2,
                "name" : "Capacitadores",
                "tile" : "trainers.png",
                "order" : 2,
                "created_at" : "2019-05-06 11:52:57",
                "updated_at" : "2019-05-06 11:52:57",
                "active" : 0,
                "slug" : "capacitadores",
                "submenus" : {
                    0 : {
                        "id" : 4,
                        "name" : "Registros",
                        "icon" : "registrations.png",
                        "order" : 1,
                        "section_id" : 2,
                        "created_at" : "2019-05-06 11:52:57",
                        "updated_at" : "2019-05-06 11:52:57",
                        "active" : 0,
                        "searchable_name" : "registros",
                        "links" : {
                            "id" : 7,
                            "name" : "Ver lista",
                            "route" : "",
                            "permission" : "view.trainers",
                            "order" : 1,
                            "submenu_id" : 4,
                            "created_at" : "2019-05-06 11:52:57",
                            "updated_at" : "2019-05-06 11:52:57",
                            "active" : 0
                        }
                    }
                }
            }
        }
        status   = requests.get('http://192.168.10.46:8000/solicitudes/sol/cat_estatus/')
        statuses = {}

        requestByStatus = {}

        for state in status.json():
            statuses.update({ state['key_name']: state['Descripcion']})
            response = requests.get('http://192.168.10.46:8000/solicitudes/sol/estatus_sol/' + str(state['id']))
            requestByStatus.update({ state['key_name']: response.json() })


        for key, value in requestByStatus.items():
            for element in value:

                date = datetime.strptime(element['fecha_sol'], "%d/%m/%Y %H:%M")
                formatedDate = date.strftime("%d %h %Y, %I:%M %p")
                element.update({'formated_date' : formatedDate})

                archivos = eval(element['archivos'][0])
                element.update({'archivos': archivos['count']})

                if element['servicios'] != None:
                    for servicio in element['servicios']:
                        services.append(eval(servicio))

                    element.update({'servicios': services})

        return render(request, "solicitudes/index.html", {
            'statuses': statuses,
            'dataUrl': dataUrl,
            'requestByStatus': requestByStatus
        })
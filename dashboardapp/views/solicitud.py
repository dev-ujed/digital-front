from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
import requests
import locale
from datetime import datetime
import json

def solicitud(request, folio):

    if request.session.is_empty():
        domain = request.build_absolute_uri('/')[:-1]
        return redirect(domain+'/digitalapp/ingresar')
    else:

        dataUrl = {
            0 : {
                "id" : 1,
                "name" : "Solicitudes",
                "tile" : "acl.png",
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
                        "searchable_name" : "usuarios",
                        "links": {
                            0 : {
                                "id" : 1,
                                "name" : "Bandeja",
                                "route" : "solicitudes/bandeja",
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
                                "route" : "roles/crear",
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

        responseServices = requests.get('http://192.168.10.46:8000/solicitudes/sol/servicios/')
        services  = responseServices.json()

        response = requests.get('http://192.168.10.46:8000/solicitudes/sol/detallesol/'+folio+'/yo@gmail.com/')
        solicitud  = response.json()

        locale.setlocale(locale.LC_TIME, '')
        date = datetime.strptime(solicitud[0]['fecha_sol'], "%d/%m/%Y %H:%M")
        solicitud[0]['fecha_sol'] = date.strftime("%d %B %Y, %I:%M %p")

        for file in solicitud[0]['archivos_solicitud']:

            date = datetime.strptime(file['subido'], "%d/%m/%Y %H:%M")
            file['subido'] = date.strftime("%d %h %Y, %I:%M %p")

        for service in solicitud[0]['subservices']:

            date = datetime.strptime(service['fec_subservicio'], "%d/%m/%Y %H:%M")
            service['fec_subservicio'] = date.strftime("%d %h %Y, %I:%M %p")

        return render(request, "solicitudes/show.html", {
            'dataUrl': dataUrl,
            'request': solicitud[0],
            'subservices': json.dumps(solicitud[0]['subservices']),
            'services': services
        })

def menu_processor(request):
    dataUrl = {}
    if request.session.is_empty():
        return {'menu': dataUrl}
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
                    "submenus" : [
                        {
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
                        {
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
                        {
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
                    ]
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
                    "submenus" : [
                        {
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
                    ]
                }
            }
        return {'menu' : dataUrl }

def user_processor(request):
    userAuth = {}
    if request.session.is_empty():
        return {'userAuth': userAuth}
    else:
        userAuth = request.session['user']
        return {'userAuth' : userAuth }

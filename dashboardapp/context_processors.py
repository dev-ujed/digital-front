from django.conf import settings

import requests


def menu_processor(request):
    dataUrl = {}
    if request.session.is_empty():
        return {'menu': dataUrl}
    else:
        response = requests.post(settings.URL_API + '/solicitudes/sol/usuario-rol/', data={ 'user_id': request.session['user']['id'] })
        dbmenu   = response.json()

        for key, section in dbmenu.items():
            section.update({ 'active' : 0 })
            for submenu in section['submenus']:
                submenu.update({ 'active': 0 })

                for link in submenu['links']:
                    link.update({ 'active': 0 })

                    if '/administracion/'+link['route'] == str(request.get_full_path()):
                        link.update({ 'active': 1 })
                        submenu.update({ 'active': 1 })
                        section.update({ 'active': 1 })

                    if str(request.get_full_path()) != '/administracion/'+link['route']:
                        dbmenu['0'].update({ 'active' : 1 })

        return {'menu' : dbmenu }

def user_processor(request):
    userAuth = {}
    if request.session.is_empty():
        return {'userAuth': userAuth}
    else:
        userAuth = request.session['user']
        return {'userAuth' : userAuth }


def root_url(request):
    """
    Pass your root_url from the settings.py
    """
    return { 'SITE_URL': request.scheme+'://'+request.get_host() }
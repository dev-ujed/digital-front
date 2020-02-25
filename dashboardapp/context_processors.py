import requests
def menu_processor(request):
    dataUrl = {}
    if request.session.is_empty():
        return {'menu': dataUrl}
    else:
        response = requests.post('http://192.168.10.46:8000/solicitudes/sol/usuario-rol/', data={ 'user_id': request.session['user'].id })
        return {'menu' : response.json()}

def user_processor(request):
    userAuth = {}
    if request.session.is_empty():
        return {'userAuth': userAuth}
    else:
        userAuth = request.session['user']
        return {'userAuth' : userAuth }

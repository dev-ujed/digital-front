from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('crear-solicitud', views.save, name='save'),
    path('cancelar-solicitud', views.deleteRequest, name='deleteRequest'),
    path('crear-usuario', views.saveuser, name='saveuser'),
    path('subir-archivo', views.uploadfile, name='uploadfile'),
    path('eliminar-archivo', views.deletefile, name='deletefile'),
]


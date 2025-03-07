from django.urls import path
from django.shortcuts import render

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('crear-solicitud', views.save, name='save'),
    path('cancelar-solicitud', views.deleteRequest, name='deleteRequest'),
    path('crear-usuario', views.saveuser, name='saveuser'),
    path('subir-archivo', views.uploadfile, name='uploadfile'),
    path('eliminar-archivo', views.deletefile, name='deletefile'),

    path('ingresar', views.index_login, name="index_login"),
    path('iniciar-sesion', views.user_login, name="user_login"),
    path('salir', views.user_logout, name="logout"),
]


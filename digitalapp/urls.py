from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('crear-solicitud', views.save, name='save'),
]

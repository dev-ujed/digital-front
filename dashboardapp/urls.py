from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('solicitudes/bandeja', views.inbox, name='inbox'),
]


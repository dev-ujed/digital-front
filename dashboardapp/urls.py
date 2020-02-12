from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('solicitudes/bandeja', views.inbox, name='inbox'),
    path('solicitudes', views.solicitudes, name='solicitudes'),
    path('solicitud', views.solicitud, name='solicitud'),
]


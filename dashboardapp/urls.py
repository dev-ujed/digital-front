from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('solicitudes/bandeja', views.inbox, name='inbox'),
    path('solicitud/<slug:folio>/', views.solicitud, name='solicitud'),
    path('descargar-zip/<slug:folio>/', views.descargarZip, name='download-zip'),
    path('solicitudes/proceso', views.solicitudesProceso, name='request-in-process'),
]


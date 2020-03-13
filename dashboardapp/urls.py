from django.urls import path

from . import views

app_name = 'dashboard'
urlpatterns = [
    path('', views.index, name='index'),
    path('solicitudes/bandeja', views.inbox, name='inbox'),
    path('solicitud/<slug:folio>/', views.solicitud, name='solicitud'),
    path('descargar-zip/<slug:folio>/', views.descargarZip, name='download-zip'),
    path('proceso-servicio/<slug:folio>/', views.guardarServicio, name='proceso-servicio'),
    path('solicitudes/proceso', views.solicitudesProceso, name='request-in-process'),
    path('actualizar-titulo/<slug:folio>/', views.actualizarTitulo, name='actualizar-titulo'),
    path('solicitudes/comentar-proceso', views.comentario, name='comentario'),
]


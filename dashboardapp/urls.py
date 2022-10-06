from django.urls import path

from . import views

app_name = 'dashboard'
urlpatterns = [
    path('',                                    views.index,            name='index'),
    path('solicitudes/bandeja',                 views.inbox,            name='inbox'),
    path('solicitud/<slug:folio>/',             views.solicitud,        name='solicitud'),
    path('descargar-zip/<slug:folio>/',         views.descargarZip,     name='download-zip'),
    path('descargararchivo/<path:file>/',       views.downloadfile,     name='descargararchivo'),
    path('proceso-servicio/<slug:folio>/',      views.guardarServicio,  name='proceso-servicio'),
    path('solicitudes/proceso',                 views.solicitudesProceso, name='request-in-process'),
    path('actualizar-titulo/<slug:folio>/',     views.actualizarTitulo, name='actualizar-titulo'),
    path('solicitudes/comentar-proceso',        views.comentario,       name='comentario'),
    path('solicitudes/estado-proceso/<slug:subservice>/', views.estadoProceso, name='estadoProceso'),
    path('solicitudes/agregar-participante/',   views.agregarParticipante, name='agregarParticipante'),
    path('solicitudes/modificar-email/',        views.modificarEmail,   name='modificarEmail'),
    path('solicitudes/delete/<slug:folio>/',    views.borrarSolicitud,  name='borrarSolicitud'),
]


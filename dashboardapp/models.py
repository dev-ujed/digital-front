from django.db import models

from .validators import *


# Create your models here.
class Tipo_Estatus(models.Model):
    tipo_estatus        = models.CharField(max_length=50, null=True)

    def __str__(self):
        return '{}'.format(self.tipo_estatus)

    class Meta:
        verbose_name_plural = 'Tipo_Estatus'
        app_label           = 'solicitudes'
        managed             = False


class Catalogo_Estatus(models.Model):
    estatus_descrip     = models.CharField(max_length=20, null=True)
    key_name            = models.CharField(max_length=200, null=True, unique=True)
    desc_tipo_estatus   = models.CharField(max_length=200, null=True)
    tipo_estatus        = models.ForeignKey(Tipo_Estatus, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return '{}'.format(self.desc_tipo_estatus,self.key_name,self.tipo_estatus)

    class Meta:
        verbose_name_plural = 'Catalogo_Estatus'
        app_label           = 'solicitudes'
        managed             = False



class Servicios(models.Model):
    descripcion         = models.CharField(max_length=200, help_text='Descripción de servicio', null=True, unique=True)
    slug                = models.CharField(max_length=200, help_text='slug de servicio', null=True, unique=True)

    class Meta:
        app_label           = 'solicitudes'
        managed             = False



class Catalogo_SubServicio(models.Model):
    servicio            = models.ForeignKey('Servicios', related_name='subservicios', on_delete=models.CASCADE)
    descripcion         = models.CharField(max_length=100, help_text='Descripcion de SubServicio', null=True)

    def __str__(self):
        return '{}:{}'.format(self.servicio.description,self.descripcion)

    class Meta:
        verbose_name_plural = 'Catalogo_SubServicio'
        unique_together     = ('servicio','descripcion')
        app_label           = 'solicitudes'
        managed             = False



class Ures(models.Model):
    ures_ures           = models.CharField(max_length=8)
    ures_descrip        = models.CharField(max_length=300)

    class Meta:
        verbose_name_plural = 'Ures'
        app_label           = 'solicitudes'
        managed             = False



class Solicitud(models.Model):
    titulo              = models.CharField(max_length=40, help_text='Titulo', null=True)
    matricula           = models.CharField(max_length=10, help_text='Matricula', default=None)
    ures                = models.ForeignKey(Ures, on_delete=models.CASCADE, null=True)
    nombre              = models.CharField(max_length=200, help_text='Nombre de quien solicita', default=None)
    apellido_paterno    = models.CharField(max_length=200, help_text='Apellido paterno', default=None)
    apellido_materno    = models.CharField(max_length=200, help_text='Apellido materno', null=True)
    correo              = models.EmailField(max_length=200, help_text='Correo electrónico', null=True, validators=[is_email])
    extension           = models.CharField(max_length=5, help_text='No de Extensión', null=True)
    telefono            = models.CharField(max_length=11, help_text='Telefono de contacto', null=True)
    pautoriza           = models.CharField(max_length=200, help_text='Nombre de quien autoriza', null=True)
    descripcion         = models.CharField(max_length=500, help_text='Descripción de la solicitud', null=True, validators=[descripcion_validation_sol])
    estatus             = models.ForeignKey(Catalogo_Estatus, on_delete=models.CASCADE, null=True)
    folio               = models.CharField(max_length=6, null=True, help_text='Folio generado automaticamente de la solicitud')
    fecha_sol           = models.DateTimeField(auto_now_add=True)
    estatus_update      = models.DateTimeField(null=True)
    area                = models.CharField(max_length=20, null=True)

    class Meta:
        verbose_name_plural = 'Solicitud'
        app_label           = 'solicitudes'
        managed             = False



class MyFile(models.Model):
    solicitud           = models.ForeignKey(Solicitud,on_delete=models.CASCADE, related_name='archivos_solicitud',null=True)
    file                = models.FileField(blank=False, null=True)
    descripcion         = models.CharField(max_length=80, null=True)
    nombre_archivo      = models.CharField(max_length=100, null=True)
    subido              = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'MyFile'
        app_label           = 'solicitudes'
        managed             = False



class SubServicios(models.Model):
    solicitud           = models.ForeignKey(Solicitud, related_name='subservices', on_delete=models.CASCADE, default=None)
    subservicio         = models.ForeignKey(Catalogo_SubServicio, related_name='subservicio', on_delete=models.CASCADE, default=None)
    estatus             = models.ForeignKey(Catalogo_Estatus, related_name='status', on_delete=models.CASCADE, null=True)
    fec_subservicio     = models.DateTimeField(auto_now_add=True, null=True)
    estatus_update      = models.DateTimeField(null=True)
    comentario          = models.CharField(max_length=150, null=True)

    class Meta:
        verbose_name_plural ='subservicios'
        app_label           = 'solicitudes'
        managed             = False

from rest_framework import serializers

from .models import *


class CatalogoEstatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Catalogo_Estatus
        fields = ('key_name', 'estatus_descrip')



class SolicitudesSerializer(serializers.ModelSerializer):
    ures_desc       = serializers.SerializerMethodField()
    formatted_date  = serializers.SerializerMethodField()
    count_files     = serializers.SerializerMethodField()
    subservices     = serializers.SerializerMethodField()

    class Meta:
        model = Solicitud
        fields = ('folio','titulo','nombre','apellido_paterno','apellido_materno','descripcion',
                    'ures_desc','formatted_date','count_files','subservices', 'area')
    
    def get_ures_desc(self, obj):
        return obj.ures.ures_descrip
    
    def get_formatted_date(self, obj):
        from datetime import datetime
        date = obj.fecha_sol.strftime("%d %h %Y, %I:%M")
        if 'Jan' in date:
            date = date.replace('Jan', 'Ene')
        elif 'Apr' in date:
            date = date.replace('Apr','Abr')
        elif 'Aug' in date:
            date = date.replace('Aug','Ago')
        elif 'Dec' in date:
            date = date.replace('Dec','Dic')
        localedate =  obj.fecha_sol.strftime("%p")
        if (localedate == 'PM'):
            localedate = 'p.m'
        else:
            localedate = 'a.m'
        return date + ' ' + localedate
                
    def get_count_files(self, obj):
        files = MyFile.objects.filter(solicitud=obj.id)
        return len(files)
    
    def get_subservices(self, obj):
        subservices = SubServicios.objects.filter(solicitud=obj.id)
        return SubserviciosSerializer(subservices, many=True).data



class SubserviciosSerializer(serializers.ModelSerializer):
    estatus_key_name        = serializers.CharField(source='estatus.key_name', read_only=True)

    class Meta:
        model = SubServicios
        fields = ('estatus_key_name',)

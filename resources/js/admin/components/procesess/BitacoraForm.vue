<template>
    <div>
        <h1 class="h2 color-black text-center request--title mb-8 request--title">Bitacora</h1>
        <div class="request__container">
            <form class="form-bitacora"  action="" id="formBitacora" method="post">
                <div class="row">
                    <div class="form-control col sm:col-1/2">
                        <p>Unidad:</p>
                        <input class="form-field" type="text" autofocus maxlength="80" ><br><br>
                        <p>Folio sitema:</p>
                        <input class="form-field" type="text"><br><br>
                        <p>Solicitado por:</p>
                        <input class="form-field" type="text"><br><br>
                    </div>
                    <div class="form-control col sm:col-1/2">
                        <p>Folio interno:</p>
                        <input class="form-field" type="text"><br><br>
                        <p>Fecha:</p>
                        <input class="form-field" type="date"><br><br>
                    </div>
                </div>
                <div class="row">
                    <div class="form-control">
                        <p>Solicitud:</p>
                        <input class="form-field" type="text"><br><br>
                        <p>Diagnostico:</p>
                        <input class="form-field" type="text"><br><br>
                        <p>Material requerido para la reparacion:</p>
                        <input class="form-field" type="text"><br><br>
                        <p>NOTA: EN CASO DE REQUERIR MATERIAL PARA SU REPARACION DEBERA SER TRAMITADO POR EL ÁREA A SU DIGNO CARGO.</p>
                        <br>
                    </div>
                </div>
                <div class="row">
                    <div class="form-control">
                        <p>Equipo revisado por:</p>
                        <br>
                    </div>
                </div>
                <div class="row">
                    <div class="form-control col sm:col-1/2">
                        <p>Nombre:</p>
                        <input class="form-field" type="text"><br><br>
                        <p>Área:</p>
                        <input class="form-field" type="text">
                    </div>
                    <div class="form-control col sm:col-1/2">
                        <p>Nombre:</p>
                        <input v-model="nombre" class="form-field" type="text">
                        <br>
                        <br>
                        <p>Puesto:</p>
                        <input class="form-field" type="text">
                        <br>
                        <br>
                    </div>
                </div>
                <div class="row">
                    <div class="form-control">
                        <p>Recibido por:</p>
                        <input class="form-field" type="text">
                        <br>
                        <br>
                    </div>
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn btn--form request--button" @click="save()">
                        Guardar →
                    </button>
                </div>
            </form>
        </div>
    </div>

</template>

<script>

    export default {
        data() {
            return {
                nombre: '',
            };
        }, 
        methods:{
            save(type){
                let el = this.$refs[type+'_comment_field'];

                if(el.value === '') {
                    return;
                }

                var formBitacora = new FormBitacora();

                formBitacora.append("unidad", el.value);
                formBitacora.append("folio_sistema", el.value);
                formBitacora.append("solicitado_por", el.value);
                formBitacora.append("folio_interno", el.value);
                formBitacora.append("fecha", el.value);
                formBitacora.append("solicitud", el.value);
                formBitacora.append("diagnostico", el.value);
                formBitacora.append("material", el.value);
                formBitacora.append("tecnico", el.value);
                formBitacora.append("area", el.value);
                formBitacora.append("supervisor", el.value);
                formBitacora.append("puesto", el.value);
                formBitacora.append("recibido_por", el.value);

                axios.defaults.xsrfCookieName = 'csrftoken';
                axios.defaults.xsrfHeaderName = 'X-CSRFToken';

                window.axios({
                    method: 'post',
                    url: this.$root.path+'/bitacora/sol/bitacoraServicio/',
                    xstfCookieName: 'csrftoken',
                    xsrfHeaderName: 'X-CSRFToken',
                    data: updateIDs,
                    headers: {
                        'X-CSRFToken': 'csrftoken',
                    }
                }).then(response => {

                    if(response.status === 200) {

                        console.log(response.data);
                    }
                }).catch(error => {
                        console.log(error)
                    })
                }
            
        }
    };
</script>
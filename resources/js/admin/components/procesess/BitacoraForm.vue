<template>
    <div>
        <!-- <p>{{ titulo }}</p>
        <p v-for="item in lista" :key="item" @click="showAlert()">
           {{ item }} 
        </p> -->
        <h1 class="h2 color-black text-center request--title mb-8 request--title">Bitacora</h1>
        <div class="request__container">
            <form class="form-bitacora"  action="" id="formBitacora">
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
                        <input class="form-field" type="text">
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
                    <button type="submit" class="btn btn btn--form request--button">
                        Guardar ⤍
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

    export default {
        props:{
            lista:Array,
            titulo:String,
        }, 
        // data() {
        // }, 
        // mounted() {
        //     alert('Mensaje de prueba');
        // },
        methods:{
            showAlert(){
                alert('Mensaje 2');
            },
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
                formBitacora.append("material_requerido", el.value);

                window.axios
                    .post(this.$root.path+'/administracion/solicitudes/comentar-proceso', formBitacora)
                    .then(response => {

                        if(response.status === 200) {

                            if(type === 'public') {
                                this.public.unshift(response.data);
                            } else {
                                this.private.unshift(response.data);
                            }

                            el.value = '';
                        }
                    })
                    .catch(error => {

                        console.log(error)
                    })
            }          
        }
    };
</script>
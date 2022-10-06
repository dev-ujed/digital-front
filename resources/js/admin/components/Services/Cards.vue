<template>
    <div>
        <div class="row">
            <div :class="'db-process-card db-process-card--'+(service.servicios_slug)" v-for="service in list"  @click="serviceModal(service)">
                
                <p class="db-process-card__title"> {{ service.subservicio_name }} </p>
                <p class="db-process-card__date">  {{ service.fec_subservicio }} ,odificacion </p>

                <span class="badge badge--blue"> {{ service.estatus_name }} {{ service.servicios_slug }}</span>
                

                <div class="db-process-card__users" >   
                    <div class="user-bar__avatar-container" v-for="user in service.sub_servicioParticipantes">
                        <img class="user-bar__avatar" :src="$root.path+'/static/img/default.png'" alt="">
                    </div>

                    <div class="user-bar__avatar-container user-bar__avatar-container--count" v-if="service.sub_servicioParticipantes.length > 5">
                        <span class="user-bar__count"> {{ service.sub_servicioParticipantes.length - 5 }} </span>
                    </div>
                </div>
            </div>
        </div>


        <div class="text-center mt-6 w-full">
            <button class="btn btn--light w-full" @click="borrarServicio">
                <input hidden :value="folio"  type="text" id="servicio">
                <span class="icon-plus-circle">
                    <slot name="plus-circle"></slot>
                </span>
                Borrar Servicio
            </button>
        </div>

        <div class="text-center mt-6 w-full">
            <button class="btn btn--light w-full" @click="createModal">
                <span class="icon-plus-circle">
                    <slot name="plus-circle"></slot>
                </span>
                Crear servicio
            </button>
        </div>

    </div>
</template>
<script>



    export default {
        props: {
            array: {
                type: Array,
                required: true
            },
            folio: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                list: this.array,
                servicio: this.servicio,
            };
        },
        methods: {
            serviceModal(service) {
                this.$root.$emit('subservice', service);
                this.$root.$emit('detailServiceModal');
            },
            createModal() {
                this.$root.$emit('showServiceModal');
            },
            borrarServicio() {

                // console.log('borrar servicio ' + servicio.value);
                var formData = new FormData();
                formData.append("servicio", this.folio);

                console.log(this.folio);
                window.axios.post(this.$root.path+'/solicitudes/delete/', this.folio)
                    .then( datos => {
                       console.log(datos)
                    });

            },
            addItems(data) {
                if(data !== undefined) {

                    const exists = this.list.find(element => {
                        return element.id === data.id
                    })

                    const index = this.list.findIndex(element => {
                        return element.id === data.id
                    })

                    if(!exists) {
                        this.list.push(data)
                    } else {
                        this.list.splice(index, 1, data);
                    }
                }
            },
        },
        mounted() {
            this.$root.$on('cardServices',this.addItems);
        }
    };
</script>

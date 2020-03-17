<template>
    <div>
        <div :class="'db-process-card mr-0 db-process-card--'+subservice.servicios_slug" @click="showModal(subservice)"
            v-for="subservice in list"
            v-if="countsubservices != 0">
            <p class="db-process-card__title">
                {{ subservice.subservicio_name }}
            </p>
            <p class="db-process-card__date mb-1">{{ subservice.formated_date }} <br>{{ subservice.formated_date_update }}</p>
            <div class="db-process-card__users mt-0">
                <div class="user-bar__avatar-container" v-for="participant in subservice.sub_servicioParticipantes">
                    <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
                    :alt="participant.participante_name+' '+participant.participante_last_name"
                    :title="participant.participante_name+' '+participant.participante_last_name">
                </div>
            </div>
        </div>
    </div>

</template>
<script>

    export default {
        props: {
            request: Array,
            countsubservices: Number,
            status: String
        },
        data() {
            return {
                list: this.request,
                request: this.solicitud,
            };
        },
        methods: {
            showModal(subservice) {
                this.$root.$emit('subservice', subservice);
                this.$root.$emit('showModal');
            },
            addItem(data) {
                if(data !== undefined) {
                    for( var i = 0; i < this.list.length; i++){

                        if( this.list[i].subservicio_name == data.subservicio //Cambiar a subservice id
                            && this.list[i].id == data.id) { //Eliminar segunda condición
                            this.list.splice(i, 1);
                        }

                        console.log(this.estatus === data.estatus); //que me envien todos los status aunque vengan null
                        //para agregar campos en esa lista a partir de elegir el status en el que se cambio el proceso, y el estatus de la lista

                    }
                }
            }
        },
        mounted() {
            this.$root.$on('process',this.addItem);
        }
    };
</script>

<template>
    <div>
        <div class="row">
            <div :class="'db-process-card db-process-card--'+(service.servicios_slug)" v-for="service in list">
                <p class="db-process-card__title"> {{ service.subservicio_name }} </p>
                <p class="db-process-card__date">  {{ service.fec_subservicio }} </p>

                <span class="badge badge--blue"> {{ service.estatus_name }}  </span>

                <div class="db-process-card__users" >
                    <div class="user-bar__avatar-container" v-for="user in service.sub_servicioParticipantes">
                        <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="">
                    </div>

                    <div class="user-bar__avatar-container user-bar__avatar-container--count">
                        <span class="user-bar__count">+3</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="text-center mt-6 w-full">
            <button class="btn btn--light w-full" @click="showModal">
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
            }
        },
        data() {
            return {
                list: this.array,
            };
        },
        methods: {
            showModal() {
                this.$root.$emit('showModal');
            },
            addItems(data) {
                if(data !== undefined) {
                    this.list.push(data);
                }
            }
        },
        mounted() {
            this.$root.$on('cardServices',this.addItems);
        }
    };
</script>

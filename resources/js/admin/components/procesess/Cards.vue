<template>
    <div :class="'db-process-card mr-0 db-process-card--'+subservice.servicios_slug" @click="showModal()">
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

</template>
<script>

    export default {
        props: {
            subservice: Object,
        },
        methods: {
            showModal() {
                this.$root.$emit('subservice', this.subservice);
                this.$root.$emit('showModal');
            }
        }
    };
</script>

<template>
    <div>
        <div class="text-center mt-6">
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

    import ServiceModal from './ServiceModal';

    export default {
        components: { ServiceModal },
        methods: {
            showModal() {
                this.$root.$emit('showModal');
            },
        },
        mounted() {
            console.log('Servicios');
        },
    };
</script>

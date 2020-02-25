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

    export default {
        methods: {
            showModal() {
                this.$root.$emit('showModal');
            },
        }
    };
</script>

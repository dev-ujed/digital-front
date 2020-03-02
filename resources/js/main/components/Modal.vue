<template>
    <div class="modal" v-if="isActive">
        <div class="modal__card">

            <button class="modal__close-btn" @click="closeModal">
                <span class="close">
                    <slot name="close"></slot>
                </span>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isActive: false
            };
        },
        methods: {
            showModal() {
                this.isActive = true;
                this.$root.$emit('showOverlay');
            },
            closeModal() {
                this.isActive = false;
                this.$root.$emit('closeOverlay');
            }
        },
        mounted() {
            this.$root.$on('overlayClosed', this.closeModal);
            this.$root.$on('closeModal', this.closeModal);
            this.$root.$on('showModal', this.showModal);
        },
    };
</script>

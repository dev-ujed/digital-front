<template>
    <div class="modal" v-if="isActive" @click.self="closeModal">
        <div class="modal__card" ref="modal">

            <div class="relative w-full container-btn">
                <button class="modal__close-btn" @click="closeModal">
                    <span class="close">
                        <slot name="close"></slot>
                    </span>
                </button>
            </div>

            <email-modal-form :action="this.$root.path + '/test'" inline-template>
                <form class="container">
                    <div class="form-control">
                        <label for="comentario">
                            Comentario
                            <small class="color-gray-60">Opcional</small>
                        </label>
                        <text-area
                            name="comentario"
                            cols="30"
                            rows="5"
                            maxlength="150"
                            v-model="fields.comentario">
                        </text-area>
                        <small class="color-gray-60">Máximo 150 caracteres.</small>
                        <field-errors name="comentario"></field-errors>
                    </div>

                    <div class="w-full d-inline-block text-center mb-12">
                        <form-button class="btn btn--wide modal__success-btn" type="submit">
                            <span class="mr-1">Crear</span>
                        </form-button>
                    </div>
                </form>
            </email-modal-form>

                
        </div>
    </div>
</template>

<script>
    import EmailModalForm from './EmailModalForm.vue';
    import Modal from '../../../main/components/Modal.vue';

    export default {
        extends: Modal,
        components: { EmailModalForm },
        mounted() {
            this.$root.$on('showEmailModal', this.showModal);
        },
        watch: {
            isActive: function(value) {

               if (value) {
                    setTimeout(this.setFocusTrap, 100);
                }
                else {
                    this.destroyFocusTrap;
                }
            },

        },
        methods: {
            showModal() {
                this.isActive = true;
                this.$root.$emit('showOverlay');
            },


            /*
            |------------------------------------------------------------------------
            | Focus
            |------------------------------------------------------------------------
            */

            /*
             * Return a new instance of FocusTrap on the menu list.
             */
            setFocusTrap() {
                this.focusTrap = window.FocusTrap(this.$refs.modal, {
                    escapeDeactivates: false,
                    clickOutsideDeactivates: true
                });
                this.focusTrap.activate();
            },

            destroyFocusTrap() {
                this.focusTrap.deactivate();
                this.focusTrap = null;
            },

            closeModal() {
                this.isActive = false;
                this.service = '';
                this.focusTrap = null;
                this.$root.$emit('closeOverlay');
            },
        }
    };
</script>

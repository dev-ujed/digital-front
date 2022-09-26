<template>
    <div class="modal" v-if="isActive" @click.self="closeModal">
        <div class="modal__card" ref="modal">

            <div class="relative w-full container-btn mb-6">
                <button class="modal__close-btn" @click="closeModal">
                    <span class="close">
                        <slot name="close"></slot>
                    </span>
                </button>
            </div>

            <email-modal-form :action="this.$root.path + '/administracion/solicitudes/modificar-email/'" inline-template>
                <form class="container">
                    <div class="form-control">
                        <label for="comentario">
                            ¿Deseas incluir un comentario en el correo de notificación al usuario?
                            <small class="color-gray-60">Opcional</small>
                        </label>
                        <text-area
                            name="comentario"
                            cols="30"
                            rows="5"
                            maxlength="150"
                            v-model="fields.comentario">
                        </text-area>
                        <small class="color-gray-60">Máximo 400 caracteres.</small>
                        <field-errors name="comentario"></field-errors>
                    </div>

                    <div class="w-full d-inline-block text-center mb-12">
                        <button 
                            class="btn btn--light mr-6" 
                            type="button"
                            @click="$parent.closeModal">
                            <span class="mr-1">No incluir</span>
                        </button>
                        <form-button class="btn modal__success-btn" type="submit">
                            <span class="mr-1">Incluir comentario</span>
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

            this.$root.$on('currentProcess', (el) => {
                this.process = el;
            });

            this.$root.$on('showEmailModal', this.showModal);
        },
        data() {
            return {
                process: {},
            };
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

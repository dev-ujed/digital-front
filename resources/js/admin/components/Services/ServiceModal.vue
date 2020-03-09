<template>
    <div class="modal" v-if="isActive" @click.self="closeModal">
        <div class="modal__card" ref="modal">

            <button class="modal__close-btn" @click="closeModal">
                <span class="close">
                    <slot name="close"></slot>
                </span>
            </button >

            <service-modal-form :action="action" inline-template>
                <form class="container">
                    <div class="modal__services">
                        <label  class="modal__services-item"
                                :class="{
                                    'modal__services-item--active': $parent.service === item.slug
                                }"
                                v-for="item in $parent.services"
                                >
                            <span :class="'modal__services-item-icon modal__services-item-icon--'+(item.slug)"></span>
                            <input
                                type="radio"
                                name="services"
                                :value="item.slug"
                                :id="item.slug"
                                class="visually-hidden"
                                @change="$parent.changeService">
                            {{ item.descripcion }}
                        </label>
                    </div>

                    <div class="form-control" v-if="$parent.service">
                        <label for="subservicio">Proceso</label>
                        <select-field
                            class="form-field"
                            name="subservicio"
                            id="subservicio"
                            v-model="fields.subservicio"
                            :options="$parent.procesess"
                        >
                        </select-field>
                        <field-errors name="subservicio"></field-errors>
                    </div>

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
                        <form-button class="btn btn--wide modal__success-btn" type="submit" :disabled="$parent.service ? false : true">
                            <span class="mr-1">Crear</span>
                        </form-button>
                    </div>
                </form>
            </service-modal-form>
        </div>
    </div>
</template>

<script>
    import ServiceModalForm from './ServiceModalForm.vue';
    import Modal from '../../../main/components/Modal.vue';

    export default {
        extends: Modal,
        components: { ServiceModalForm },
        props: {
            action: {
                type: String,
                required: true
            },
            services: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                service: '',
                focusTrap: null,
                procesess: []
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
            changeService(e) {
                this.service = e.currentTarget.value;

                const current = this.services.filter(process => {
                    return process.slug ==  this.service
                });

                this.procesess = current[0].subservicios;
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
            }
        }
    };
</script>

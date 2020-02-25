<template>
    <div class="modal" v-if="isActive" @click.self="closeModal">
        <div class="modal__card" ref="modal">

            <button class="modal__close-btn" @click="closeModal">
                <span class="close">
                    <slot name="close"></slot>
                </span>
            </button >

            <base-form :action="action" inline-template>
                <form class="container">
                    <div class="modal__services">
                        <label  class="modal__services-item"
                                :class="{
                                    'modal__services-item--active': $parent.service === 'desarrollo'
                                }">
                            <span class="modal__services-item-icon modal__services-item-icon--desarrollo"></span>
                            <input
                                type="radio"
                                name="services"
                                value="desarrollo"
                                id="desarrollo"
                                class="visually-hidden"
                                @change="$parent.changeService">
                            Desarrollo
                        </label>

                        <label  class="modal__services-item"
                                :class="{
                                    'modal__services-item--active': $parent.service === 'infraestructura'
                                }">
                            <span class="modal__services-item-icon modal__services-item-icon--infraestructura"></span>
                            <input
                                type="radio"
                                name="services"
                                value="infraestructura"
                                id="services"
                                class="visually-hidden"
                                @change="$parent.changeService">
                            Infraestructura
                        </label>

                        <label  class="modal__services-item"
                                :class="{
                                    'modal__services-item--active': $parent.service === 'cuentas-de-acceso'
                                }">
                            <span class="modal__services-item-icon modal__services-item-icon--cuentas-de-acceso"></span>
                            <input
                                type="radio"
                                name="services"
                                value="cuentas-de-acceso"
                                id="cuentas-de-acceso"
                                class="visually-hidden"
                                @change="$parent.changeService">
                            Cuentas de acceso
                        </label>

                        <label  class="modal__services-item"
                                :class="{
                                    'modal__services-item--active': $parent.service === 'instalacion'
                                }">
                            <span class="modal__services-item-icon modal__services-item-icon--instalacion"></span>
                            <input
                                type="radio"
                                name="services"
                                value="instalacion"
                                id="instalacion"
                                class="visually-hidden"
                                @change="$parent.changeService">
                            Instalación
                        </label>

                    </div>

                    <div class="form-control" v-if="$parent.service">
                        <label for="proceso">Proceso</label>
                        <select-field
                            class="form-field"
                            name="proceso"
                            id="proceso"
                            v-model="fields.proceso"
                            :options="$parent.procesess"
                        >
                        </select-field>
                        <field-errors name="proceso"></field-errors>
                    </div>

                    <div class="form-control">
                        <label for="comment">
                            Comentario
                            <small class="color-gray-60">Opcional</small>
                        </label>
                        <text-area
                            name="comment"
                            cols="30"
                            rows="5"
                            v-model="fields.comment">
                        </text-area>
                        <small class="color-gray-60">Máximo 150 caracteres.</small>
                        <field-errors name="comment"></field-errors>
                    </div>

                    <div class="w-full d-inline-block text-center mb-12">
                        <button class="btn btn--wide modal__success-btn">
                            Crear
                        </button>
                    </div>
                </form>
            </base-form>
        </div>
    </div>
</template>

<script>
    import BaseForm from '../../../main/components/forms/base/BaseForm.vue';
    import Modal from '../../../main/components/Modal.vue';

    export default {
        extends: Modal,
        components: { BaseForm },
        props: {
            action: {
                type: String,
                required: true
            },
            procesess: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                service: '',
                focusTrap: null,
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
            }
        },
        methods: {
            changeService(e) {
                this.service = e.currentTarget.value;
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

<template>
    <div class="modal" v-if="isActive" @click.self="closeModal">
        <div class="modal__card" ref="modal"
                :style="{
                    'min-height': `${minHeight}px`
                }">

                <tabs-component class="icon-tabs icon-tabs--process"
                    :breakpoint="0"
                    :tabs="{'details': 'DETALLES', 'bitacora': 'BITÁCORA'}"
                    :options="{'details': 'DETALLES', 'bitacora': 'BITÁCORA'}"
                    :accepts-html="true"
                >

                    <template slot="panel-details">
                        <div class="container">

                            <span class="size-xs color-gray-50 d-flex items-center">
                                <span class="panel-details__service panel-details__service--desarrollo-de-software"></span>
                                DESARROLLO
                            </span>

                            <p class="size-xl color-gray-90">
                                <b>Creación de sitios web</b>
                            </p>

                            <span class="size-sm color-gray-70">
                                16 de enero 2020, 14:43 p.m.
                            </span>

                            <p class="mt-6 mb-12 color-gray-80">
                                Los servicios pueden tener una anotación corta para describir la tarea.
                                Ésta es opcional y tienen un máximo de 150 caracteres.
                            </p>

                            <change-status-form action='/ok/' inline-template>
                                <form>
                                    <div class="form-control">
                                        <label for="ures">Proceso</label>
                                        <select-field
                                            class="form-field"
                                            name="ures"
                                            id="ures"
                                            v-model="fields.ures"
                                            :options=" {} "
                                        >
                                        </select-field>
                                    </div>
                                </form>
                            </change-status-form>

                            <p class="subtitle">
                                PARTICIPANTES
                            </p>

                            <participants>
                                <slot name="plus" slot="plus"></slot>
                            </participants>

                            <hr class="my-12">

                            <p class="subtitle">
                                COMENTARIOS
                            </p>
                            <comments></comments>

                        </div>

                    </template>
                    <template slot="panel-bitacora">
                        <binnacle></binnacle>
                    </template>
                </tabs-component>
        </div>
    </div>
</template>

<script>
    import Participants from './Participants.vue';
    import Binnacle from './Binnacle.vue';
    import Comments from './Comments.vue';
    import ChangeStatusForm from './ChangeStatusForm.vue';
    import Modal from '../../../main/components/Modal.vue';

    export default {
        extends: Modal,
        components: { Comments, ChangeStatusForm, Binnacle, Participants },
        data() {
            return {
                service: '',
                focusTrap: null,
                service: '',
                procesess: [],
                minHeight: 0
            };
        },
        watch: {
            isActive: function(value) {

               if (value) {
                    setTimeout(() => {
                        this.setFocusTrap();
                        this.getMinHeight();
                    }, 100);
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

            getMinHeight() {
                this.minHeight = 0;

                Vue.nextTick(() => this.minHeight = this.$refs.modal.clientHeight);
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

<template>
    <div class="modal" v-if="isActive" @click.self="closeModal" @scroll="ScrollTop">
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

                            <span class="size-xs color-gray-50 d-flex items-center uppercase">
                                <span :class="'panel-details__service panel-details__service--'+subservice.servicios_slug"></span>
                                {{ subservice.servicio }}
                            </span>

                            <p class="size-xl color-gray-90 mb-0">
                                <b>{{ subservice.subservicio_name }}</b>
                            </p>

                            <span class="size-sm color-gray-70">
                                {{ subservice.formated_date }}
                            </span>

                            <p class="mt-6 color-gray-80" v-if="subservice.comentario">
                                {{ subservice.comentario }}
                            </p>

                            <change-status-form
                                :action="'/administracion/solicitudes/estado-proceso/'+subservice.id+'/'"
                                :statuses="statuses">
                                <slot name="save" slot="save"></slot>
                                <slot name="rotate-ccw" slot="rotate-ccw"></slot>
                            </change-status-form>

                            <p class="subtitle">
                                PARTICIPANTES
                            </p>

                            <participants
                                :participants="subservice.sub_servicioParticipantes"
                            >
                                <slot name="check" slot="check"></slot>
                                <slot name="close" slot="close"></slot>
                                <slot name="plus" slot="plus"></slot>
                            </participants>

                            <hr class="my-12">

                            <p class="subtitle">
                                COMENTARIOS
                            </p>
                            <comments
                                :publiccomments="subservice.comentarios_publicos"
                                :teamcomments="subservice.comentarios_privados"
                                :subservice="subservice.id"
                            ></comments>

                        </div>

                    </template>
                    <template slot="panel-bitacora">
                        <binnacle
                            :binnacle="subservice.bitacora"
                        ></binnacle>
                    </template>
                </tabs-component>
        </div>
        <transparent-overlay
            :style="{
                'top': `${ top }px`
            }" >
        </transparent-overlay>
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
        props: {
            statuses: Array
        },
        data() {
            return {
                subservice: {},
                service: '',
                focusTrap: null,
                participantsModalVisible: false,
                procesess: [],
                minHeight: 0,
                top: 0,
                status: false
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

        mounted() {
            this.$root.$on('addParticipant', (el) => {
                this.participantsModalVisible = el;
            });

            this.$root.$on('subservice', (el) => {
                this.subservice = el;
            });
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
            },

            ScrollTop(e) {
                if (this.participantsModalVisible) {
                    this.top = e.currentTarget.scrollTop;
                }
            }
        }
    };
</script>

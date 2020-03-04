<template>
    <div class="modal" v-if="isActive" @click.self="closeModal">
        <div class="modal__card" ref="modal">
            <tabs-component class="icon-tabs icon-tabs--process"
                :breakpoint="0"
                :tabs="{'details': 'DETALLES', 'bitacora': 'BITÁCORA'}"
                :options="{'details': 'DETALLES', 'bitacora': 'BITÁCORA'}"
                :accepts-html="true"
            >
                <template slot="panel-details">
                    <div class="container">

                        <span class="size-xs color-gray-50">
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

                        <div class="form-control">
                            <label for="ures">Estado</label>
                            <select
                                class="form-field"
                                name="ures"
                                id="ures"
                            >

                                <option>- Selecciona una opción -</option>
                            </select>
                        </div>

                        <p class="subtitle">
                            PARTICIPANTES
                        </p>

                        <div class="process-modal__participants">
                            <div class="user-bar__avatar-container">
                                <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="">
                            </div>

                            <div class="user-bar__avatar-container">
                                <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="">
                            </div>

                            <div class="user-bar__avatar-container user-bar__avatar-container--add">
                                <span class="user-bar__plus">+</span>
                            </div>

                        </div>

                        <hr class="my-12">

                        <p class="subtitle">
                            COMENTARIOS
                        </p>
                        <comments></comments>

                    </div>

                </template>
                <template slot="panel-bitacora">

                    <div class="container">

                        <div class="media">
                            <div class="media__figure user-bar__avatar-container">
                                <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="">
                            </div>
                            <div class="media__body">
                                <p class="mb-0">
                                    <b>Miriam Rivera</b> cambió el estado a <b>En espera</b> y comentó:
                                </p>
                                 <blockquote class="blockquote-simple size-sm ml-0 my-2">
                                    <p>Se requiere que nos compartan las fotografías del header para terminar con la interfaz del home.</p>
                                </blockquote>
                                <p class="size-sm color-gray-60">
                                    Lunes 3 Ene 2020, 2:20 p.m.
                                </p>
                            </div>
                        </div>

                        <div class="media">
                            <div class="media__figure user-bar__avatar-container">
                                <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="">
                            </div>
                            <div class="media__body">
                                <p class="mb-0">
                                    <b>Miriam Rivera</b> cambió el estado a <b>En proceso</b> y comentó:
                                </p>
                                <p class="size-sm color-gray-60">
                                    Lunes 3 Ene 2020, 2:20 p.m.
                                </p>
                            </div>
                        </div>

                    </div>

                </template>
            </tabs-component>

        </div>
    </div>
</template>

<script>
    import Comments from './Comments.vue';
    import ProcessModalForm from './ProcessModalForm.vue';
    import Modal from '../../../main/components/Modal.vue';

    export default {
        extends: Modal,
        components: { Comments, ProcessModalForm },
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

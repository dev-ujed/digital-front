<template>
    <div class="modal" v-if="isActive"  @click="closeModal">
        <div class="modal__card">

            <button class="modal__close-btn" @click="closeModal">
                <span class="close">
                    <slot name="close"></slot>
                </span>
            </button>

            <form>
                <div class="container">
                    <div class="modal__services">

                        <label class="modal__services-item modal__services-item--active">
                            <span class="modal__services-item-icon modal__services-item-icon--desarrollo"></span>
                            <input type="radio" name="services" id="desarrollo" class="visually-hidden">
                            Desarrollo
                        </label>

                        <label class="modal__services-item">
                            <span class="modal__services-item-icon modal__services-item-icon--infraestructura"></span>
                            <input type="radio" name="services" id="" class="visually-hidden">
                            Infraestructura
                        </label>

                        <label class="modal__services-item">
                            <span class="modal__services-item-icon modal__services-item-icon--cuentas-de-acceso"></span>
                            <input type="radio" name="services" id="" class="visually-hidden">
                            Cuentas de acceso
                        </label>

                        <label class="modal__services-item">
                            <span class="modal__services-item-icon modal__services-item-icon--instalacion"></span>
                            <input type="radio" name="services" id="" class="visually-hidden">
                            Instalación
                        </label>

                    </div>

                    <div class="form-control">
                        <label for="">Servicio</label>
                        <select class="form-field">
                            <option value="0">- Selecciona una opción -</option>
                        </select>
                    </div>

                    <div class="form-control">
                        <label for="">Comentario  <small class="color-gray-60">Opcional</small></label>
                        <textarea class="form-field" name="" id="" cols="30" rows="5"></textarea>
                        <small class="color-gray-60">Máximo 150 caracteres.</small>
                    </div>

                    <div class="w-full d-inline-block text-center mb-12">
                        <button class="btn btn--wide modal__success-btn">
                            Crear
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

    import Modal from '../../../main/components/Modal.vue';

    export default {
        extends: Modal,
        mounted() {
            console.log('CreateServiceModal');
        },
    };
</script>

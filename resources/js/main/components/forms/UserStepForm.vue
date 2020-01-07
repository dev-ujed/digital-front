<template>
    <form>
        <div class="form-control">
            <label for="email">Correo electrónico</label>
            <text-field
                name="email"
                type="email"
                v-model="fields.email"
            >
            </text-field>
        </div>

        <div class="row">
            <div class="form-control col sm:col-1/2">
                <label for="ujed_id">Matrícula</label>
                <text-field
                    name="matricula"
                    v-model="fields.matricula"
                >
                </text-field>
            </div>
            <div class="form-control col sm:col-1/2">
                <label for="name">Nombre</label>
                <text-field
                    name="name"
                    v-model="fields.name"
                >
                </text-field>
            </div>
        </div>

        <div class="row">
            <div class="form-control col sm:col-1/2">
                <label for="first_last_name">Apellido paterno</label>
                <text-field
                    name="first_last_name"
                    v-model="fields.first_last_name"
                >
                </text-field>
            </div>
            <div class="form-control col sm:col-1/2">
            <label for="second_last_name">
                Apellido materno
                <small class="color-gray-60"><i>Opcional</i></small>
            </label>
            <text-field
                    name="second_last_name"
                    v-model="fields.second_last_name"
                >
                </text-field>
            </div>
        </div>

        <div class="row">
            <div class="form-control col sm:col-7/12">
                <label for="phone">Teléfono</label>
                <text-field
                    name="phone"
                    v-model="fields.phone"
                >
                </text-field>
            </div>
            <div class="form-control col sm:col-5/12">
                <label for="ujed_extension">Extensión (UJED)</label>
                <text-field
                    name="extension"
                    v-model="fields.extension"
                >
                </text-field>
            </div>
        </div>

        <div class="form-control">
            <label for="unit">Unidad responsable</label>
            <select class="form-field" name="unit" id="unit" v-model="fields.unit" value="">
                <option value="" selected>- Selecciona una opción -</option>
                <option v-for="ures in ureslist"
                    :value="ures.id "
                >
                    {{ ures.ures_descrip }}
                </option>

            </select>
        </div>

        <div class="form-control">
            <label for="from">
                ¿Quién autoriza?
                <small class="color-gray-60"><i>Opcional</i></small>
                </label>
            <text-field
                    name="from"
                    v-model="fields.from"
                >
                </text-field>
        </div>

        <div class="text-center">
            <button
                class="btn btn--form request--button"
            >
                <slot name="continue"></slot>
            </button>

        </div>
    </form>
</template>
<script>
   import BaseForm from './base/BaseForm.vue';

    export default {
        extends: BaseForm,
        props: {
            ureslist: {
                type: Array,
                required: true
            },
        },
        data() {
            return {
                step:1,
                fields: {
                    unit: ''
                }
            };
        },
        methods:{

            /**
             * Handle redirection after receiving a successful response.
             *
             * @param {Object} response
             */
            onSuccess(response) {
                if (this.redirectTo) {
                    return window.location.href = this.redirectTo;
                }

                if (response.headers['redirect-to']) {
                    return window.location.href = response.headers['redirect-to'];
                }

                this.isSubmitting = false;
                this.$emit('successuser', true);

            },
        }

    };
</script>
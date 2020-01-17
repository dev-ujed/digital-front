<template>
    <form>
        <div class="form-control">
            <label for="correo">Correo electrónico</label>
            <text-field
                name="correo"
                type="correo"
                v-model="fields.correo"
                ref="email_field"
            >
            </text-field>
            <field-errors name="correo"></field-errors>
        </div>

        <div class="row">
            <div class="form-control col sm:col-1/2">
                <label for="matricula">Matrícula</label>
                <text-field
                    name="matricula"
                    v-model="fields.matricula"
                >
                </text-field>
                <field-errors name="matricula"></field-errors>
            </div>
            <div class="form-control col sm:col-1/2">
                <label for="nombre">Nombre</label>
                <text-field
                    name="nombre"
                    v-model="fields.nombre"
                >
                </text-field>
                <field-errors name="nombre"></field-errors>
            </div>
        </div>

        <div class="row">
            <div class="form-control col sm:col-1/2">
                <label for="apellido_paterno">Apellido paterno</label>
                <text-field
                    name="apellido_paterno"
                    v-model="fields.apellido_paterno"
                >
                </text-field>
                <field-errors name="apellido_paterno"></field-errors>
            </div>
            <div class="form-control col sm:col-1/2">
            <label for="apellido_materno">
                Apellido materno
                <small class="color-gray-60"><i>Opcional</i></small>
            </label>
            <text-field
                    name="apellido_materno"
                    v-model="fields.apellido_materno"
                >
                </text-field>
                <field-errors name="apellido_materno"></field-errors>
            </div>
        </div>

        <div class="row">
            <div class="form-control col sm:col-7/12">
                <label for="telefono">Teléfono</label>
                <text-field
                    name="telefono"
                    v-model="fields.telefono"
                >
                </text-field>
                <field-errors name="telefono"></field-errors>
            </div>
            <div class="form-control col sm:col-5/12">
                <label for="extension">Extensión (UJED)</label>
                <text-field
                    name="extension"
                    v-model="fields.extension"
                >
                </text-field>
                <field-errors name="extension"></field-errors>
            </div>
        </div>

        <div class="form-control">
            <label for="ures">Unidad responsable</label>
            <select class="form-field" name="ures" id="ures" v-model="fields.ures" value="">
                <option value="" selected>- Selecciona una opción -</option>
                <option v-for="ures in ureslist"
                    :value="ures.id "
                >
                    {{ ures.ures_descrip }}
                </option>

            </select>
            <field-errors name="ures"></field-errors>
        </div>

        <div class="form-control">
            <label for="pautoriza">
                ¿Quién autoriza?
                <small class="color-gray-60"><i>Opcional</i></small>
                </label>
            <text-field
                    name="pautoriza"
                    v-model="fields.pautoriza"
                >
                </text-field>
                <field-errors name="pautoriza"></field-errors>
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
                fields: {
                    ures: '',
                    id:''
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
                this.fields.id = response.data.id.toString();
                this.$emit('requestid', response.data.id.toString());
            },
        }

    };
</script>
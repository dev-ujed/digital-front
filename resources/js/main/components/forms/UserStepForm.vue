<template>
    <form>
        <div class="form-control">
            <label for="correo">Correo electrónico</label>
            <text-field
                name="correo"
                type="email"
                v-model="fields.correo"
                ref="email_field"
                maxlength="80"
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
                    maxlength="7"
                    minlength="5"
                >
                </text-field>
                <field-errors name="matricula"></field-errors>
            </div>
            <div class="form-control col sm:col-1/2">
                <label for="nombre">Nombre</label>
                <text-field
                    name="nombre"
                    v-model="fields.nombre"
                    maxlength="120"
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
                    maxlength="60"
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
                    maxlength="60"
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
                    maxlength="11"
                >
                </text-field>
                <field-errors name="telefono"></field-errors>
            </div>
            <div class="form-control col sm:col-5/12">
                <label for="extension">Extensión (UJED)</label>
                <text-field
                    name="extension"
                    v-model="fields.extension"
                    maxlength="6"
                    minlength="4"
                >
                </text-field>
                <field-errors name="extension"></field-errors>
            </div>
        </div>

        <div class="form-control">
            <label for="ures">Unidad responsable</label>
            <select-field
                class="form-field"
                name="ures"
                id="ures"
                v-model="fields.ures"
                :options="ureslist"
            >
            </select-field>
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
                    maxlength="200"
                >
                </text-field>
                <field-errors name="pautoriza"></field-errors>
        </div>

        <div class="text-center">
            <form-button
                class="btn btn--form request--button"
            >
                <slot name="continue"></slot>
            </form-button>

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

        mounted() {
            this.$parent.$on('deleterequest', this.reset);
        },

        methods:{

            /**
             * Handle redirection after receiving a successful response.
             *
             * @param {Object} response
             */
            onSuccess(response) {
                this.isSubmitting = false;
                this.$emit('successuser', true);
                this.fields.id = response.data.id.toString();
                this.$emit('requestid', response.data.id.toString());
            },


            reset() {
                this.fields = {
                    apellido_materno:'',
                    apellido_paterno:'',
                    correo:'',
                    extension:'',
                    id:'',
                    matricula:'',
                    nombre:'',
                    pautoriza:'',
                    telefono:'',
                    ures:'',
                };
            },
        }

    };
</script>
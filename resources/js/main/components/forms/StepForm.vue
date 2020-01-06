<template>
    <form>
        <div v-show="step === 1">
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
                <select class="form-field" name="unit" id="unit" v-model="fields.unit" value="0">
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
                @click.prevent="next()"
                >
                    <slot name="continue"></slot>
                </button>

            </div>
        </div>

        <div v-show="step === 2">
            <div class="form-control">
                <label for="request_description">Cuéntanos en qué podemos ayudarte</label>
                <text-area
                name="request_description"
                cols="30"
                rows="10"
                v-model="fields.description">
            </text-area>
            </div>

            <request-upload-file>

                <slot name="paperclip" slot="paperclip"></slot>
            <slot name="x" slot="x"></slot>
                
            </request-upload-file>

            <div class="text-center">
                <button class="btn btn--light request--button mb-6 sm:mr-8"
                    @click.prevent="prev()"
                >
                    <slot name="return"></slot>
                </button>
                <button class="btn btn--form mb-6 request--button" type="submit">
                    <span class="mr-1">Enviar</span>
                </button>

                <br>
                <a href="#" class="request--link size-sm">Cancelar solicitud</a>
            </div>
        </div>
    </form>
</template>

<script>
    import BaseForm from './base/BaseForm.vue';
    import RequestUploadFile from './RequestUploadFile.vue';

    export default {
        extends: BaseForm,
        components: { RequestUploadFile },
        props: {
            ureslist: {
                type: Array,
                required: true
            },
        },
        data() {
            return {
                step:1,
                firstTime: null,
                fields: {
                    unit: ''
                }
            };
        },

        watch: {
            firstTime: function(val) {
                this.fields._method = val === false ? 'patch' : 'post';
            }
        },

        methods:{
            prev() {
              this.step--;
            },
            next() {
              this.step++;
            },

        }
    };
</script>
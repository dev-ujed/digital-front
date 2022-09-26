<template>
    <form>
        <div class="form-control">
            <label for="descripcion">Cuéntanos en qué podemos ayudarte</label>
            <text-area
                name="descripcion"
                cols="30"
                rows="10"
                maxlength="500"
                v-model="fields.descripcion"
                ref="description_field">
            </text-area>
            <field-errors name="descripcion"></field-errors>
        </div>

        <p class="size-caption" v-if="Object.keys(fields.files).length > 0">Archivos adjuntos</p>
        <p class="size-sm color-gray-60" v-if="Object.keys(fields.files).length > 0">Si lo deseas, puedes agregar una breve anotación a los archivos que has agregado.</p>

        <div v-for="(file, key) in fields.files"
            :key="key"
            :value="file"
            :name="key">

            <request-file
                :requestid="requestid"
                :value="file"
                :name="key"
                :errors="[]"
            >
                <slot name="paperclip" slot="paperclip"></slot>
                <slot name="x" slot="x"></slot>
            </request-file>
        </div>


        <div class="form-control mb-18">
            <request-upload-file
                :requestid="requestid"
            >
            </request-upload-file>
        </div>


        <div class="text-center">
            <button class="btn btn--light request--button mb-6 sm:mr-8"
                @click.prevent="prev()"
            >
                <slot name="return"></slot>
            </button>
            <form-button class="btn btn--form mb-6 request--button" type="submit">
                <span class="mr-1">Enviar</span>
            </form-button>
            <br>
            <a href="#" class="request--link size-sm" @click.prevent="CancelRequest()">Cancelar solicitud</a>
        </div>
    </form>
</template>
<script>

    import BaseForm from './base/BaseForm.vue';
    import RequestUploadFile from './RequestUploadFile.vue';
    import RequestFile from './RequestFile.vue';

    export default {
        extends: BaseForm,
        components: { RequestUploadFile, RequestFile },
        props: {
            requestid: {
                type: String,
                required: true
            },
            urldelete: {
                type: String,
                required: true
            },
        },
         data() {
            return {
                fields: {
                    id: this.requestid,
                    descripcion:'',
                    files: {},
                },
                errors : {},
                thumbs: [],
                names: [],
                hasThumb: [],
            };
        },
        watch: {
            requestid: function() {
              this.fields.id = this.requestid;
            }
        },
        methods:{

            prev() {
                this.$emit('prevuser', true);
            },

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
                this.$emit('requestsuccess', true);
                this.$emit('requestfolio', response.data.folio.toString());
                this.$emit('requestemail', response.data.correo.toString());
            },
            CancelRequest() {
                window.axios.post(this.urldelete, {
                    id: this.requestid,
                });
                this.reset();
                this.$emit('deleterequest', true);
            },

            reset() {
                this.fields = {
                    descripcion:'',
                    id:'',
                    files: {},
                },
                this.errors = {}
            }
        },
        mounted() {

        }
    };
</script>
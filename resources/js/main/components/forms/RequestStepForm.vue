<template>
    <form>
        <div class="form-control">
            <label for="descripcion">Cuéntanos en qué podemos ayudarte</label>
            <text-area
            name="descripcion"
            cols="30"
            rows="10"
            v-model="fields.descripcion"
            ref="description_field">
        </text-area>
        <field-errors name="descripcion"></field-errors>
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
    </form>
</template>
<script>
    import BaseForm from './base/BaseForm.vue';
    import RequestUploadFile from './RequestUploadFile.vue';

    export default {
        extends: BaseForm,
        components: { RequestUploadFile },
        props: {
            requestid: {
                type: String,
                required: true
            },
        },
         data() {
            return {
                fields: {
                    id: this.requestid,
                }
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

        }

    };
</script>
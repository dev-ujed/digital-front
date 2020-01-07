<template>
    <form>
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
    </form>
</template>
<script>
    import BaseForm from './base/BaseForm.vue';
    import RequestUploadFile from './RequestUploadFile.vue';

    export default {
        extends: BaseForm,
        components: { RequestUploadFile },

        methods:{
            prev() {
              this.$emit('prevuser', true);
            },

        }

    };
</script>
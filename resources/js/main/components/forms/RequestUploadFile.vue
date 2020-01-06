<template>
    <div>
        <p class="size-caption" v-if="files.length > 0">Archivos adjuntos</p>
        <p class="size-sm color-gray-60" v-if="files.length > 0">Si lo deseas, puedes agregar una breve anotación a los archivos que has agregado.</p>

        <request-file
            :files="files"
            v-if="files.length > 0"
        >

            <slot name="paperclip" slot="paperclip"></slot>
            <slot name="x" slot="x"></slot>
           
        </request-file>

        <div class="form-control mb-18">
            <label for="file" class="btn btn--sm btn--light cursor--pointer">
                Adjuntar archivo
            </label>
            <input class="form-field hidden" id="file" name="file" type="file" @change="addFile">
        </div>

    </div>
</template>

<script>
    import RequestFile from './RequestFile.vue';

    export default {

        components: { RequestFile },
        data() {
            return {
                files: [],
            };
        },
        methods: {
            addFile() {

                this.hasFiles = true;
                  
                this.files.push(event.target.files[0]);     
            }
        },
        mounted() {
            
        }
    }
</script>

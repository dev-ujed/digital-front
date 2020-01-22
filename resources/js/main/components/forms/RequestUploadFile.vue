<template>
    <div>
        <p class="size-caption" v-if="files.length > 0">Archivos adjuntos</p>
        <p class="size-sm color-gray-60" v-if="files.length > 0">Si lo deseas, puedes agregar una breve anotación a los archivos que has agregado.</p>

        <request-file
            :requestid="requestid"
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
        props: {
            requestid: {
                type: String,
                required: true
            },
        },
        data() {
            return {
                files: [],
                fileId: 0
            };
        },
        methods: {
            addFile() {

                this.hasFiles = true;
                 
                var formData = new FormData();
                formData.append("request", this.requestid);
                formData.append("file", event.target.files[0]);
                
                window.axios
                    .post('subir-archivo', formData)
                    .then(response => {
                        this.fileId = response.data.id;
                        this.files.push(response.data); 
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
        },
        mounted() {
            //console.log(this.requestid);
        }
    }
</script>

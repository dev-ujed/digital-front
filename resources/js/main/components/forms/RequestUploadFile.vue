<template>
    <div>
        <label for="file" class="btn btn--sm btn--light cursor--pointer">
            Adjuntar archivo
        </label>

        <input class="form-field hidden" id="file" name="file" type="file"
            @change="addFile"
            :aria-describedBy="errors.length > 0 ? 'file-errors' : ''"
            :aria-invalid="errors.length > 0 ? 'true' : null"
        >

        <ul v-if="errors.length > 0" id="file-errors" class="error">
            <li v-for="(error, i) in errors" :key="i" v-text="error"></li>
        </ul>
    </div>
</template>

<script>

    export default {

        props: {
            requestid: {
                type: String,
                required: true
            }
        },

        data() {
            return {
                errors: []
            };
        },

        methods: {
            addFile() {

                const file = event.target.files[0];

                var formData = new FormData();
                formData.append("request", this.requestid);
                formData.append("file", file);

                window.axios
                    .post('subir-archivo', formData)
                    .then(response => {

                        if(response.data.id) {

                            this.errors = [];

                            const id  = response.data.id;
                            const key = "description_"+id;

                            this.$set(this.$parent.fields.files, key, '');
                            this.$set(this.$parent.thumbs, key, response.data.urlfile);
                            this.$set(this.$parent.names, key, file.name);

                        }

                    })
                    .catch(error => {
                        this.errors = error.response.data.errors.file;
                    })
            },
        },
        mounted() {
        }
    }
</script>

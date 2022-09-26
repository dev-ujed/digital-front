<template>
    <div>
        <label for="file" 
            class="btn btn--sm btn--light cursor--pointer" 
            :class="{ 'btn--loading' : loading }"
            >
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
                errors: [],
                loading: false
            };
        },

        methods: {
            addFile() {

                this.loading = true;

                const file = event.target.files[0];

                var formData = new FormData();
                formData.append("request", this.requestid);
                formData.append("file", file);

                window.axios
                    .post('subir-archivo', formData)
                    .then(response => {

                        console.log(response);

                        if(response.data.id) {
                            var ext = this.getThumb(response.data.file);
                            var formats = ['doc','docx','documents','pdf','ppt','xls','zip'];
                            var hasThumb = true;

                            if(formats.includes(ext)) {
                                hasThumb = false;
                                response.data.urlfile = this.$root.path + '/static/img/files/'+ext+'.svg'
                            }
     
                            this.errors = [];

                            const id  = response.data.id;
                            const key = "description_"+id;

                            this.$set(this.$parent.fields.files, key, '');
                            this.$set(this.$parent.thumbs, key, response.data.urlfile);
                            this.$set(this.$parent.names, key, file.name);
                            this.$set(this.$parent.hasThumb, key, hasThumb);

                            this.loading = false;

                        } else {
                            this.loading = false;
                        }

                    })
                    .catch(error => {
                        this.errors = error.response.data.errors.file;
                        this.loading = false;
                    })
            },
            getThumb(name) {
                return name.split(".").pop();
            }
        },
        mounted() {
        }
    }
</script>

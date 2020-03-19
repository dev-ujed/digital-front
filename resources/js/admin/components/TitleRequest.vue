<template>
    <div class="form-control">
        <label for="title">
            <span class="color-gray-90 size-lg">Título</span>
            <small class="color-gray-60">Opcional</small>
        </label>
        <input
            class="form-field"
            id="title"
            name="title"
            type="text"
            ref="title"
            :value="title"
            @focus="hasFocus = true"
            @blur="onBlur"
            v-on:keyup.enter="onBlur">
    </div>
</template>
<script>

    export default {
        props: {
            folio: {
                type: String,
                required: true
            },
            datatitle: {
                type: String,
                required: false,
                default: null
            },
        },
        data() {
            return {
                title: this.datatitle === "None" ? '' : this.datatitle
            };
        },
        methods: {
            onBlur() {
                const value = this.$refs.title.value;

                if(value === '' || this.title === value) {
                    return;
                }

                var formData = new FormData();
                formData.append("title", value);

                window.axios
                .post('/administracion/actualizar-titulo/'+this.folio+'/', formData)
                .then(response => {
                    if(response.data === value) {
                        this.title = value;
                    }
                })
                .catch(error => {
                    console.log(error);
                })
            }
        }
    };
</script>

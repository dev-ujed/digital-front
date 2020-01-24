<template>
        <div class="card mb-4">
            <div class="card__title">
                <p class="m-0 d-initial" >
                <slot paperclip="paperclip" name="paperclip" ></slot>
                    <i> {{ $parent.names[name] }}    </i>
                </p>
            
                <button type="button" class="btn--without-style color-danger p-0 card__button" @click="remove(name)">
                    <slot name="x"></slot>
                </button>
            </div>
            <div class="card__body card--file">
                <div class="card card--thumb mr-8 m-auto sm:d-block text-center">
                    <img :src="$parent.thumbs[name]" alt="">
                </div>
                <div class="form-control m-0">
                    <label :for="name" class="size-caption">
                        Descripción del archivo 
                        <small class="color-gray-60"><i>Opcional</i></small>
                    </label>
                    
                    <input :id="id" :name="name"
                        class="form-field"
                        :class="{ 'form-field--invalid' : hasErrors }"
                        :type="type"
                        :maxlength="maxlength"
                        :value="value"
                        :aria-invalid="hasErrors ? 'true' : null"
                        :aria-describedBy="describedBy || null"
                        @input="$emit('input', $event.target.value)"
                    >

                    <ul v-if="hasErrors" :id="id" class="error">
                        <li v-for="(error, i) in errors" :key="i" v-text="error"></li>
                    </ul>

                    <small class="color-gray-60">Máximo 80 caracteres</small>
                </div>
            </div>
        </div>
</template>

<script>

    import TextField from './base/TextField.vue';

    export default {
        extends: TextField,
        props: {
            requestid: {
                type: String,
                required: true
            },
            value: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            errors: {
                type: Array,
                required: false,
                default: () => []
            }
        },
        computed: {
            /**
             * Check if the field has any errors.
             *
             * @return {boolean}
             */
            hasErrors() {
                // Remove the "[]" ending from multiplevalue fields, like "images[]".
                const fieldName = this.name.replace(/\[]$/, '');

                return !! this.errors.length;
            }
        },
        methods: {
            remove(el) {
                 
                var formData = new FormData();
                formData.append("file", el.split('_')[1]);
                
                window.axios
                    .post('eliminar-archivo', formData)
                    .then(response => {
                        
                        this.$delete(this.$parent.fields.files, el);
                        this.$delete(this.$parent.thumbs, el);
                        this.$delete(this.$parent.names, el);
                        
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        },
        mounted() {        
            console.log(this.$parent.thumbs);
        }
    }
</script>

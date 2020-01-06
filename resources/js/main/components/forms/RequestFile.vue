<template>
    <div>
        <div class="card mb-4" 
        v-for="(file, key) in files" 
            :key="key" 
            :value="file.name">
            <div class="card__title">
                <p class="m-0 d-initial" >
                <slot paperclip="paperclip" name="paperclip" ></slot>
                    <i> {{ file.name }} </i>
                </p>
            
                <button class="btn--without-style color-danger p-0 card__button">
                    <slot name="x"></slot>
                </button>
            </div>
            <div class="card__body card--file">
                <div class="card card--thumb mr-8 m-auto sm:d-block text-center">
                    <img src="" alt="">
                </div>
                <div class="form-control m-0">
                    <label :for="'description_'+key" class="size-caption">Descripción del archivo <small class="color-gray-60"><i>Opcional</i></small></label>
                    <input type="text" :id="'description_'+key" :name="'description_'+key" class="form-field">
                    <small class="color-gray-60">Máximo 80 caracteres</small>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            files: {
                type: Array,
                required: true
            },
        },

        mounted() {

        }
    }
</script>

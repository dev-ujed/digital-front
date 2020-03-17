<template>
    <form class="mt-12">
        <button class="btn btn--sm btn--light mb-4 btn--change-status" v-if="status" @click="status = false">
            <slot name="rotate-ccw"></slot>
            <span class=""> <b>Deshacer</b> </span>
        </button>

        <div class="form-control" v-if="!status">
            <label for="status">Estado</label>
            <select-field
                class="form-field"
                name="status"
                id="status"
                v-model="fields.status"
                :options="statuses"
                @input="status = true"
            >
            </select-field>
        </div>

            <div class="process-comment" v-if="status">
                <div class="form-control w-full mr-2">
                    <label for="comentario">
                        Comentario
                        <small class="color-gray-60">Opcional</small>
                    </label>
                    <text-field
                        name="comentario"
                        cols="30"
                        rows="3"
                        v-model="fields.comentario">
                    </text-field>
                    <small class="color-gray-60">Máximo 150 caracteres.</small>
                <field-errors name="comentario"></field-errors>
            </div>

            <div class="process-comment__btns">
                <form-button class="btn btn--sm btn--save modal__success-btn" type="submit">
                    <slot name="save"></slot>
                </form-button>
            </div>
       </div>
    </form>
</template>
<script>
    import BaseForm from '../../../main/components/forms/base/BaseForm.vue';
    import FormButton from '../../../main/components/forms/base/FormButton.vue';
    import SelectField from '../../../main/components/forms/base/SelectField.vue';
    import TextField from '../../../main/components/forms/base/TextField.vue';
    import TextArea from '../../../main/components/forms/base/TextArea.vue';


    export default {
        extends: BaseForm,
        props: {
            statuses: Array
        },
        data() {
            return {
                status: false,
            };
        },
        components: {
            FormButton,
            SelectField,
            TextField,
            TextArea
        },
        methods: {
            submitSucceeded(response) {

                //console.log(response);

                this.$root.$emit('process', response.data);
            }
        }
    };
</script>

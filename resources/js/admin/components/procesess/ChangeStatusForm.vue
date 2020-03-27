<template>
    <form class="mt-12">
        <button class="btn btn--sm btn--light mb-4 btn--change-status" type="button" v-if="status" @click="backValue">
            <slot name="rotate-ccw"></slot>
            <span class=""> <b>Deshacer</b> </span>
        </button>

        <div class="form-control" v-if="!status">
            <label for="status">Estado </label>
            <select-field
                class="form-field"
                name="status"
                id="status"
                ref="selectstatus"
                v-model="fields.status"
                :options="statuses"
                :initial="statusid.toString()"
                @input="selectOption"
            >
            </select-field>
        </div>

            <div class="process-comment" v-if="status">
                <div class="form-control w-full mr-2">
                    <label for="comentario">
                        ¿Deseas incluir un comentario en el correo de notificación al usuario?
                        <small class="color-gray-60">Opcional</small>
                    </label>
                    <text-field
                        name="comentario"
                        cols="30"
                        rows="3"
                        v-model="fields.comentario"
                        v-on:keyup.enter="submit">
                    </text-field>
                    <small class="color-gray-60">Máximo 400 caracteres.</small>
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
            statuses: Array,
            statusdata: Number
        },
        data() {
            return {
                isFinished: false,
                status: false,
                statusid: this.statusdata.toString(),
                selected: this.statusdata.toString()
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
                this.status = false;
                this.isUpdated = true;
                this.statusid = response.data.estatus.toString();

                this.$root.$emit('process', response.data);
                this.$root.$emit('cardServices', response.data);
                this.$root.$emit('binacle', response.data.bitacora[0]);

                if(this.statusid === "7") {

                    this.$root.$emit('closeDetailServiceModal');
                    this.$root.$emit('showEmailModal');

                    this.isFinished = true;
                }
            },
            selectOption() {
                this.status   = true;
                this.selected = this.selected;
            },
            backValue() {
                this.status = false;

                this.statusid = this.isUpdated ?
                                this.statusid.toString() :
                                this.statusdata.toString();
            }
        }
    };
</script>

<script>
    import BaseForm from '../../../main/components/forms/base/BaseForm.vue';
    import FormButton from '../../../main/components/forms/base/FormButton.vue';
    import SelectField from '../../../main/components/forms/base/SelectField.vue';
    import TextField from '../../../main/components/forms/base/TextField.vue';

    export default {
        extends: BaseForm,
        components: {
            FormButton,
            SelectField,
            TextField
        },

        methods: {
            submitSucceeded(response) {
                //this.$root.$emit('cardServices', response.data);
                this.$parent.closeModal();
            },
        }
    };
</script>

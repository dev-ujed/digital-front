<script>
    import BaseForm from '../../../main/components/forms/base/BaseForm.vue';
    import FormButton from '../../../main/components/forms/base/FormButton.vue';
    import SelectField from '../../../main/components/forms/base/SelectField.vue';
    import TextArea from '../../../main/components/forms/base/TextArea.vue';

    export default {
        extends: BaseForm,

        components: {
            FormButton,
            SelectField,
            TextArea,
        },

        methods: {
            submitSucceeded(response) {
                this.$root.$on('cards', this.response.data);
            }
        }
    };
</script>

<script>
    import BaseForm from '../../../main/components/forms/base/BaseForm.vue';
    import FormButton from '../../../main/components/forms/base/FormButton.vue';
    import TextArea from '../../../main/components/forms/base/TextArea.vue';

    export default {
        extends: BaseForm,

        components: {
            FormButton,
            TextArea,
        },

        methods: {
            submitSucceeded(response) {
                this.$parent.closeModal();
            },
        }
    };
</script>

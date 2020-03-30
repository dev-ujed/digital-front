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
        data() {
            return {
                fields: {
                    subservicio: this.$parent.process.subservicio_name,
                    servicio: this.$parent.process.servicio,
                    folio: this.$parent.process.solicitud_folio
                }
            };
        },
        methods: {
            submitSucceeded(response) {
                this.$parent.closeModal();
            }
        }
    };
</script>

<template>
    <label><input type="checkbox"
            :name="name"
            :checked="checked"
            :class="{ 'has-warning' : hasErrors }"
            :value="value"
            :aria-invalid="hasErrors ? 'true' : null"
            :aria-describedby="describedBy"
            @change="onChange"
        >
        <slot></slot>
    </label>
</template>

<script>
    import FormField from '../../../mixins/FormField.js';

    export default {
        mixins: [FormField],

        props: {
            /**
             * Receive an initial value for the field.
             */
            initial: {
                type: Number,
                required: false,
                default: 0
            }
        },

        data() {
            return {
                checked: this.initial
            };
        },

        mounted() {
            this.$emit('input', this.initial);
        },

        methods: {
            /**
             * Emit the value to the form.
             *
             * @param {Object} e
             */
            onChange(e) {
                this.checked = e.target.checked;

                this.$emit('input', this.initial);
            }
        }
    };
</script>

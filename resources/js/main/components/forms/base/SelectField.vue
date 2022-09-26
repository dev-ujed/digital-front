<template>
    <select :id="id" :name="name"
        class="form-field"
        :class="{ 'form-field--invalid' : hasErrors }"
        :value="value"
        :aria-invalid="hasErrors ? 'true' : null"
        :aria-describedBy="describedBy || null"
        @input="$emit('input', $event.target.value)"
    >
        <slot>
            <option value="" disabled>- Selecciona una opción -</option>
            <option v-for="(option) in orderedOptions"
                :key="option.key"
                :value="option.key"
                v-text="option.value"
            >
            </option>
        </slot>
    </select>
</template>
<script>
    import FormField from '../../../mixins/FormField.js';
    export default {
        mixins: [FormField],
        props: {
            /**
             * Receive an initial selected value.
             */
            initial: {
                type: String,
                required: false,
                default: ''
            },
            /**
             * An object of values and descriptions to populate the options
             * inside the select field.
             */
            options: {
                type: [Object, Array],
                required: false,
                default: () => []
            }
        },
        computed: {
            orderedOptions: function() {
                const firstElement = this.options[Object.keys(this.options)[0]];
                if (typeof firstElement !== 'string') {
                    return this.options;
                }
                let result = [];
                for(let key in this.options) {
                    result.push({
                        key: key,
                        value: this.options[key]
                    });
                }
                return result;
            }
        },
        /**
         * Add the reactive property to the `fields` object in parent form.
         */
        mounted() {
            this.$set(this.$parent.fields, this.name, this.initial);
        }
    };
</script>
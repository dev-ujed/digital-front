<template>
    <div>
        <div class="text-center mt-6">
            <button class="btn btn--light w-full" @click="showModal">
                <span class="icon-plus-circle">
                    <slot name="plus-circle"></slot>
                </span>
                Crear servicio
            </button>
        </div>

        <span v-for="service in addItems()"> {{ service.comentario }} </span>
    </div>
</template>
<script>

    export default {
        props: {
            array: {
                type: Array,
                required: true
            }
        },
        methods: {
            showModal() {
                this.$root.$emit('showModal');
            },
            addItems(data) {
                if(data !== undefined) {
                    this.array.push(data);
                }

                console.log(this.array);

                return this.array;
            }
        },
        mounted() {
            this.$root.$on('cardServices',this.addItems);
        }
    };
</script>

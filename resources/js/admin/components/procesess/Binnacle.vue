<template>
    <div class="container">
        <div class="media" v-for="item in this.list">
            <div class="media__figure user-bar__avatar-container">
                <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" :alt="item.user_name+' '+item.user_last_name">
            </div>
            <div class="media__body">
                <p class="mb-0">
                    <b> {{ item.user_name }} </b> <span v-html="item.descripcion"></span>
                </p>
                <blockquote class="blockquote-simple size-sm ml-0 my-2" v-if="item.comentario">
                    <p> {{ item.comentario }} </p>
                </blockquote>
                <p class="size-sm color-gray-60">
                    {{ item.fecha_bitacora }}
                </p>
            </div>
        </div>

    </div>
</template>

<script>

    export default {
        props: {
            binnacle: Array
        },
        data() {
            return {
                list: this.binnacle
            };
        },
        methods: {
            addItem(data) {
                this.list.unshift(data);
                return;
            }
        },
        mounted() {
            this.$root.$on('binacle',this.addItem);
        },
    };
</script>

<template>
    <tabs-component class="initial-tabs"
        :breakpoint="0"
        :tabs="{'team': 'Equipo', 'public': 'Públicos'}"
        :options="{'team': 'Equipo', 'public': 'Públicos'}"
        :accepts-html="true"
        :emit-change-event="true"
        @tabchange="tabChanged"
    >
        <template slot="panel-team">

        <div class="media">
            <div class="media__figure user-bar__avatar-container">
                <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="">
            </div>
            <div class="media__body">
                <p class="mb-0">
                    <b>Miriam Rivera</b>
                    <small class="ml-2 color-gray-60">
                        Hoy, 2:20 p.m.
                    </small>
                </p>
                <p>Este es un comentario de una línea.</p>
            </div>
        </div>

        <div class="media">
            <div class="media__figure user-bar__avatar-container">
                <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="">
            </div>
            <div class="media__body">
                <p class="mb-0">
                    <b>Miriam Rivera</b>
                    <small class="ml-2 color-gray-60">
                        Hoy, 2:20 p.m.
                    </small>
                </p>
                <p>Este es un comentario de varias líneas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum tempor quam, non nibh pretium id consectetur.</p>
            </div>
        </div>

        <div class="media">
            <div class="media__figure user-bar__avatar-container">
                <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="">
            </div>
            <div class="media__body">
                <div class="form-control">
                    <input class="form-field" id="comment" name="comment" type="text" ref="comment" placeholder="Escribir comentario">
                </div>
            </div>
        </div>

        </template>
        <template slot="panel-public">



        </template>
    </tabs-component>
</template>

<script>

    export default {
        methods: {
            tabChanged() {
                this.$parent.$parent.$parent.getMinHeight();
            }
        }
    };
</script>

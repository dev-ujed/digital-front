<template>
    <tabs-component class="initial-tabs"
        :breakpoint="0"
        :tabs="{'team': 'Equipo ('+this.teamcomments.length+')', 'public': 'Públicos ('+this.publiccomments.length+')'}"
        :options="{'team': 'Equipo ('+this.teamcomments.length+')', 'public': 'Públicos ('+this.publiccomments.length+')'}"
        :accepts-html="true"
        :emit-change-event="true"
        @tabchange="tabChanged"
    >
        <template slot="panel-team">
            <div class="media" v-for="comment in this.teamcomments">
                <div class="media__figure user-bar__avatar-container">
                    <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" :alt="item.user_name+' '+item.user_last_name">
                </div>
                <div class="media__body">
                    <p class="mb-0">
                        <b> {{ comment.user_name }}</b>
                        <small class="ml-2 color-gray-60">
                            {{ comment.fecha_comment }}
                        </small>
                    </p>
                    <p> {{ comment.descripcion }} </p>
                </div>
            </div>

            <div class="media">
                <div class="media__figure user-bar__avatar-container">
                    <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="">
                </div>
                <div class="media__body">
                    <div class="form-control">
                        <input
                            class="form-field"
                            id="private_comment"
                            name="private_comment"
                            type="text"
                            ref="private_comment_field"
                            placeholder="Escribir comentario"
                            v-on:keyup.enter="save('private')">
                    </div>
                </div>
            </div>
        </template>
        <template slot="panel-public">
            <div class="media" v-for="comment in this.publiccomments">
                <div class="media__figure user-bar__avatar-container">
                    <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="">
                </div>
                <div class="media__body">
                    <p class="mb-0">
                        <b> {{ comment.user_name }}</b>
                        <small class="ml-2 color-gray-60">
                            {{ comment.fecha_comment }}
                        </small>
                    </p>
                    <p> {{ comment.descripcion }} </p>
                </div>
            </div>

            <div class="media">
                <div class="media__figure user-bar__avatar-container">
                    <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="">
                </div>
                <div class="media__body">
                    <div class="form-control">
                        <input
                            class="form-field"
                            id="public_comment"
                            name="public_comment"
                            type="text"
                            ref="public_comment_field"
                            placeholder="Escribir comentario"
                            v-on:keyup.enter="save('public')">
                    </div>
                </div>
            </div>

        </template>
    </tabs-component>
</template>

<script>

    export default {
        props: {
            publiccomments: Array,
            teamcomments: Array,
            subservice: Number
        },
        methods: {
            tabChanged() {
                this.$parent.$parent.$parent.getMinHeight();
            },
            save(type) {
                let el = this.$refs[type+'_comment_field'];

                if(el.value === '') {
                    return;
                }

                var formData = new FormData();
                formData.append("descripcion", el.value);
                formData.append("subservicio", this.subservice);
                formData.append("tipo", type);

                window.axios
                    .post('comentar-proceso', formData)
                    .then(response => {

                        console.log(response);
                    })
                    .catch(error => {

                        console.log(error)
                    })
            }
        },
        mounted() {
            console.log(this.subservice);
        }
    };
</script>

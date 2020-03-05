<template>
    <div>
        <div class="process-modal__participants">
            <div class="user-bar__avatar-container">
                <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="test" title="test">
            </div>

            <div class="user-bar__avatar-container">
                <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="test" title="test">
            </div>

            <button class="user-bar__avatar-container user-bar__avatar-container--add" @click="show">
                <span class="user-bar__plus">
                    <slot name="plus"></slot>
                </span>
            </button>
        </div>


        <div class="participants-popup" v-if="addParticipant">
            <button class="modal__close-btn participants-popup__close" @click="close">
                <span class="close">
                    <slot name="close"></slot>
                </span>
            </button>
            <input class="form-field participants-popup__search" id="comment" name="comment" type="text" ref="comment" placeholder="Buscar">
            <p class="subtitle">
                DESARROLLO
            </p>

            <div class="participants-popup__team">
                <div class="participants-popup__user">
                    <span class="participants-popup__user-in">
                        <slot name="check"></slot>
                    </span>
                    <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="test" title="test">
                </div>

                <div class="user-bar__avatar-container participants-popup__user">
                    <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="test" title="test">
                </div>

                <div class="user-bar__avatar-container participants-popup__user">
                    <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="test" title="test">
                </div>

                <div class="user-bar__avatar-container participants-popup__user">
                    <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="test" title="test">
                </div>

                <div class="user-bar__avatar-container participants-popup__user">
                    <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="test" title="test">
                </div>

                <div class="user-bar__avatar-container participants-popup__user">
                    <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="test" title="test">
                </div>

                <div class="user-bar__avatar-container participants-popup__user">
                    <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="test" title="test">
                </div>

            </div>

            <p class="subtitle">
                INFRAESTRUCTURA
            </p>

            <div class="participants-popup__team">
                <div class="user-bar__avatar-container participants-popup__user">
                    <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="test" title="test">
                </div>

                <div class="user-bar__avatar-container participants-popup__user">
                    <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="test" title="test">
                </div>
            </div>


        </div>
    </div>


</template>

<script>

    export default {

        data() {
            return {
                addParticipant: false
            };
        },
        methods: {

            show() {
                this.addParticipant = true;
            },
            close() {
                this.addParticipant = false;
            }

        },
        mounted() {
            console.log('participants');
        },
    };
</script>

<template>
    <div>
        <div class="process-modal__participants">
            <div class="user-bar__avatar-container" v-for="participant in participants">
                <img
                    lass="user-bar__avatar"
                    src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
                    :alt="participant.participante_name+' '+participant.participante_last_name"
                    :title="participant.participante_name+' '+participant.participante_last_name">
            </div>
            <button class="user-bar__avatar-container user-bar__avatar-container--add" refs="buttonAdd" @click="show">
                <span class="user-bar__plus">
                    <slot name="plus"></slot>
                 </span>
            </button>


            <div class="participants-popup" ref="popup" v-if="addParticipant" @click.self="close">
                    <button class="modal__close-btn participants-popup__close" @click="close">
                        <span class="close">
                            <slot name="close"></slot>
                        </span>
                    </button>
                    <input 
                        class="form-field participants-popup__search" 
                        id="search" 
                        name="search" 
                        type="text" 
                        v-model="search"
                        ref="search" 
                        placeholder="Buscar">
                    <p class="subtitle">
                        DESARROLLO
                    </p>

                    <div class="participants-popup__team" >
                        <div class="participants-popup__user">
                            <span class="participants-popup__user-in">
                                <slot name="check"></slot>
                            </span>
                            <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="test" title="test">
                        </div>

                        <div class="participants-popup__user" @click="add()">
                            <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="test" title="test">
                        </div>

                        <div class="participants-popup__user">
                            <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="test" title="test">
                        </div>

                        <div class="participants-popup__user">
                            <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="test" title="test">
                        </div>

                        <div class="participants-popup__user">
                            <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="test" title="test">
                        </div>

                        <div class="participants-popup__user">
                            <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="test" title="test">
                        </div>

                        <div class="participants-popup__user">
                            <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="test" title="test">
                        </div>

                    </div>

                    <p class="subtitle">
                        INFRAESTRUCTURA
                    </p>

                    <div class="participants-popup__team">
                        <div class="participants-popup__user">
                            <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="test" title="test">
                        </div>

                        <div class="participants-popup__user">
                            <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="test" title="test">
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
    import { remove as removeDiacritics } from 'diacritics';


    export default {
        props: {
            participantsdata: Array,
            process: Number
        },
        data() {
            return {
                search: '',
                addParticipant : false,
                participants: this.participantsdata
            };
        },
        watch: {
            search: function() {
                const query = removeDiacritics(this.search).toLowerCase().trim();
                this.participants = this.participants.filter(el => {

                    el.participante_name = "jaime uriel";
                    return el.participante_name.includes(query); //searchable_name
                });
            }
        },
        methods: {
            show(e) {
                this.addParticipant = true;

                this.$root.$emit('addParticipant', this.addParticipant);

                this.$root.$emit('showOverlayTrans');

                const rect = this.getPlusCoordinates(e.currentTarget)

                Vue.nextTick(() => {

                    const el = document.querySelector('.participants-popup');

                    el.style.left      = this.$root.mq.matches ? rect.x + 'px' : '50%';
                    el.style.transform = this.$root.mq.matches ? 'translate(0)' : 'translate(-50%)';
                    el.style.top       = rect.top + rect.w + 20 + 'px';
                });
            },
            close() {
                this.search = '';
                this.addParticipant = false;
                this.$root.$emit('addParticipant', this.addParticipant);
                this.$root.$emit('closeOverlayTrans');
            },
            getPlusCoordinates(btn) {
                const rect  = btn.getBoundingClientRect();
                const modal = document.querySelector('.modal__card');

                return {
                    x: rect.left,
                    y: rect.top + (window.pageYOffset || document.documentElement.scrollTop),
                    top: btn.getBoundingClientRect().top - modal.getBoundingClientRect().top,
                    w: rect.width
                };
            },
            add() {
                var formData = new FormData();
                formData.append("participante", "21");
                formData.append("subservicio", this.process);

                window.axios
                    .post('agregar-participante/', formData)
                    .then(response => {

                        console.log(response);
                    })
                    .catch(error => {

                        console.log(error)
                    })
            }
        },
        mounted() {
            this.$root.$on('closeParticipants', this.close);
        }
    };
</script>

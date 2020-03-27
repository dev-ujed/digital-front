<template>
    <div>
        <div class="process-modal__participants">
            <div class="user-bar__avatar-container" v-for="participant in participants">
                <img
                    lass="user-bar__avatar"
                    :src="$root.path+'/static/img/default.png'"
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


                    <div v-for="(participants, key) in team" :key="key" >

                        <p class="subtitle">
                            {{ transform(key) }}
                        </p>

                        <div class="participants-popup__team">
                            <div class="participants-popup__user" 
                                :class="{'participants-popup__user--active' : inTeam(el.id)}"
                                @click="add(el.id)" 
                                v-for="el in participants" 
                                :key="el.id">

                                <span class="participants-popup__user-in" v-if="inTeam(el.id)">
                                    <slot name="check"></slot>
                                </span>

              <!--                   <small style="
                                    font-size: 8px;
                                    line-height: 1 !important;
                                ">{{ el.name+' '+el.last_name }}</small> -->
                                 <img 
                                    class="user-bar__avatar" 
                                    :src="$root.path+'/static/img/default.png'" 
                                    :alt="el.name+' '+el.last_name"
                                    :title="el.name+' '+el.last_name">
                            </div>
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
            process: Number,
            teamdata: Object
        },
        data() {
            return {
                search: '',
                addParticipant : false,
                participants: this.participantsdata,
                team: this.teamdata
            };
        },
        watch: {
            search: function() {

                if(this.search == '') {
                    this.team = this.teamdata;
                    return;
                }

                const query = removeDiacritics(this.search).toLowerCase().trim();
                const array = Object.values(this.team).flat();

                let filter = array.filter(el => {
                    return el.searchable_name.includes(query);
                });

                this.team = this.group(filter, 'area_slug');
            },
        },
        methods: {
            inTeam(id) {
                for (var i=0; i < this.participants.length; i++) {
                    if (this.participants[i].id == id) {
                        return true; 
                    } 
                }
            },
            group(xs, key) {
                return xs.reduce(function(rv, x) {
                    (rv[x[key]] = rv[x[key]] || []).push(x);
                    return rv;
                }, {});
            },
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
            add(id) {

                if(this.inTeam(id)) {
                    return;
                }

                var formData = new FormData();
                formData.append("participante", id);
                formData.append("subservicio", this.process);

                window.axios
                    .post('agregar-participante/', formData)
                    .then(response => {
                        this.participants.push(response.data.participante);
                        this.$root.$emit('binacle', response.data.bitacora);
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            transform(slug) {
                return (slug.replace(/[-]/g,' ')).toUpperCase();
            }
        },
        mounted() {
            this.$root.$on('closeParticipants', this.close);

            console.log(this.team);
        }
    };
</script>

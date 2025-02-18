<template>
    <div>
        <steps v-if="!successSteps"
            :step="step"
            :isRight="isRight">
            <template slot="doro">
                <slot name="doro"></slot>
            </template>
        </steps>

        <div ref="request_form">
            <transition name="fade" mode="out-in">
                <div v-if="successSteps" class="successRequest" key="1" ref="step_success">
                    <div class="text-center alert__request--success">
                        <span class="alert__figure">
                            <slot name="success"></slot>
                        </span>
                        <p class="text-center size-normal mb-8 mt-4">Tu solicitud ha sido creada</p>
                    </div>

                    <h4 class="text-center mb-6 color-gray-70">El folio de la solicitud es: <b>{{ requestfolio }}</b></h4>

                    <p>Cuando la solicitud sea concluida recibirás un correo de notificación.</p>

                    <p v-if="otherEmail== true" class="alert alert--info alert--has-icon mt-8 size-sm">
                        Detectamos que tu correo electrónico no es un correo institucional (terminación en @ujed.mx). Si lo deseas, puedes hacernos una nueva solicitud para tramitarlo.
                    </p>

                    <div class="text-center mt-12">
                        <button @click.prevent="newRequest()" class="btn btn--form" type="submit">
                            <span class="mr-1">Crear nueva solicitud</span>
                        </button>
                    </div>
                </div>
                <div v-else ref="step_request"  key="2" class="request__form" >
                    <div class="request-step" ref="user">
                        <userstep-form
                            :action="urluser"
                            :ureslist="ureslist"
                            @successuser="SuccessUser"
                            @requestid="GetID"
                            ref="userstep"
                            :area="area"
                        >
                            <template slot="continue">
                                <slot name="continue"></slot>
                            </template>
                        </userstep-form>
                    </div>
                    <div class="request-step invisible" ref="request">
                        <requeststep-form
                            :action="urlrequest"
                            @prevuser="PrevUser"
                            @requestsuccess="SuccessRequest"
                            @deleterequest="deleteRequest"
                            @requestfolio="GetFolio"
                            @requestemail="GetEmail"
                            :urldelete=urldelete
                            :requestid=requestid
                            ref="requeststep"
                        >
                            <template slot="return">
                                <slot name="return"></slot>
                            </template>

                            <template slot="paperclip">
                                <slot name="paperclip"></slot>
                            </template>

                            <template slot="x">
                                <slot name="x"></slot>
                            </template>

                        </requeststep-form>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>



<script>
    import Steps from './Steps.vue';
    import RequestUploadFile from './RequestUploadFile.vue';
    import scrollTo from '../../../helpers/scrollTo.js';
    import getScrollTop from '../../../helpers/getScrollTop.js';

    export default {
        components: { RequestUploadFile, Steps },
        props: {
            ureslist: {
                type: Array,
                required: true
            },
            urluser: {
                type: String,
                required: true
            },
            urlrequest: {
                type: String,
                required: true
            },
            urldelete: {
                type: String,
                required: true
            },
            area: {
                type: String,
                required: true
            },
        },
        data() {
            return {
                requestid: '',
                requestfolio: '',
                requestemail: '',
                successSteps : false,
                otherEmail : false,
                title: null,
                step: 0,
                isRight: true
            };
        },

        mounted() {
            this.title = document.getElementById('title-request');
        },

        methods:{
            SuccessUser(e) {
                const documentOffset = getScrollTop();
                const titleOffset = getScrollTop(this.title);
                let duration = 600;

                this.step = 1;
                this.isRight = true;

                if (documentOffset === titleOffset) {
                    this.moveRight();
                    return;
                }

                if (Math.abs(titleOffset - documentOffset) < 200) {
                    duration = 400;
                }

                scrollTo(this.title, 0, duration);

                setTimeout(() => {
                    this.moveRight();
                }, duration);
            },

            SuccessRequest() {

                this.$refs.request_form.classList.remove('slideleft');
                this.$refs.request_form.classList.remove('slideright');

                const documentOffset = getScrollTop();
                const titleOffset = getScrollTop(this.title);
                let duration = 600;

                this.step = 2;
                this.isRight = true;

                if (documentOffset === titleOffset) {
                    this.successSteps = true;
                    return;
                }

                if (Math.abs(titleOffset - documentOffset) < 200) {
                    duration = 400;
                }

                scrollTo(this.title, 0, duration);

                setTimeout(() => {
                    this.successSteps = true;
                }, duration);
            },

            PrevUser() {
                const documentOffset = getScrollTop();
                const titleOffset = getScrollTop(this.title);
                let duration = 600;

                this.step = 0;
                this.isRight = false;

                if (documentOffset === titleOffset) {
                    this.moveLeft();
                    return;
                }

                if (Math.abs(titleOffset - documentOffset) < 200) {
                    duration = 400;
                }

                scrollTo(this.title, 0, duration);

                setTimeout(() => {
                    this.moveLeft();
                }, duration);
            },

            GetID(e) {
                this.requestid = e;
            },

            GetFolio(e) {
                this.requestfolio = e;
            },

            GetEmail(e) {

                let email = e;
                let domain = email.replace(/.*@/, "");

                if (domain != "ujed.mx") {
                    this.otherEmail = true;
                }
            },

            reset() {
                this.requestid = '';
                this.otherEmail= false;
                this.requestfolio= '';
            },


            deleteRequest() {
                this.step = 0;
                this.isRight = false;
                this.$emit('deleterequest', true);
                this.reset();
                this.PrevUser();
            },

            newRequest() {
                const documentOffset = getScrollTop();
                const titleOffset = getScrollTop(this.title);
                let duration = 600;
                this.step = 0;
                this.isRight = true;

                if (documentOffset === titleOffset) {
                    this.reset();
                    this.successSteps = false;
                    return;
                }

                if (Math.abs(titleOffset - documentOffset) < 200) {
                    duration = 400;
                }

                scrollTo(this.title, 0, duration);

                setTimeout(() => {
                    this.reset();
                    this.successSteps = false;
                }, duration);
            },

            moveRight() {
                this.$refs.request_form.classList.remove('slideleft');
                this.$refs.request_form.classList.add('slideright');

                setTimeout(() => {
                    this.$refs.user.classList.add('invisible');
                }, 400);

                this.$refs.request.classList.remove('invisible');

                setTimeout(() => {
                    this.$refs.requeststep.$refs.description_field.$el.focus();
                }, 400);
            },

            moveLeft() {
                this.$refs.request_form.classList.remove('slideright');
                this.$refs.request_form.classList.add('slideleft');

                setTimeout(() => {
                    this.$refs.request.classList.add('invisible');
                }, 400);

                this.$refs.user.classList.remove('invisible');

                setTimeout(() => {
                    this.$refs.userstep.$refs.email_field.$el.focus();
                }, 400);
            },
        }
    };
</script>
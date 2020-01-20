<template>
    <div ref="request_form">
        <div v-if="successSteps == false" ref="step_request" class="request__form" >
            <div class="request-step" ref="user">
                <userstep-form
                    :action="urluser"
                    :ureslist="ureslist"
                    @successuser="SuccessUser"
                    @requestid="GetID"
                    ref="userstep"
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
                    @requestfolio="GetFolio"
                    @requestemail="GetEmail"
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
        <div v-else class="successRequest" ref="step_success">
            <div class="text-center alert__request--success">
                <span class="alert__figure">
                    <slot name="success"></slot>
                </span>
                <p class="text-center size-normal mb-8 mt-4">Tu solicitud ha sido creada</p>
            </div>

            <h4 class="text-center mb-6 color-gray-70">El folio de la solicitud es: <b>{{ requestfolio }}</b></h4>

            <p>Te hemos enviado un correo de confirmación con un enlace para que puedas revisar el estado y avance de tu solicitud en cualquier momento.</p>

            <p>Igualmente puedes consultar dicho avance ingresando el folio anterior en el apartado para <a href="#" class="request--link">consultar el estado</a> de esta misma página.</p>

            <p>Cuando la solicitud sea concluida recibirás un correo de notificación.</p>

            <p v-if="otherEmail== true" class="alert alert--info alert--has-icon mt-8 size-sm">
                Detectamos que tu correo electrónico no es un correo institucional (terminación en @ujed.mx). Si lo deseas, puedes hacernos una nueva solicitud para tramitarlo.
            </p>

            <div class="text-center mt-12">
                <button @click.native.prevent class="btn btn--form" type="submit">
                    <span class="mr-1">Crear nueva solicitud</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import RequestUploadFile from './RequestUploadFile.vue';

    export default {
        components: { RequestUploadFile },
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
        },
        data() {
            return {
                requestid: '',
                requestfolio: '',
                requestemail: '',
                successSteps : false,
                otherEmail : false,
            };
        },
        methods:{
            SuccessUser(e) {
                if (e) {

                    this.$refs.request_form.classList.remove('slideleft');
                    this.$refs.request_form.classList.add('slideright');

                    setTimeout(() => {
                        this.$refs.user.classList.add('invisible');
                    }, 1000);

                    this.$refs.request.classList.remove('invisible');

                    setTimeout(() => {
                        this.$refs.requeststep.$refs.description_field.$el.focus();
                    }, 1300);
                }
            },

            SuccessRequest(e) {
                if (e) {

                    this.successSteps = true;
                    this.$refs.request_form.classList.remove('slideleft');
                    this.$refs.request_form.classList.remove('slideright');

                    this.$refs.step_request.classList.add('fade-out');
                    this.$refs.step_success.classList.add('fade-in');


                }
            },

            PrevUser(e) {
                if (e) {

                    this.$refs.request_form.classList.remove('slideright');
                    this.$refs.request_form.classList.add('slideleft');

                    setTimeout(() => {
                        this.$refs.request.classList.add('invisible');
                    }, 1000);

                    this.$refs.user.classList.remove('invisible');

                    setTimeout(() => {
                        this.$refs.userstep.$refs.email_field.$el.focus();
                    }, 1300);
                }
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
        }
    };
</script>
<template>
    <div ref="request_form">
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
        <div
            class="request-step invisible"
            ref="request"
        >
            <requeststep-form
                :action="urlrequest"
                @prevuser="PrevUser"
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
    </form>
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
                requestid: ''
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
                    }, 1000);
                }

            },
            PrevUser(e) {
                if (e) {
                    this.$refs.request_form.classList.remove('slideright')
                    this.$refs.request_form.classList.add('slideleft')
                    setTimeout(() => {
                        this.$refs.request.classList.add('invisible');
                    }, 1000);
                    this.$refs.user.classList.remove('invisible');
                    setTimeout(() => {
                        this.$refs.userstep.$refs.email_field.$el.focus();
                    }, 1000);
                }
            },
            GetID(e) {
                this.requestid = e;
            },
        }
    };
</script>
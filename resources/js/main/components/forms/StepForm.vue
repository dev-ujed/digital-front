<template>
    <div ref="request_form">
        <div class="request-step">
            <userstep-form
                :action="urluser"
                :ureslist="ureslist"
                @successuser="SuccessUser"
            >
                <template slot="continue">
                    <slot name="continue"></slot>
                </template>
            </userstep-form>
        </div>
        <div class="request-step">
            <requeststep-form
                :action="urlrequest"
                @prevuser="PrevUser"
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
        methods:{
            SuccessUser(e) {
                if (e) {
                    this.$refs.request_form.classList.remove('slideleft')
                    this.$refs.request_form.classList.add('slideright')

                }

            },
            PrevUser(e) {
                if (e) {
                    this.$refs.request_form.classList.remove('slideright')
                    this.$refs.request_form.classList.add('slideleft')

                }

            },
        }
    };
</script>
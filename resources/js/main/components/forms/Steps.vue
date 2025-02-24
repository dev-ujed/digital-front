<template>
    <div class="m-auto d-flex justify-center">
        <span class="request__step"
            :class="{
                    'request__step--active': step === 0 && isRight,
                    'request__step--success': step === 1 && isRight,
                    'request__step--success-reverse': step === 0 && !isRight,
            }">
            <span class="m-auto"
                :class="step === 1 ? 'content-check': 'content-1'"
            >
                <slot name="doro"></slot>
            </span>
            <small>Datos de contacto</small>
        </span>
            
        <span class="request__progress">
            <span class="progress__success"
            ref="progressbar"></span>
        </span>
            
         <span class="request__step" 
            :class="{
                'request__step--active': step === 1 && isRight,
                'request__step--success': step === 2 && isRight
            }">
            <span class="m-auto"
                :class="step === 2 ? 'content-check': 'content-2'">
                <slot name="doro"></slot>
            </span>
            <small>Ticket</small>
        </span>
    </div> 
</template>

<script>

    export default {
        props: {
            step: {
                type: Number,
                required: true
            },
            isRight: {
                type: Boolean,
                required: true
            },
        },

        watch: {
            step: function(val) {
                if (this.step === 1 && this.isRight) {
                    this.$refs.progressbar.classList.remove('request__progress--success-reverse');

                    Vue.nextTick(() => {
                        this.$refs.progressbar.classList.add('request__progress--success');
                    });

                    setTimeout(() => {
                        this.$refs.progressbar.classList.add('request__progress--full');
                    }, 500);
                }

                if (this.step === 0 && ! this.isRight) {
                    this.$refs.progressbar.classList.remove('request__progress--success');

                    Vue.nextTick(() => {
                        this.$refs.progressbar.classList.add('request__progress--success-reverse');
                    });

                    setTimeout(() => {
                        this.$refs.progressbar.classList.remove('request__progress--full');
                    }, 500);
                }
            }
        }
    }
</script>

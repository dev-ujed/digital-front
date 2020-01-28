<template>
    <div class="m-auto d-flex justify-center">
            <span class="request__step"
                :class="{
                        'request__step--active': step === 0 && isRight,
                        'request__step--success': step === 1 && isRight,
                        'request__step--success__reverse': step === 0 && !isRight,
                }">
                <span class="m-auto"
                    :class="step === 1 ? 'content-check': 'content-1'"
                >
                    <slot name="doro"></slot>
                </span>
                <small>Datos de contacto</small>
            </span>
            
            <span class="request__progress"></span>
            <span class="request__progress visually-hidden"
                :class="{
                    'request__progress--active': step === 1 && isRight,
                    'request__progress--active__reverse': step === 1 && !isRight
                }"></span>
                    
            <span class="request__step" 
                :class="{
                    'request__step--active': step === 1,
                    'request__step--success': step === 2
                }">
                <span class="m-auto"
                    :class="step === 2 ? 'content-check': 'content-2'">
                    <slot name="doro"></slot>
                </span>
                <small>Solicitud</small>
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
        }, mounted() {
            console.log(this.step);
            console.log(this.isRight);
            
        }
    }
</script>

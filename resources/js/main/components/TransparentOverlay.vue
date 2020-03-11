<template>
    <div class="overlay-transparent"
        :class="{'overlay-transparent--active' : isActive}"
        @click="close"
    ></div>
</template>

<script>
    export default {
        data() {
            return {
                isActive: false,
                closeOnSwipe: false
            };
        },

        mounted() {
            this.$root.$on('closeOverlayTrans', this.close);
            this.$root.$on('showOverlayTrans', this.show);
            this.$root.$on('toggleOverlayTrans', this.toggle);
        },

        methods: {
            /**
             * Hide overlay and emit the event.
             */
            close() {
                if (! this.isActive) {
                    return;
                }

                this.isActive = false;
                this.closeOnSwipe = false;

                this.$root.$emit('closeParticipants');

            },

            /**
             * Activate overlay and emit the event.
             */
            show(settings) {

                if (this.isActive) {
                    return;
                }

                for (let property in settings) {
                    this[property] = settings[property];
                }

                this.isActive = true;

                this.$root.$emit('overlayShown');
            },

            /**
             * Show or hide overlay.
             *
             * @param {boolean} show
             */
            toggle(show = true) {
                if (show) {
                    this.show();
                } else {
                    this.close();
                }
            },

        }
    };
</script>

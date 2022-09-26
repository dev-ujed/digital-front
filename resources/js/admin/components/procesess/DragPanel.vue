<script>
    export default {
        data() {
            return {
                originalScroll: 0
            };
        },
        methods: {

            handlePanStart(e) {
                this.originalScroll = this.$el.scrollLeft;
            },
            handlePan(e) {
                this.$el.classList.remove('drag-container--grab');
                this.$el.classList.add('drag-container--grabbing');
                this.$el.scrollLeft = this.originalScroll - e.deltaX;
            },
            handlePanEnd(e) {
                this.$el.classList.remove('drag-container--grabbing');
                this.$el.classList.add('drag-container--grab');
            }
        },
        mounted() {

            const h =  new window.Hammer(this.$el);

            h.on('panstart', this.handlePanStart);
            h.on('pan', this.handlePan);
            h.on('panend', this.handlePanEnd);            
        }
    };
</script>

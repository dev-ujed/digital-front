import '../boot.js';
import BaseForm from './components/forms/base/BaseForm.vue';
import StepForm from './components/forms/StepForm.vue';
import GalleryCard from './components/GalleryCard.vue';
import GalleryLink from './components/GalleryLink.vue';
import TruncatedText from './components/TruncatedText.vue';


(function() {
    /* Base components
    ------------------------------------------------------------------------- */
    Vue.component('base-form', BaseForm);
    Vue.component('step-form', StepForm);



    /* App components
    ------------------------------------------------------------------------- */
    Vue.component('gallery-card', GalleryCard);
    Vue.component('gallery-link', GalleryLink);
    Vue.component('truncated-text', TruncatedText);


    /**
     * Vue instance
     */
    const app = new Vue({
        el: '#app',
        data: {
            isLoading: true,
            path: document.body.getAttribute('data-root') || '',
            menuIsVisible: false,
            mq: false,
            resourceCount: 0,
            model: {}
        },
        mounted() {
            this.mq = window.matchMedia('(min-width:1100px)');
            this.menuIsVisible = this.mq.matches;

            this.mq.addListener(e => this.menuIsVisible = e.matches);

            Vue.nextTick(() => this.isLoading = false);
        },

        methods: {
            /**
             * Show or hide dashboard menu.
             */
            toggleMenu() {
                this.menuIsVisible = ! this.menuIsVisible;
            }
        }
    });



})();

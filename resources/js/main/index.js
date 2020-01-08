import '../boot.js';
import BaseForm from './components/forms/base/BaseForm.vue';
import StepForm from './components/forms/StepForm.vue';
import UserStepForm from './components/forms/UserStepForm.vue';
import RequestStepForm from './components/forms/RequestStepForm.vue';
import GalleryCard from './components/GalleryCard.vue';
import GalleryLink from './components/GalleryLink.vue';
import TruncatedText from './components/TruncatedText.vue';
import RequestUploadFile from './components/forms/RequestUploadFile.vue';
import RequestFile from './components/forms/RequestFile.vue';
import Menu from './components/menu/Menu.vue';

(function() {
    /* Base components
    ------------------------------------------------------------------------- */
    Vue.component('base-form', BaseForm);
    Vue.component('step-form', StepForm);
    Vue.component('userstep-form', UserStepForm);
    Vue.component('requeststep-form', RequestStepForm);
    Vue.component('request-upload-file', RequestUploadFile);
    Vue.component('request-file', RequestFile);



    /* App components
    ------------------------------------------------------------------------- */
    Vue.component('gallery-card', GalleryCard);
    Vue.component('gallery-link', GalleryLink);
    Vue.component('truncated-text', TruncatedText);
    Vue.component('site-menu', Menu);


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
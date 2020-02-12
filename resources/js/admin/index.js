import DashboardMenu from './components/DashboardMenu.vue';
import UserBar from '../main/components/UserBar.vue';
import Tabs from './components/tabs/Tabs.vue';


(function() {
    /* Base components
    ---------------------------------------------------------------------- */
    Vue.component('base-form', require('../main/components/forms/base/BaseForm.vue'));
    Vue.component('field-error', require('../main/components/forms/base/FieldErrors.vue'));
    Vue.component('form-button', require('../main/components/forms/base/FormButton.vue'));
    Vue.component('select-field', require('../main/components/forms/base/SelectField.vue'));
    Vue.component('text-field', require('../main/components/forms/base/TextField.vue'));
    Vue.component('text-area', require('../main/components/forms/base/TextArea.vue'));
    Vue.component('tabs-component', Tabs);
    /*
    |------------------------------------------------------------------------
    | Vm
    |------------------------------------------------------------------------
    */

    const vm = new Vue({
        el: '#dashboard',

        components: { DashboardMenu, UserBar },

        data: {
            isLoading: true,
            path: document.body.getAttribute('data-root'),
            menuIsVisible: false,
            mq: false
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
            },
        }
    });
})();

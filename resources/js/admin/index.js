import DashboardMenu from './components/DashboardMenu.vue';
import UserBar from '../main/components/UserBar.vue';
import Tabs from './components/tabs/Tabs.vue';
import SiteOverlay from '../main/components/SiteOverlay.vue';
import Modal from '../main/components/Modal.vue';
import CardsServices from './components/Services/Cards.vue';
import ServiceModal from './components/Services/ServiceModal.vue';
import TitleRequest from './components/TitleRequest.vue';
import Cards from './components/procesess/Cards.vue';
import ProcessModal from './components/procesess/ProcessModal.vue';
import Participants from './components/procesess/Participants.vue';
import Binnacle from './components/procesess/Binnacle.vue';
import Comments from './components/procesess/Comments.vue';
import TransparentOverlay from '../main/components/TransparentOverlay.vue';
import DragPanel from './components/procesess/DragPanel.vue';
import EmailModal from './components/procesess/EmailModal.vue';
import BitacoraForm from './components/procesess/BitacoraForm.vue';

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

    /* App components
    ------------------------------------------------------------------------- */
    Vue.component('site-overlay', SiteOverlay);
    Vue.component('transparent-overlay', TransparentOverlay);
    Vue.component('modal', Modal);
    Vue.component('cards-services', CardsServices);
    Vue.component('service-modal', ServiceModal);
    Vue.component('title-request', TitleRequest);
    Vue.component('cards-process', Cards);
    Vue.component('drag-panel', DragPanel);
    Vue.component('email-modal', EmailModal);
    Vue.component('process-modal', ProcessModal);
    Vue.component('participants', Participants);
    Vue.component('binnacle', Binnacle);
    Vue.component('comments', Comments);
    Vue.component('bitacora-form', BitacoraForm);
    

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
            }
        }

        
    });
})();

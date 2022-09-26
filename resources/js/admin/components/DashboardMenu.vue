<template>
    <transition
        :enter-active-class="isLoading && !mq ? '' : 'dashboard-menu--enter'"
        :leave-active-class="isLoading  && !mq ? '' : 'dashboard-menu--leave'"
    >
        <nav id="dashboard-menu"
            class="dashboard-menu"
            :class="{ 'dashboard-menu--visible' : menuIsVisible && !mq }"
            v-show="menuIsVisible && !mq"
        >
            <div class="dashboard-menu__overlay" @click="$emit('toggle-menu')"></div>

            <ul class="dashboard-menu__col-sections">
                <li class="dashboard-menu__section"
                    :class="{'dashboard-menu__section--active' : activeSection === section.slug }"
                    v-for="section in menu"
                    @click="openSubmenus(section.slug)"
                >
                    <img class="dashboard-menu__tile" :src="$root.path + '/static/img/icons/dashboard/tiles/'+section.title" alt="">
                    {{ section.name }}
                </li>
            </ul>

            <div class="dashboard-menu__col-submenus"
                ref="dashboardSubmenus">

                <dashboard-column v-for="section in menu" :key="section.id"
                    :section="section"
                    v-show="activeSection === section.slug"
                ></dashboard-column>

            </div>
        </nav>
    </transition>
</template>

<script>
    import DashboardColumn from './DashboardColumn.vue';

    export default {
        components: { DashboardColumn },

        props: {
            isLoading     : Boolean,
            menuIsVisible : Boolean,
            menu          : null
        },

        data() {
            return {
                App: window.App,
                activeSection: '',
                mq: false
            };
        },

        created() {
            this.setActiveSection();
        },


        methods: {
            /**
             * Set active section when module loads.
             */
            setActiveSection() {

                if (this.menu.isArray) {
                    return this.activeSection = this.menu.filter(section => section.active)[0].slug;
                }

                for (let key in this.menu) {
                    if (this.menu[key].active) {
                        this.activeSection = this.menu[key].slug;
                    }
                }
            },
            openSubmenus(el) {
                this.activeSection = el;

                if(!this.menuIsVisible) {

                    this.$parent.menuIsVisible = true;

                    this.$refs.dashboardSubmenus.classList.add('dashboard-menu__col-submenus--visible');
                }
            }
        },
        watch: {
            menuIsVisible: function() {

                this.mq = this.$parent.mq.matches;

                if (this.menuIsVisible ) {

                    this.$refs.dashboardSubmenus.classList.add('dashboard-menu__col-submenus--show');

                } else if (!this.menuIsVisible ){
                    this.$refs.dashboardSubmenus.classList.remove('dashboard-menu__col-submenus--show');
                    this.$refs.dashboardSubmenus.classList.remove('dashboard-menu__col-submenus--visible');
                }
            },
            mq: function() {
                return this.$parent.mq.matches;
            }
        }
    };
</script>
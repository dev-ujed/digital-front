<template>
    <nav id="main-menu" class="main-menu" role="navigation">
        <div class="container main-menu__container">
           <a class="main-logo__dtd" :href="$root.path" title="Inicio"
                :class="{
                    'main-logo__dtd--open': menuIsOpen,
                    'main-logo__dtd--closed': ! menuIsOpen && buttonClicked,
                }">
                <img :src="$root.path + '/static/img/header/logo-dtd.png'" alt="Dirección de transformación Digital">
            </a>

            <div class="main-logo__ujed float-right">
                <img :src="this.$root.path + '/static/img/header/logo-ujed.png'" alt="Universidad Juárez del Estado de Durango">
            </div>

             <button id="main-menu-btn" class="main-menu__btn" type="button"
                aria-expanded="false"
                aria-controls="main-menu"
                @click="toggleMenu"
            >
                <span class="main-menu__btn-icon" aria-hidden="true"
                    :class="{ 'main-menu__btn-icon--active': menuIsOpen }"
                >
                    <span></span>
                </span>

                <span v-if="menuIsOpen" class="visually-hidden">Ocultar menú</span>
                <span v-else class="visually-hidden">Mostrar menú</span>
            </button>
        </div>

        <div class="main-menu__background"
             :class="{
                    'main-menu__background--open': menuIsOpen,
                    'main-menu__background--closed': ! menuIsOpen && buttonClicked
                }">
        </div>

        <div class="main-menu__list--container"
            :class="{
                    'main-menu__list--container--open': menuIsOpen,
                }">

            <div class="container main-menu__container--sm">
                <a class="main-logo__dtd" :href="$root.path" title="Inicio"
                    :class="{
                        'main-logo__dtd--open': menuIsOpen,
                        'main-logo__dtd--closed': ! menuIsOpen && buttonClicked,
                    }">
                    <img :src="$root.path + '/static/img/header/logo-dtd.png'" alt="Dirección de transformación Digital">
                </a>
            </div>

            <ul class="list-bare main-menu__list"
                :class="{
                    'main-menu__list--open': menuIsOpen,
                    'main-menu__list--closed ': ! menuIsOpen && buttonClicked
                }"
                :aria-hidden="! menuIsVisible"
                aria-labelledby="main-menu-btn"
                ref="list"
            >

                <template v-for="(link, title) in links">
                    <li v-if="typeof link === 'string'" :key="title" class="main-menu__li"
                        :class="{
                            'main-menu__li--open': menuIsOpen,
                            'main-menu__li--closed': ! menuIsOpen && buttonClicked
                        }"

                    >
                        <template v-for="{url, newTab, external} in [parseLink(link)]">
                            <a class="js-item main-menu__link" :href="url"
                                :key="url"
                                :target="newTab ? '_blank' : false"
                                :rel="newTab && external ? 'noopener noreferrer' : false"
                                @keydown.left.right.up.down.prevent="arrowNavigation"
                            >
                                {{ title }}
                            </a>
                        </template>
                    </li>

                    <site-submenu v-else
                        :key="title"
                        :breakpoint-matches="breakpointMatches"
                        :links="link"
                    >
                        {{ title }}
                    </site-submenu>
                </template>

                <li class="main-menu__li"
                    :class="{
                        'main-menu__li--open': menuIsOpen,
                        'main-menu__li--closed': ! menuIsOpen && buttonClicked
                    }">
                    <a class="js-item main-menu__link" :href="this.$root.path + 'ingresar'"
                        @keydown.left.right.up.down.prevent="arrowNavigation"
                    >
                        <span class="main-menu__login-icon" aria-hidden="true"></span>
                        Administración
                    </a>
                </li>
            </ul>

            <p class="main-menu__footer"
                :class="{
                        'main-menu__footer--open': menuIsOpen
                    }">
                Dirección de Transformación Digital <br> Universidad Juárez del Estado de Durango
            </p>

        </div>
    </nav>
</template>

<script>
    import SiteSubmenu from './Submenu.vue';

    export default {
        components: { SiteSubmenu },

        props: {
            breakpoint: {
                type: Number,
                required: true
            },
            links: {
                type: Object,
                required: true
            }
        },

        data() {
            return {
                breakpointMatches: false,
                buttonClicked: false,
                focusTrap: null,
                menuIsVisible: false,
                menuIsOpen: false,
                menuItems: [],
                css: {
                    overflowHidden: 'overflow-hidden'
                }
            };
        },

        watch: {
            menuIsOpen: function(value) {
                if (value) {
                    // Wait for the element to be visible (nextTick is not enough)
                    setTimeout(this.focusTrap.activate, 50);
                }
                else {
                    this.focusTrap.deactivate();
                }
            }
        },

        mounted() {

            this.menuItems = this.$el.querySelectorAll('.js-item');

            this.setMatchMedia();

            this.focusTrap = this.setFocusTrap();

            this.$root.$on('overlayClosed', this.closeMenu);
        },

        methods: {
            /**
             * Return the previous or next item sibling (link or submenu title).
             *
             * @param  {HTMLElement} currentItem - Currently focused item.
             * @param  {string} target - Accepted values: "previous" and "next".
             * @return {HTMLElement|undefined}
             */
            findSibling(currentItem, target = 'next') {
                const index = Array.prototype.indexOf.call(this.menuItems, currentItem);

                return this.menuItems[target === 'previous' ? index - 1 : index + 1];
            },

            /**
             * Return if given URL contains a reference to open in a new tab
             * and if it points to an external site.
             *
             * @param  {string}  url
             * @return {Object}
             * @return {string}  Object.url - The clean URL (without "_blank" reference).
             * @return {boolean} Object.newTab - If the link should open in a new tab.
             * @return {boolean} Object.external - If URL belongs to a diferent base domain.
             */
            parseLink(url) {
                const cleanUrl = url.replace(/^_?blank:/, '');

                return {
                    url: cleanUrl,
                    newTab: cleanUrl !== url,
                    external: cleanUrl.slice(0, this.$root.path.length) !== this.$root.path
                };
            },

            /**
             * Initialize media query.
             */
            setMatchMedia() {
                const mq = window.matchMedia(`screen and (min-width:${this.breakpoint}px)`);

                console.log(this.breakpoint);

                mq.addListener(this.reset);

                this.reset(mq);
            },


            /*
            |------------------------------------------------------------------------
            | Visibility
            |------------------------------------------------------------------------
            */

            /**
             * Immediately show or hide menu list when media match is triggered.
             *
             * @param {Object} e
             */
            reset(e) {
                if (this.menuIsOpen) {
                    document.body.classList.remove(this.css.overflowHidden);
                    this.$root.$emit('closeOverlay');
                }

                this.menuIsOpen = false;
                this.menuIsVisible = e.matches;

                this.breakpointMatches = e.matches;
                this.buttonClicked = false;

                this.$emit('resetSubmenus', e.matches);
            },

            /**
             * Close site menu on responsive view.
             */
            closeMenu() {
                this.menuIsOpen = false;
                this.menuIsVisible = false;

                document.body.classList.remove(this.css.overflowHidden);

                document.removeEventListener('keyup', this.onEscape);

                this.$root.$emit('closeOverlay');

                const app = document.getElementById('app');
                app.classList.remove('overflow-hidden');
            },

            /*
             * Diplay site menu on responsive view.
             */
            openMenu() {
                this.menuIsOpen = true;
                this.menuIsVisible = true;

                document.body.classList.add(this.css.overflowHidden);

                document.addEventListener('keyup', this.onEscape);

                this.$root.$emit('showOverlay');

                const app = document.getElementById('app');
                app.classList.add('overflow-hidden');
            },

            /**
             * Toggle menu visibility.
             */
            toggleMenu() {
                this.buttonClicked = true;

                if (this.menuIsOpen) {
                    this.closeMenu();
                }
                else {
                    this.openMenu();
                }
            },


            /*
            |------------------------------------------------------------------------
            | Focus
            |------------------------------------------------------------------------
            */

            /*
             * Return a new instance of FocusTrap on the menu list.
             */
            setFocusTrap() {
                return window.FocusTrap(this.$refs.list, {
                    escapeDeactivates: false,
                    clickOutsideDeactivates: true
                });
            },

            /**
             * Focus the previous focusable element in the menu, being a menu link,
             * submenu link, or title. If the current focus is on a menu item,
             * and it's preceded by a submenu, the focus will go to the
             * last link of that submenu.
             *
             * @param {HTMLElement} focusedItem - Currently focused menu item
             */
            focusPreviousElement(focusedItem) {
                const sibling = this.findSibling(focusedItem, 'previous');

                if (! sibling) {
                    return;
                }

                if (sibling.classList.contains(this.css.submenuTitle)) {
                    return this.$emit('focusLastSubmenuLink', sibling);
                }

                sibling.focus();
            },

            /**
             * Change focus to the previous or next menu item.
             *
             * @param {HTML Element} focusedElement - Currently focused menu item
             * @param {string} direction - Accepted values: "previous" and "next"
             */
            focusSiblingItem(focusedElement, direction) {
                const sibling = this.findSibling(focusedElement, direction);

                if (sibling) {
                    sibling.focus();
                }
            },


            /*
            |------------------------------------------------------------------------
            | Keyboard navigation
            |------------------------------------------------------------------------
            */

            /**
             * Navigate through menu items with keyboard arrows.
             * The "up" key moves the focus to the previous focusable element inside
             * menu list (including submenu links).
             * "Left" key changes focus to the previous menu item while "right" and "down"
             * keys change it to the next menu item.
             *
             * @param {Object} e
             */
            arrowNavigation(e) {
                if (e.key === 'ArrowUp') {
                    return this.focusPreviousElement(e.target);
                }

                this.focusSiblingItem(e.target, e.key === 'ArrowLeft' ? 'previous' : 'next');
            },

            /**
             * Close menu when "Esc" key is pressed.
             */
            onEscape(e) {
                if (e.key === 'Escape') {
                    this.closeMenu();
                }
            }
        }
    };
</script>

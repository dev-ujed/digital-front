<template>
    <a @click="load">
        <span class="workshop__gallery-icon"></span><slot></slot>
    </a>
</template>

<script>
    import GalleryMixin from '../mixins/Gallerymixin.js';

    export default {
        mixins: [GalleryMixin],

        props: {
            images: {
                type: Array,
                required: false,
                default: () => []
            },
            slug: {
                type: String,
                required: true
            }
        },

        data() {
            return {
                loadedImages: []
            };
        },

        computed: {
            /**
             * Create the images object for Photoswipe.
             *
             * @return {Object}
             */
            items: function() {
                let items = [];

                for (let i in this.loadedImages) {
                    items.push({
                        src: this.galleryPath + this.loadedImages[i].src,
                        h: this.loadedImages[i].height,
                        w: this.loadedImages[i].width
                    });
                }

                return items;
            }
        },

        methods: {
            /**
             * Fetch the gallery images.
             */
            load() {
                axios.get(this.$root.path + '/galerias/' + this.slug)
                    .then(response => {
                        this.loadedImages = response.data;
                        this.build();
                    })
                    .catch(error => {
                        console.error(error);
                    });
            },


            /**
             * Build the gallery when the thumb is clicked.
             */
            build() {
                const gallery = new window.PhotoSwipe(
                    this.dom.galleryContainer,
                    window.PhotoSwipeUI_Default,
                    this.items,
                    this.config
                );

                gallery.init();
            }
        }
    };
</script>

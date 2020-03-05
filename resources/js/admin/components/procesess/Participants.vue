<template>
    <div class="process-modal__participants">
        <div class="user-bar__avatar-container">
            <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="test" title="test">
        </div>

        <div class="user-bar__avatar-container">
            <img class="user-bar__avatar" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="test" title="test">
        </div>

        <div class="user-bar__avatar-container user-bar__avatar-container--add">
            <span class="user-bar__plus">
                <slot name="plus"></slot>
            </span>
        </div>
    </div>
</template>

<script>

    export default {

        mounted() {
            console.log('participants');
        },
    };
</script>

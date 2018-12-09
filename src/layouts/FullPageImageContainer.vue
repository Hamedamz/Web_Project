<template>
    <div>
        <div class="full-image" :style="background"></div>
        <sui-container class="full-container">
            <slot name="header"></slot>
            <div class="main-content">
                <slot name="main"></slot>
            </div>
        </sui-container>
    </div>
</template>

<script>
    export default {
        name: "FullPageImageContainer",
        props: ['image'],
        computed: {
            background: function () {
                return "background: linear-gradient(#fff, #fff, #000), url(" + this.image + ") fixed"
            },
        }
    }
</script>

<style scoped>
    .full-image {
        width: 100vw;
        height: 100vh;
        background-size: cover !important;
        background-position: center center !important;
        background-blend-mode: multiply;
    }
    .full-container {
        margin-top: -30vh;
    }
    .main-content {
        border-radius: 15px;
        background: black;
        padding: 1rem;
    }
</style>
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
        props: ['image', 'small', 'color'],
        computed: {
            background: function () {
                let image = this.image ? ", url(" + this.image + ") fixed;" : ";";
                let colorbg = this.color ? this.color: "#fff";
                let back = "background: linear-gradient(" + colorbg + ", #000)" + image;
                let height = "height: " + (this.small? "50": "100") + "vh;";
                return height + back;
            },
        }
    }
</script>

<style scoped>
    .full-image {
        width: 100vw;
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
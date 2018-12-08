<template>
    <div id="app">
        <slider-nav></slider-nav>
        <router-view></router-view>
        <main-footer></main-footer>
    </div>
</template>

<script>
    import SliderNav from "@/components/SliderNav";
    import MainFooter from "@/components/MainFooter";
    export default {
        name: 'app',
        components: {MainFooter, SliderNav},
    }
</script>

<style>
    #app {
        background: black;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>

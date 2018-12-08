<template>
    <div id="app">
        <slider-nav></slider-nav>
        <router-view></router-view>
    </div>
</template>

<script>
    import SliderNav from "@/components/SliderNav";
    export default {
        name: 'app',
        components: {SliderNav},
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

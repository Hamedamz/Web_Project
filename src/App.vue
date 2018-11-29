<template>
  <div id="app">
    <live-bar></live-bar>
    <nav-bar></nav-bar>
    <latest-news></latest-news>
    <latest-games></latest-games>
  </div>
</template>

<script>
import LiveBar from "@/components/LiveBar";
import NavBar from "@/components/NavBar";
import LatestNews from "@/components/LatestNews";
import LatestGames from "@/components/LatestGames";

export default {
  name: 'app',
  components: {
      LatestGames,
      LatestNews,
      NavBar,
      LiveBar,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

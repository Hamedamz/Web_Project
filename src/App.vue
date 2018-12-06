<template>
  <div id="app">
    <full-header :post="mainNews" :match="liveMatch"></full-header>
    <latest-news></latest-news>
    <latest-games></latest-games>
    <main-footer></main-footer>
  </div>
</template>

<script>

import LatestNews from "@/components/LatestNews";
import LatestGames from "@/components/LatestGames";
import FullHeader from "@/components/FullHeader";
import MainFooter from "@/components/MainFooter";

export default {
  name: 'app',
  components: {
      FullHeader,
      LatestGames,
      LatestNews,
      MainFooter,
  },
  data() {
      return {
          mainNews: {
              title: 'Belgium retain pole as Sweden, Serbia soar',
              image: 'static/i2.jpg',
              category: 'premiere league'
          },
          liveMatch: {
              homeName: 'LIV',
              homeBadge: 'static/liv.png',
              awayName: 'MAN',
              awayBadge: 'static/man.png',
              result: '3 : 1',
              time: "68'",
          },
      }
  }
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

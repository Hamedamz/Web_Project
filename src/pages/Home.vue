<template>
    <div id="Home">
        <full-header :post="mainNews" :match="liveMatch"></full-header>
        <latest-news :with-header="true"></latest-news>
        <latest-games></latest-games>
    </div>
</template>

<script>
    import FullHeader from "@/components/FullHeader";
    import LatestNews from "@/components/LatestNews";
    import LatestGames from "@/components/LatestGames";
    import MainFooter from "@/components/MainFooter";
    import SliderNav from "@/components/SliderNav";
    import NavBar from "@/components/NavBar";

    export default {
        name: "Home",
        components: {NavBar, SliderNav, MainFooter, LatestGames, LatestNews, FullHeader},
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

<style scoped>

</style>
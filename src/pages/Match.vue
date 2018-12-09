<template>
    <full-page-image-container :image="match.image">
        <template slot="header">
            <match-time-line :time-line="timeLine" :match="match"></match-time-line>
        </template>
        <template slot="main">
            <match-card :match="match"></match-card>
            <div class="match-menu">
                <sui-button-group :widths="5">
                    <sui-button
                            v-for="tab in tabs"
                            :key="tab"
                            @click="currentTab = tab"
                            color="red"
                            :basic="currentTab !== tab"
                            :content="tab"
                    ></sui-button>
                </sui-button-group>
                <component
                        v-bind:is="currentTabComponent"
                        class="tab"
                ></component>
            </div>
        </template>
    </full-page-image-container>
</template>

<script>
    import NavBar from "@/components/NavBar";
    import MatchCard from "@/components/MatchCard";
    import MatchReport from "@/components/MatchReport";
    import MatchNews from "@/components/MatchNews";
    import MatchStatistics from "@/components/MatchStatistics";
    import MatchLinesup from "@/components/MatchLinesup";
    import MatchMedia from "@/components/MatchMedia";
    import MatchTimeLine from "@/components/MatchTimeLine";
    import FullPageImageContainer from "@/layouts/FullPageImageContainer";

    export default {
        name: "Match",
        components: {
            FullPageImageContainer,
            MatchTimeLine,
            MatchMedia,
            MatchLinesup,
            MatchStatistics,
            MatchNews,
            MatchReport,
            MatchCard,
            NavBar
        },
        data() {
            return {
                currentTab: 'Report',
                tabs: ['Report', 'Statistics', 'LinesUp', 'News', 'Media'],
                match: {
                    sport: 'football',
                    image: 'static/i5.jpg',
                    homeName: 'LIV',
                    homeBadge: 'static/liv.png',
                    awayName: 'MAN',
                    awayBadge: 'static/man.png',
                    result: '4 : 1',
                    time: "FT",
                },
                timeLine: [
                    {id: 1, side: 'home', time: 22, event: "goal", description: "Andreas Pereira Goal - Free-kick"},
                    {id: 2, side: 'away', time: 47, event: "goal", description: "Andreas Pereira Goal - Free-kick"},
                ]
            }
        },
        computed: {
            currentTabComponent: function () {
                return 'match-' + this.currentTab.toLowerCase()
            }
        },
    }
</script>

<style scoped>

</style>
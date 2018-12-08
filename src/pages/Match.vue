<template>
    <div id="match">
        <div class="match-image" :style="background"></div>
        <sui-container class="match-container">
            <match-time-line :time-line="timeLine" :match="match"></match-time-line>
            <div class="match-tabbed-view">
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
            </div>
        </sui-container>
    </div>
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

    export default {
        name: "Match",
        components: {
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
            background: function () {
                return "background: linear-gradient(#fff, #fff, #000), url(" + this.match.image + ") fixed"
            },
            currentTabComponent: function () {
                return 'match-' + this.currentTab.toLowerCase()
            }
        },
    }
</script>

<style scoped>
    .match-image {
        width: 100vw;
        height: 100vh;
        background-size: cover !important;
        background-position: center center !important;
        background-blend-mode: multiply;
    }
    .match-container {
        margin-top: -30vh;
    }
    .match-tabbed-view {
        border-radius: 15px;
        background: black;
        padding: 1rem;
    }
</style>
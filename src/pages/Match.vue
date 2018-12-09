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
                        v-bind="currentTabProperties"
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
                posts: [
                    {
                        id: 1,
                        title: 'A home for the pride key to roaring Lions',
                        image: 'http://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F1128%2Fr470200_1296x729_16%2D9.png&w=544&h=306&scale=crop&cquality=80&location=origin',
                        type: 'small',
                        category: 'premiere league',
                        sport: 'football',
                    },
                    {
                        id: 2,
                        title: 'Predicting Kevin Durant\'s next team and NBA legacy',
                        image: 'http://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F1129%2Fr470235_2_608x342_16%2D9.jpg&w=544&h=306&scale=crop&cquality=80&location=origin',
                        type: 'small',
                        category: 'NBA',
                        sport: 'basketball',
                    },
                    {
                        id: 3,
                        title: 'Wright Thompson: Italian football gets in your blood',
                        image: 'http://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0929%2Fr438829_1296x729_16%2D9.jpg&w=544&h=306&scale=crop&cquality=80&location=origin',
                        type: 'small',
                        category: 'premiere league',
                        sport: 'football',
                    },
                    {
                        id: 4,
                        title: 'By the numbers: Ronaldo equals 51-year-old record',
                        image: 'http://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0816%2Fr415461_2_608x342_16%2D9.jpg&w=544&h=306&scale=crop&cquality=80&location=origin',
                        type: 'small',
                        category: 'serie A',
                        sport: 'football',
                    },
                    {
                        id: 5,
                        title: 'Why Liverpool should sell Salah',
                        image: 'http://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0816%2Fr415458_608x342_16%2D9.jpg&w=544&h=306&scale=crop&cquality=80&location=origin',
                        type: 'small',
                        category: 'premiere league',
                        sport: 'football',
                    },
                    {
                        id: 6,
                        title: 'Who\'s more important to Man United: Pogba or Mourinho?',
                        image: 'http://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0816%2Fr415457_608x342_16%2D9.jpg&w=544&h=306&scale=crop&cquality=80&location=origin',
                        type: 'big',
                        category: 'premiere league',
                        sport: 'football',
                    },
                    {
                        id: 7,
                        title: 'Kylian Mbappe and the curse of winning a World Cup',
                        image: 'http://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0925%2Fr436811_1296x729_16%2D9.jpg&w=544&h=306&scale=crop&cquality=80&location=origin',
                        type: 'small',
                        category: 'World Cup',
                        sport: 'football',
                    },
                ],
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
            },
            currentTabProperties: function () {
                if (this.currentTabComponent === 'match-news')
                    return {posts: this.posts};
                return {};
            }
        },
    }
</script>

<style scoped>

</style>
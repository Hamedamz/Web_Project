<template>
    <full-page-image-container small="true" color="#3f1052">
        <template slot="header">
            <sui-item-group>
                <sui-item>
                    <sui-item-image size="tiny" class="circular" :src="badge"/>
                    <sui-item-content vertical-align="middle">
                        <sui-item-header class="league-name">{{name}}</sui-item-header>
                    </sui-item-content>
                </sui-item>
            </sui-item-group>
        </template>
        <template slot="main">
            <div class="league-menu">
                <sui-button-group :widths="3" class="padded">
                    <sui-button
                            v-for="tab in tabs"
                            :key="tab.name"
                            @click="currentTab = tab"
                            color="red"
                            :basic="currentTab.name !== tab.name"
                            :content="tab.name"
                    ></sui-button>
                </sui-button-group>
                <keep-alive>
                    <component
                            v-bind:is="currentTabComponent"
                            v-bind="currentTabProperties"
                            class="tab"
                    ></component>
                </keep-alive>
            </div>
        </template>
    </full-page-image-container>
</template>

<script>
    import FullPageImageContainer from "@/layouts/FullPageImageContainer";
    import StandingsTable from "@/components/StandingsTable";
    import LatestNews from "@/components/LatestNews";
    import KnockOutTable from "@/components/KnockOutTable";
    import MatchTable from "@/components/MatchTable";

    export default {
        name: "League",
        components: {StandingsTable, FullPageImageContainer, LatestNews, KnockOutTable, MatchTable},
        data() {
            return {
                name: 'English Premier League',
                badge: 'static/eng1.png',
                tabs: [{name: 'Standings', comp: 'standings-table'}, {name: 'Knockout Phase', comp: 'knock-out-table'}, {
                    name: 'Matches',
                    comp: 'match-table'
                }, {name: 'News', comp: 'latest-news'}],
                currentTab: {name: 'Standings', comp: 'standings-table'},
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
                table: {
                    columns: ['Club', 'MP', 'W', 'D', 'L', 'GF', 'GA', 'GD', 'Pts'],
                    rows: [
                        {
                            Club: {name: 'Liverpool', badge: 'static/liv.png'},
                            MP: 16,
                            W: 13,
                            D: 3,
                            L: 0,
                            GF: 34,
                            GA: 6,
                            GD: 28,
                            Pts: 42
                        },
                        {
                            Club: {name: 'Tottenham', badge: 'static/tot.png'},
                            MP: 16,
                            W: 13,
                            D: 2,
                            L: 1,
                            GF: 45,
                            GA: 9,
                            GD: 36,
                            Pts: 41
                        },
                        {
                            Club: {name: 'Arsenal', badge: 'static/ars.png'},
                            MP: 16,
                            W: 10,
                            D: 4,
                            L: 2,
                            GF: 35,
                            GA: 20,
                            GD: 15,
                            Pts: 34
                        },
                        {
                            Club: {name: 'Man United', badge: 'static/man.png'},
                            MP: 16,
                            W: 7,
                            D: 5,
                            L: 4,
                            GF: 28,
                            GA: 26,
                            GD: 2,
                            Pts: 26
                        },
                    ],
                }
            }
        },
        computed: {
            currentTabComponent: function () {
                return this.currentTab.comp
            },
            currentTabProperties: function () {
                if (this.currentTabComponent === 'latest-news')
                    return {posts: this.posts};
                if (this.currentTabComponent === 'standings-table')
                    return {table: this.table};
                return {};
            }
        },
    }
</script>

<style scoped>
    .league-name {
        font-size: xx-large !important;
        color: white !important;
    }

    .padded {
        padding-bottom: 1rem;
    }
</style>

<template>
    <full-page-image-container small="true" color="#3f1052">
        <template slot="header">
            <sui-item-group>
                <sui-item>
                    <sui-item-image size="tiny" class="circular" :src="league.badge"/>
                    <sui-item-content vertical-align="middle">
                        <sui-item-header class="league-name">{{league.name}}</sui-item-header>
                    </sui-item-content>
                </sui-item>
            </sui-item-group>
        </template>
        <template slot="main">
            <div class="league-menu">
                <sui-button-group :widths="4" class="padded">
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
    import {APIService} from "@/APIService";

    export default {
        name: "League",
        components: {StandingsTable, FullPageImageContainer, LatestNews, KnockOutTable, MatchTable},
        data() {
            return {
                league: null,
                tabs: [{name: 'Standings', comp: 'standings-table'}, {name: 'Knockout Phase', comp: 'knock-out-table'}, {
                    name: 'Matches',
                    comp: 'match-table'
                }, {name: 'News', comp: 'latest-news'}],
                currentTab: {name: 'Standings', comp: 'standings-table'},
                posts: [],
                table: {
                    columns: ['Club', 'MP', 'W', 'D', 'L', 'GA', 'GD', 'Pts'],
                    rows: [],
                }
            }
        },
        mounted() {
            this.getLeague();
            this.getTable();
        },
        methods: {
            getLeague: function () {
                const apiURL = APIService.LEAGUE + this.$route.params.id;
                const myInit = {
                    mode: 'cors',
                };

                const myRequest = new Request(apiURL, myInit);

                fetch(myRequest)
                    .then(response => response.json())
                    .then((data) => {
                        this.league = data;
                        this.getRelatedNews()
                    })
            },
            getRelatedNews: function () {
                const apiURL = APIService.LATEST_NEWS + 'filter/0/'+this.league.name;
                const myInit = {
                    mode: 'cors',
                };

                const myRequest = new Request(apiURL, myInit);

                fetch(myRequest)
                    .then(response => response.json())
                    .then((data) => {
                        this.posts = data
                    })
            },
            getTable: function () {
                const apiURL = APIService.LEAGUE + 'club/' + this.$route.params.id;
                const myInit = {
                    mode: 'cors',
                };

                const myRequest = new Request(apiURL, myInit);

                fetch(myRequest)
                    .then(response => response.json())
                    .then((data) => {
                        this.table.rows = data;
                    })
                    .catch(error => console.log(error))
            },
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
                if (this.currentTabComponent === 'match-table')
                    return {hideFilter: true};
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

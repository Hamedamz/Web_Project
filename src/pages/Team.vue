<template>
    <full-page-image-container :image="team.stadium_image" small="true" color="#1ba8a5">
        <template slot="header">
            <div class="flex">
                <sui-item-group>
                    <sui-item>
                        <sui-item-image size="tiny" class="circular" :src="team.logo"/>
                        <sui-item-content vertical-align="middle">
                            <sui-item-header class="team-name">{{team.full_name}}</sui-item-header>
                        </sui-item-content>
                    </sui-item>
                </sui-item-group>
                <div class="sub-btn">
                    <sui-button circular color="red" @click="subscribe" :icon="icon" :basic="!subscribed"><span
                            v-if="!subscribed">subscirbe</span></sui-button>
                </div>
            </div>
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
                <sui-grid>
                    <div v-if="this.currentTab.name === 'News'">
                        <p class="ui inverted header">Show related news based on: </p>
                        <sui-dropdown
                                text="Filter Posts"
                                icon="filter"
                                floating
                                labeled
                                button
                                class="icon grey basic small circular"
                                v-model="filter"
                                :options="options"
                        ></sui-dropdown>
                    </div>
                    <div class="controls" v-if="this.currentTab.name === 'Matches'">
                        <sui-input placeholder="Rival..." icon="search" basic inverted circular/>
                        <sui-dropdown
                                text="Filter Posts"
                                icon="filter"
                                floating
                                labeled
                                button
                                class="icon grey basic small circular left floated"
                                v-model="match_filter"
                                :options="match_options"
                        ></sui-dropdown>
                    </div>
                </sui-grid>
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
    import FullPageImageContainer from "../layouts/FullPageImageContainer";
    import TeamPlayers from "@/components/TeamPlayers"
    import LatestNews from "@/components/LatestNews"
    import MatchTable from "@/components/MatchTable"
    import {APIService} from "@/APIService";

    export default {
        name: "Team",
        components: {FullPageImageContainer, TeamPlayers, LatestNews, MatchTable},
        data() {
            return {
                filter: 'Title',
                sub_data: {
                    team: '',
                    key: '',
                },
                options: [
                    {
                        key: 'Title',
                        text: 'Title',
                        value: 'Title',
                    },
                    {
                        key: 'Tags',
                        text: 'Tags',
                        value: 'Tags',
                    },
                    {
                        key: 'Content',
                        text: 'Content',
                        value: 'Content',
                    },

                ],
                match_filter: 'All',
                match_options: [
                    {
                        key: 'All',
                        text: 'All',
                        value: 'All',
                    },
                    {
                        key: 'Win',
                        text: 'Win',
                        value: 'Win',
                        label: {color: 'green', empty: true, circular: true},
                    },
                    {
                        key: 'Draw',
                        text: 'Draw',
                        value: 'Draw',
                        label: {color: 'yellow', empty: true, circular: true},
                    },
                    {
                        key: 'Lost',
                        text: 'Lost',
                        value: 'Lost',
                        label: {color: 'red', empty: true, circular: true},
                    },
                ],
                matches: [],
                team: null,
                posts: null,
                subscribed: false,
                tabs: [{name: 'News', comp: 'latest-news'}, {name: 'Squads', comp: 'team-players'}, {
                    name: 'Matches',
                    comp: 'match-table'
                }],
                currentTab: {name: 'News', comp: 'latest-news'},
                people: null,
            }
        },
        mounted() {
            this.getTeam();
            this.getPlayers();
            this.getMatches();
            this.checkSub();
        },
        watch: {
            '$route'() {
                this.getTeam();
                this.getPlayers();
                this.getMatches();
                this.checkSub();
            },
            filter: function () {
                this.getRelatedNews();
            },
            match_filter: function () {
                this.getMatches();
            }
        },
        methods: {
            checkSub: function () {
                this.sub_data.key = APIService.KEY;
                this.sub_data.team = this.$route.params.id;
                let subAPI = 'check/team/';

                this.$http.post(APIService.SUBS + subAPI, this.sub_data, {emulateJSON: true})
                    .then(response => response.json())
                    .then((data) => console.log(data))
                    .catch(error => console.log(error))

            },

            subscribe: function () {
                this.subscribed = !this.subscribed;
                this.sub_data.key = APIService.KEY;
                this.sub_data.team = this.$route.params.id;
                let subAPI = 'unsubs/team/'
                if (this.subscribed)
                    subAPI = 'subs/team/'

                this.$http.post(APIService.SUBS + subAPI, this.sub_data, {emulateJSON: true})
                    .then(response => response.json())
                    .then((data) => console.log(data))
                    .catch(error => console.log(error))

            },

            getTeam: function () {
                const apiURL = APIService.TEAM + this.$route.params.id;
                const myInit = {
                    mode: 'cors',
                };

                const myRequest = new Request(apiURL, myInit);

                fetch(myRequest)
                    .then(response => response.json())
                    .then((data) => {
                        this.team = data
                        this.getRelatedNews();
                    })
                    .catch(error => console.log(error))
            },
            filterAPI: function () {
                if (this.filter === 'Title') return 1;
                if (this.filter === 'Tags') return 0;
                return 2;

            },

            getRelatedNews: function () {
                const apiURL = APIService.LATEST_NEWS + 'filter/' + this.filterAPI() + '/' + this.team.full_name;
                // const apiURL = APIService.LATEST_NEWS + 'filter/' + this.filterAPI() + '/' + this.player.first_name + "%20" + this.player.last_name;
                const myInit = {
                    mode: 'cors',
                };

                const myRequest = new Request(apiURL, myInit);

                fetch(myRequest)
                    .then(response => response.json())
                    .then((data) => {
                        this.posts = data
                    })
                    .catch(error => console.log(error))
            },
            getPlayers: function () {
                const apiURL = APIService.PLAYER + "team/" + this.$route.params.id;
                const myInit = {
                    mode: 'cors',
                };

                const myRequest = new Request(apiURL, myInit);

                fetch(myRequest)
                    .then(response => response.json())
                    .then((data) => {
                        this.people = data
                    })
                    .catch(error => console.log(error))
            },
            matchFilterAPI: function () {
                if (this.match_filter === 'All') return "";
                if (this.match_filter === 'Win') return "1/";
                if (this.match_filter === 'Draw') return "0/";
                return "2/";

            },
            getMatches: function () {
                const apiURL = APIService.MATCH + "team/" + this.matchFilterAPI() + this.$route.params.id;
                const myInit = {
                    mode: 'cors',
                };

                const myRequest = new Request(apiURL, myInit);

                fetch(myRequest)
                    .then(response => response.json())
                    .then((data) => {
                        this.matches = data
                    })
            },
        },
        computed: {
            icon: function () {
                return this.subscribed ? 'like' : '';
            },
            currentTabComponent: function () {
                return this.currentTab.comp
            },
            currentTabProperties: function () {
                if (this.currentTabComponent === 'latest-news')
                    return {posts: this.posts};
                if (this.currentTabComponent === 'team-players')
                    return {people: this.people};
                if (this.currentTabComponent === 'match-table')
                    return {matches: this.matches};
                return {};
            },
        },
    }
</script>

<style scoped>
    .team-name {
        font-size: xx-large !important;
        color: white !important;
    }

    .flex {
        display: flex;
        justify-content: space-between;
    }

    .sub-btn {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        margin: 1rem;
    }
    .header { padding-top: 1rem}
    .padded {
        padding-bottom: 1rem;
    }

    .controls {
        padding: 1rem 1rem;
    }
</style>

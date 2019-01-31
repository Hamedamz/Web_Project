<template>
    <full-page-image-container :image="player.back_pic" small="true" color="red">
        <template slot="header">
            <div class="sub-btn">
                <sui-button circular color="red" @click="subscribe" :icon="icon" :basic="!subscribed"><span
                        v-if="!subscribed">subscirbe</span></sui-button>
            </div>
            <sui-item-group>
                <sui-item>
                    <sui-item-image size="medium" class="circular" :src="player.avatar"/>
                    <sui-item-content vertical-align="middle">
                        <sui-item-header class="player-name">{{player.first_name + " " + player.last_name}}
                        </sui-item-header>
                    </sui-item-content>
                </sui-item>
            </sui-item-group>

        </template>
        <template slot="main">
            <div class="summary">
                <sui-grid :columns="2" stackable>
                    <sui-grid-row>
                        <sui-grid-column :width="6">
                            <sui-table single-line unstackable inverted selectable color="black">
                                <sui-table-body>
                                    <sui-table-row>
                                        <sui-table-cell :width="5">
                                            Nick Name:
                                        </sui-table-cell>
                                        <sui-table-cell :width="11">
                                            {{player.nick_name}}
                                        </sui-table-cell>
                                    </sui-table-row>
                                    <sui-table-row>
                                        <sui-table-cell :width="5">
                                            Birth Place:
                                        </sui-table-cell>
                                        <sui-table-cell :width="11">
                                            {{player.birth_place}}
                                        </sui-table-cell>
                                    </sui-table-row>
                                    <sui-table-row>
                                        <sui-table-cell :width="5">
                                            Birth Date:
                                        </sui-table-cell>
                                        <sui-table-cell :width="11">
                                            {{player.birth_date}}
                                        </sui-table-cell>
                                    </sui-table-row>
                                    <sui-table-row>
                                        <sui-table-cell :width="5">
                                            Experience:
                                        </sui-table-cell>
                                        <sui-table-cell :width="11">
                                            {{player.experience}}
                                        </sui-table-cell>
                                    </sui-table-row>
                                    <sui-table-row>
                                        <sui-table-cell :width="5">
                                            College:
                                        </sui-table-cell>
                                        <sui-table-cell :width="11">
                                            {{player.college}}
                                        </sui-table-cell>
                                    </sui-table-row>
                                </sui-table-body>
                            </sui-table>
                        </sui-grid-column>
                        <sui-grid-column :width="10">
                            <sui-table single-line unstackable inverted striped selectable color="black">
                                <sui-table-header>
                                    <sui-table-row>
                                        <sui-table-header-cell>
                                            SEASON
                                        </sui-table-header-cell>
                                        <sui-table-header-cell>
                                            TEAM
                                        </sui-table-header-cell>
                                        <sui-table-header-cell collapsing>
                                            Played
                                        </sui-table-header-cell>
                                        <sui-table-header-cell collapsing>
                                            TWO-S
                                        </sui-table-header-cell>
                                        <sui-table-header-cell collapsing>
                                            THREE-S
                                        </sui-table-header-cell>
                                        <sui-table-header-cell collapsing>
                                            FOULS
                                        </sui-table-header-cell>
                                        <sui-table-header-cell collapsing>
                                            REBOUNDS
                                        </sui-table-header-cell>
                                    </sui-table-row>
                                </sui-table-header>
                                <sui-table-body>
                                    <p-layer-league-row v-for="league in player.leagues" :league="league"
                                                        :key="league.year"></p-layer-league-row>
                                </sui-table-body>
                            </sui-table>
                        </sui-grid-column>
                    </sui-grid-row>
                </sui-grid>

            </div>
            <div class="padded">
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
            <latest-news :posts="posts"></latest-news>

        </template>
    </full-page-image-container>
</template>

<script>
    import FullPageImageContainer from "../layouts/FullPageImageContainer";
    import PlayerSpec from "../components/PlayerSpec";
    import PLayerLeagueRow from "../../public/static/PLayerLeagueRow";
    import LatestNews from "@/components/LatestNews";
    import {APIService} from "@/APIService";

    export default {
        name: "Player",
        components: {LatestNews, PLayerLeagueRow, PlayerSpec, FullPageImageContainer},
        data() {
            return {
                subscribed: false,
                sub_data: {
                    team: '',
                    key: '',
                },
                filter: 'Title',
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
                player: null,
                posts: null,
            }
        },
        computed: {
            icon: function () {
                return this.subscribed ? 'like' : '';
            },
        },
        mounted() {
            this.getPlayer();
            this.getPlayerStat();
            this.checkSub();
        },
        watch: {
            '$route'() {
                this.getPlayer();
                this.getPlayerStat();
                this.getRelatedNews();
                this.checkSub();
            },
            filter: function() {
                this.getRelatedNews();
            }
        },
        methods: {
            checkSub: function () {
                this.sub_data.key = APIService.KEY;
                this.sub_data.team = this.$route.params.id;
                let subAPI = 'check/player/';

                this.$http.post(APIService.SUBS + subAPI, this.sub_data, {emulateJSON: true})
                    .then(response => response.json())
                    .then((data) => {
                        if (data.detail === 'ok')
                            this.subscribed = true;
                        else {
                            this.subscribed = false;
                        }
                    })
                    .catch(error => console.log(error))

            },

            subscribe: function () {
                this.subscribed = !this.subscribed;
                this.sub_data.key = APIService.KEY;
                this.sub_data.team = this.$route.params.id;
                let subAPI = 'unsubs/player/'
                if (this.subscribed)
                    subAPI = 'subs/player/'

                this.$http.post(APIService.SUBS + subAPI, this.sub_data, {emulateJSON: true})
                    .then(response => response.json())
                    .then((data) => console.log(data))
                    .catch(error => console.log(error))

            },

            getPlayer: function () {
                const apiURL = APIService.PLAYER + this.$route.params.id;
                const myInit = {
                    mode: 'cors',
                };

                const myRequest = new Request(apiURL, myInit);

                fetch(myRequest)
                    .then(response => response.json())
                    .then((data) => {
                        this.player = data
                        this.getRelatedNews();
                    })
                    .catch(error => console.log(error))
            },
            getPlayerStat: function () {
                const apiURL = APIService.PLAYER + 'stat/' + this.$route.params.id;
                const myInit = {
                    mode: 'cors',
                };

                const myRequest = new Request(apiURL, myInit);

                fetch(myRequest)
                    .then(response => response.json())
                    .then((data) => {
                        this.player.leagues = data
                    })
                    .catch(error => console.log(error))
            },
            filterAPI: function () {
                if (this.filter === 'Title') return 1;
                if (this.filter === 'Tags') return 0;
                return 2;

            },
            getRelatedNews: function () {
                const apiURL = APIService.LATEST_NEWS + 'filter/'+this.filterAPI()+'/'+this.player.first_name;
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
        }
    }
</script>

<style scoped>

    .player-name {
        font-size: xx-large !important;
        color: white !important;
    }

    .summary {
        color: #ffffff;
    }

    .padded {
        padding: 1.5rem 0 0 0;
    }

</style>

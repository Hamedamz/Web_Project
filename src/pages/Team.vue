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
                <div class="button">
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
            // this.getPlayerStat();
        },
        watch: {
            '$route'(to, from) {
                this.getTeam();
                this.getPlayers();
            },
            filter: function() {
                this.getRelatedNews();
            }
        },
        methods: {
            subscribe: function () {
                this.subscribed = !this.subscribed
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
                const apiURL = APIService.LATEST_NEWS + 'filter/'+this.filterAPI()+'/'+this.team.full_name;
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
            getPlayers: function() {
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
            }
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

    .button {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .padded {
        padding-bottom: 1rem;
    }
</style>

<template>
    <full-page-image-container :image="match.image">
        <template slot="header">
            <div class="sub-btn">
                <sui-button circular color="red" @click="subscribe" :icon="icon" :basic="!subscribed"><span
                        v-if="!subscribed">subscirbe</span></sui-button>
            </div>
            <match-time-line :time-line="timeLine" :match="match"></match-time-line>
        </template>
        <template slot="main">
            <match-card :match="match" team-links="true"></match-card>
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
                <latest-news :posts="media" :media-only="true" v-show="currentTab === 'Media'"></latest-news>
                <latest-news :posts="posts" :media-only="false" v-show="currentTab === 'News'"></latest-news>
            </div>
        </template>
    </full-page-image-container>
</template>

<script>
    import MatchCard from "@/components/MatchCard";
    import MatchReport from "@/components/MatchReport";
    import MatchStatistics from "@/components/MatchStatistics";
    import MatchLinesup from "@/components/MatchLinesup";
    import MatchTimeLine from "@/components/MatchTimeLine";
    import FullPageImageContainer from "@/layouts/FullPageImageContainer";
    import LatestNews from "@/components/LatestNews";
    import {APIService} from "@/APIService";

    export default {
        name: "Match",
        components: {
            FullPageImageContainer,
            MatchTimeLine,
            MatchCard,
            MatchReport,
            MatchStatistics,
            MatchLinesup,
            LatestNews
        },
        data() {
            return {
                currentTab: 'Report',
                subscribed: false,
                sub_data: {
                    match: '',
                    key: '',
                },
                tabs: ['Report', 'Statistics', 'LinesUp', 'News', 'Media'],
                posts: null,
                media: null,
                match: null,
                timeLine: null,
            }
        },
        computed: {
            currentTabComponent: function () {
                if (this.currentTab === 'Media' || this.currentTab === 'News')
                    return 'p';
                return 'match-' + this.currentTab.toLowerCase()
            },
            // currentTabProperties: function () {
            //     if (this.currentTabComponent === 'latest-news')
            //         return {posts: this.posts, mediaOnly: false};
            //     return {};
            // },
            icon: function () {
                return this.subscribed ? 'like' : '';
            },
        },
        mounted() {
            this.getMatch();
            this.getTimeLine();
            this.checkSub();
        },
        watch: {
            '$route'() {
                this.getMatch();
                this.getTimeLine();
                this.checkSub();
            },
        },
        methods: {
            checkSub: function () {
                this.sub_data.key = APIService.KEY;
                this.sub_data.match = this.$route.params.id;
                let subAPI = 'check/match/';

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
                this.sub_data.match = this.$route.params.id;
                let subAPI = 'unsubs/match/'
                if (this.subscribed)
                    subAPI = 'subs/match/'

                this.$http.post(APIService.SUBS + subAPI, this.sub_data, {emulateJSON: true})
                    .then(response => response.json())
                    .then((data) => console.log(data))
                    .catch(error => console.log(error))

            },
            getMatch: function () {
                const apiURL = APIService.MATCH + this.$route.params.id;
                const myInit = {
                    mode: 'cors',
                };

                const myRequest = new Request(apiURL, myInit);

                fetch(myRequest)
                    .then(response => response.json())
                    .then((data) => {
                        this.match = data
                        this.getRelatedNews()
                    })
                    .catch(error => console.log(error))

            },

            getTimeLine: function () {
                const apiURL = APIService.MATCH + 'timeline/' + this.$route.params.id;
                const myInit = {
                    mode: 'cors',
                };

                const myRequest = new Request(apiURL, myInit);

                fetch(myRequest)
                    .then(response => response.json())
                    .then((data) => {
                        this.timeLine = data
                    })
                    .catch(error => console.log(error))

            },
            getRelatedNews: function () {
                const apiURLh = APIService.LATEST_NEWS + 'filter/0/'+this.match.host_team.full_name;
                // const apiURLg = APIService.LATEST_NEWS + 'filter/0/'+this.match.guest_team.full_name;
                // const apiURL = APIService.LATEST_NEWS + 'filter/' + this.filterAPI() + '/' + this.player.first_name + "%20" + this.player.last_name;
                const myInit = {
                    mode: 'cors',
                };

                const myRequestH = new Request(apiURLh, myInit);
                // const myRequestG = new Request(apiURLg, myInit);

                fetch(myRequestH)
                    .then(response => response.json())
                    .then((data) => {
                        this.posts = data
                        this.media = data
                    })

            },

        }

    }
</script>

<style scoped>
    .sub-btn {
        margin: 1rem;
    }
</style>
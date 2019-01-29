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
                tabs: ['Report', 'Statistics', 'LinesUp', 'News', 'Media'],
                posts: null,
                media: [
                    {
                        id: 4,
                        title: 'By the numbers: Ronaldo equals 51-year-old record',
                        image: 'http://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0816%2Fr415461_2_608x342_16%2D9.jpg&w=544&h=306&scale=crop&cquality=80&location=origin',
                        type: 'big',
                        category: 'serie A',
                        sport: 'football',
                        media: 'photo'
                    },
                    {
                        id: 5,
                        title: 'Why Liverpool should sell Salah',
                        image: 'http://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0816%2Fr415458_608x342_16%2D9.jpg&w=544&h=306&scale=crop&cquality=80&location=origin',
                        type: 'big',
                        category: 'premiere league',
                        sport: 'football',
                        media: 'photo'
                    },
                    {
                        id: 6,
                        title: 'Who\'s more important to Man United: Pogba or Mourinho?',
                        image: 'http://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0816%2Fr415457_608x342_16%2D9.jpg&w=544&h=306&scale=crop&cquality=80&location=origin',
                        type: 'big',
                        category: 'premiere league',
                        sport: 'football',
                        media: 'video'
                    },
                    {
                        id: 7,
                        title: 'Kylian Mbappe and the curse of winning a World Cup',
                        image: 'http://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0925%2Fr436811_1296x729_16%2D9.jpg&w=544&h=306&scale=crop&cquality=80&location=origin',
                        type: 'big',
                        category: 'World Cup',
                        sport: 'football',
                        media: 'photo'
                    },
                ],
                match: null,
                timeLine: null,
            }
        },
        computed: {
            currentTabComponent: function () {
                if (this.currentTab.toLowerCase() === 'news' || this.currentTab.toLowerCase() === 'media')
                    return 'latest-news';
                return 'match-' + this.currentTab.toLowerCase()
            },
            currentTabProperties: function () {
                if (this.currentTab.toLowerCase() === 'media')
                    return {posts: this.media};
                if (this.currentTabComponent === 'latest-news')
                    return {posts: this.posts};
                return {};
            }
        },
        mounted() {
            this.getMatch();
            this.getTimeLine();

            // this.getLinesUp();
        },
        watch: {
            '$route'(to, from) {
                this.getMatch();
                this.getTimeLine();
            },
        },
        methods: {
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
                const apiURL = APIService.LATEST_NEWS + 'filter/0/'+this.match.host_team.full_name;
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

</style>
<template>
    <div id="Home">
        <full-header :post="mainNews" :match="liveMatch"></full-header>
        <latest-news v-on:change-count="onChangeCount" v-on:get-fav="getFavNews" :posts="posts" :favs="fav_posts" with-header="Latest News" with-buttons="true"></latest-news>
        <sui-grid class="container-fluid stackable padded">

            <!--<sui-grid-row>-->
                <!--<sui-button @click="loadMoreNews" basic inverted color="red" circular class="m-auto" icon="ellipsis horizontal"></sui-button>-->
            <!--</sui-grid-row>-->
        </sui-grid>
        <latest-games></latest-games>
    </div>
</template>

<script>
    import FullHeader from "@/components/FullHeader";
    import LatestNews from "@/components/LatestNews";
    import LatestGames from "@/components/LatestGames";
    import {APIService} from "@/APIService";

    export default {
        name: "Home",
        components: {LatestGames, LatestNews, FullHeader},
        data() {
            return {
                test: null,
                mainNews: {
                    title: 'Belgium retain pole as Sweden, Serbia soar',
                    image: 'static/i2.jpg',
                    category: 'premiere league'
                },
                posts_count: 5,
                number_of_posts: 0,
                posts: [],
                fav_posts: [],
                liveMatch: null,
            }
        },
        mounted() {
            this.getHeaderNews();
            this.number_of_posts = 1;
            this.getLatestNews(this.posts_count);
            this.getFavNews();
            this.getHeaderMatch();
        },
        methods: {
            getFavNews: function() {
                const apiURL = APIService.LATEST_NEWS + 'fav_news/' + APIService.KEY;
                const myInit = {
                    mode: 'cors',
                };

                const myRequest = new Request(apiURL, myInit);

                fetch(myRequest)
                    .then(response => response.json())
                    .then((data) => {
                        this.fav_posts = data;
                    })
            },
            getHeaderNews: function() {
                const apiURL = APIService.LATEST_NEWS + this.number_of_posts + '/' + 1;
                const myInit = {
                    mode: 'cors',
                };

                const myRequest = new Request(apiURL, myInit);

                fetch(myRequest)
                    .then(response => response.json())
                    .then((data) => {
                        this.mainNews = data[0];
                    })
            },
            loadMoreNews: function() {
                this.getLatestNews(this.posts_count);
            },
            onChangeCount: function(val) {
                this.posts_count = val;
                if (this.posts_count > this.number_of_posts)
                    this.getLatestNews(this.posts_count - this.number_of_posts)
            },
            getLatestNews: function (count) {
                const apiURL = APIService.LATEST_NEWS + this.number_of_posts + '/' + count;
                const myInit = {
                    mode: 'cors',
                };

                const myRequest = new Request(apiURL, myInit);

                fetch(myRequest)
                    .then(response => response.json())
                    .then((data) => {
                        this.posts = this.posts.concat(data);
                        this.number_of_posts += data.length;
                    })
                    .catch(error => console.log(error))
            },
            getHeaderMatch: function () {
                const apiURL = APIService.MATCH + "latest";
                const myInit = {
                    mode: 'cors',
                };

                const myRequest = new Request(apiURL, myInit);

                fetch(myRequest)
                    .then(response => response.json())
                    .then((data) => {
                        this.liveMatch = data[0]
                    })
                    .catch(error => console.log(error))
            },
            logged() {
                this.$http.post(APIService.USER + 'logged/', {key:APIService.KEY}, {emulateJSON: true})
                    .then(response => response.json())
                    .then((data) => APIService.loggedIn = data)
                    .catch(error => console.log(error))

            }
        },


    }
</script>

<style scoped>
    .m-auto {
        margin: 0 auto;
    }
</style>

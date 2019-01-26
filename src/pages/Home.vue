<template>
    <div id="Home">
        <full-header :post="mainNews" :match="liveMatch"></full-header>
        <latest-news :posts="posts" with-header="Latest News" with-buttons="true"></latest-news>
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
                posts: null,
                liveMatch: null,
            }
        },
        mounted() {
            this.getLatestNews();
            this.getHeaderMatch();
        },
        methods: {
            getLatestNews: function () {
                const apiURL = APIService.LATEST_NEWS;
                const myInit = {
                    mode: 'cors',
                };

                const myRequest = new Request(apiURL, myInit);

                fetch(myRequest)
                    .then(response => response.json())
                    .then((data) => {this.posts = data})
                    .catch(error => console.log(error))
            },
            getHeaderMatch: function () {
                const apiURL = APIService.MATCH + "1";
                const myInit = {
                    mode: 'cors',
                };

                const myRequest = new Request(apiURL, myInit);

                fetch(myRequest)
                    .then(response => response.json())
                    .then((data) => {this.liveMatch = data})
                    .catch(error => console.log(error))
            },
        }
    }
</script>

<style scoped>

</style>
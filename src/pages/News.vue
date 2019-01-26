<template>
    <full-page-image-container :image="post.news_pic">
        <template slot="header">
            <h1 is="sui-header" inverted class="post-title">
                {{post.title}}
            </h1>
        </template>
        <template slot="main">
            <div id="meta" class="white">
                <sui-label
                        circular
                        :color="color"
                        empty
                ></sui-label>
                {{post.source.toUpperCase()}}
                <sui-icon name="calendar" class="inverted"></sui-icon>{{post.pub_date | formatDate}}
                <sui-ladel color="red"></sui-ladel>
                <sui-button-group icons class="font-control" size="mini">
                    <sui-button @click="decrementSize" icon="minus" color="grey" basic/>
                    <sui-button @click="incrementSize" icon="plus" color="grey" basic/>
                </sui-button-group>
            </div>
            <sui-divider inverted></sui-divider>
            <div id="tags" class="ui tag labels inverted">
                <a is="sui-label"
                   v-for="tag in post.tags"
                   :key="tag"
                   tag
                   inverted
                   color="red"
                >
                    {{tag}}
                </a>
            </div>
            <sui-divider inverted></sui-divider>
            <div v-html="post.description" class="post-content" :style="fontSize"></div>
            <sui-divider></sui-divider>
            <latest-news :posts="relatedPosts" with-header="Related"></latest-news>
            <post-comments></post-comments>
        </template>
    </full-page-image-container>
</template>

<script>
    import FullPageImageContainer from "@/layouts/FullPageImageContainer";
    import PostComments from "@/components/PostComments";
    import LatestNews from "@/components/LatestNews";
    import {APIService} from "@/APIService";

    export default {
        name: "News",
        data() {
            return {
                size: 12,
                post: null,
                relatedPosts: [],
            }
        },
        components: {LatestNews, PostComments, FullPageImageContainer},
        mounted() {
            this.getNews();
        },
        methods: {
            getNews: function () {
                const apiURL = APIService.LATEST_NEWS + this.$route.params.id;
                const myInit = {
                    mode: 'cors',
                };

                const myRequest = new Request(apiURL, myInit);

                fetch(myRequest)
                    .then(response => response.json())
                    .then((data) => {this.post = data})
                    .catch(error => console.log(error))
            },
            incrementSize: function () {
                if (this.size < 20)
                    this.size = this.size + 1;
            },
            decrementSize: function () {
                if (this.size > 9)
                    this.size = this.size - 1;
            },
        },
        watch: {
            '$route' (to, from) {
                this.getNews();
            }
        },
        computed: {
            color: function () {
                return this.post.sport === 'football'? 'green': 'orange';
            },
            fontSize: function () {
                return "font-size: " + this.size + "pt;"
            },
        },
    }
</script>

<style scoped>
    .post-title {
        font-size: 40pt!important;
    }
    .post-content {
        color: white;
    }
    .white {
        color: white;
    }
    .font-control {
        float: right;
    }
</style>
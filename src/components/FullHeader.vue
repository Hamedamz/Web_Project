<template>
    <div class="full-header" :style="background" >
        <span></span>
        <sui-container>
            <match-card class="max" :match="match"></match-card>
        </sui-container>
        <sui-container>
            <div class="main-news">
                <div class="main-news-cat">{{post.category.toUpperCase()}}</div>
                <router-link to="/news/id"> <h1 is="sui-header" class="main-news-title" inverted>{{post.title}}</h1></router-link>
                <router-link to="/news/id"><sui-button circular inverted>Full Story</sui-button></router-link>
            </div>
        </sui-container>
    </div>
</template>

<script>
    import MatchCard from "@/components/MatchCard";
    export default {
        name: "FullHeader",
        components: {MatchCard},
        props: ['post', 'match'],
        computed: {
            background: function() {
                return "background: linear-gradient(to left, #fff, #444), url(" + this.post.image + ")"
            }
        },
    }
</script>

<style scoped>
    .full-header {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        background-size: cover !important;
        background-position: center center !important;
        background-blend-mode: multiply;
    }
    .max {
        max-width: 400px
    }
    .main-news {
        margin-bottom: 10vh;
    }

    .main-news-title {
        font-size: 3.5rem !important;
        max-width: 400px;
        padding: 1rem 0;
    }

    .main-news-cat {
        font-weight: bold;
        color: rgba(255, 255, 255, 0.5);
    }
</style>

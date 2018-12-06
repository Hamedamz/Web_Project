<template>
    <div class="full-header" :style="background" >
        <nav-bar :home=true :soccer=false :basket=false></nav-bar>
        <a></a>
        <sui-container>
            <match-card :match="match"></match-card>
        </sui-container>
        <sui-container>
            <div class="main-news">
                <div class="main-news-cat">{{post.category.toUpperCase()}}</div>
                <h1 is="sui-header" class="main-news-title" inverted>{{post.title}}</h1>
                <sui-button inverted>Full Story</sui-button>
            </div>
        </sui-container>
    </div>
</template>

<script>
    import NavBar from "@/components/NavBar";
    import MatchCard from "@/components/MatchCard";
    export default {
        name: "FullHeader",
        components: {MatchCard, NavBar},
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

    .main-news {
        margin-bottom: 10vh;
    }

    .main-news-title {
        font-size: 3.5rem !important;
        max-width: 400px;
    }

    .main-news-cat {
        font-weight: bold;
        color: rgba(255, 255, 255, 0.5);
    }
</style>

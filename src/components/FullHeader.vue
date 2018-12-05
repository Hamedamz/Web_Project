<template>
    <div class="full-header" v-bind:style="{ 'background-image': 'url(' + post.image + ')' }">
        <nav-bar></nav-bar>
        <match-card></match-card>
        <sui-container>
            <div class="main-news">
                <h1 is="sui-header" class="main-news-title" inverted>{{post.title}}</h1>
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
        props: ['post'],
    }
</script>

<style scoped>
    .full-header {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        background-size: cover;
        background-position: center center;
    }

    .main-news {
        margin-bottom: 10vh;
    }

    .main-news-title {
        font-size: 3.5rem !important;
        max-width: 400px;
    }
</style>
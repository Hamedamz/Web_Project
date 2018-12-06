<template lang="html">
    <div class="ahmad">
        <live-card></live-card>
        <live-card></live-card>
    </div>
</template>

<script>
    import LiveCard from "./LiveMatchCard";

    export default {
        name: 'CardGroup1Example',
        components: {
            LiveCard,
        }
    };
</script>
<style scoped>
    .ahmad {
        /*background-image: url("https://ak4.picdn.net/shutterstock/videos/12763754/thumb/1.jpg");*/
        /*background-image: url("https://media.istockphoto.com/photos/close-up-of-fresh-thick-grass-with-water-drops-picture-id515011742?k=6&m=515011742&s=612x612&w=0&h=znCfJ9uJp2uzVlbBf6p9-1QtAG1G-uDvrypicY8aock=");*/
        -webkit-background-size: cover;
        background-size: cover;
        display: flex;
        background-color: rgba(0,0,0,0.3);
    }
</style>

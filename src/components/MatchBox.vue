<template>
    <sui-grid-column :width="8">
    <div class="match-box" :style="background">
        <match-card
            v-for="match in matches"
            :match="match"
            :key="match.id"
            ></match-card>
    </div>
    </sui-grid-column>
</template>

<script>
    import MatchCard from "@/components/MatchCard";
    export default {
        name: "MatchBox",
        components: {MatchCard},
        props: ['matches', 'subscriptions', 'image'],
        computed: {
            background: function() {
                return "background: linear-gradient(to left, #aaa, #333), url(" + this.image + ")"
            }
        },
    }
</script>

<style scoped>
    .match-box {
        border-radius: 15px;
        background-size: cover !important;
        background-position: center center !important;
        background-blend-mode: multiply;
        height: 100%;
        padding: 1rem 1.5rem;
    }
</style>
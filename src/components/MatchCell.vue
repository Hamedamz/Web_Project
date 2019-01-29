<template>
    <router-link :to="'/match/'+ match.id" is="sui-grid-column" :width="8">
        <sui-segment class="match-cell" inverted>
        <div class="teams"><div>
            <sui-image :src="match.host_team.logo" avatar></sui-image>
            <span>{{match.host_team.abbreviation}}</span>
            <span class="res"><sui-icon size="small" name="play" v-if="winHome"></sui-icon>{{homePt}}</span>
        </div>
        <div>
            <sui-image :src="match.guest_team.logo" avatar></sui-image>
            <span>{{match.guest_team.abbreviation}}</span>
            <span class="res"><sui-icon size="small" name="play" v-if="winAway"></sui-icon>{{awayPt}}</span>
        </div></div>
        <div class="time">{{match.time}}</div>
        </sui-segment>
    </router-link>
</template>

<script>
    export default {
        name: "MatchCell",
        props: ['match'],
        computed: {
            homePt: function () {
                return this.match.host_score !== null ? this.match.host_score: " "
            },
            awayPt: function () {
                return this.match.guest_score !== null? this.match.guest_score: " "
            },
            winHome: function () {
                return this.homePt > this.awayPt;
            },
            winAway: function () {
                return this.awayPt > this.homePt;
            },
        }
    }
</script>

<style scoped>
    .match-cell {
        color: white;
        display: flex !important;
    }
    .teams {
        flex-basis: 70%;
    }
    .res {
        float: right;
        padding-right: 1rem;
    }
    .time {
        height: 100%;
        text-align: center;
        border-left: solid 2px rgba(255, 255, 255, 0.1);
        flex-grow: 1;
        padding: 1rem 0;
    }
</style>
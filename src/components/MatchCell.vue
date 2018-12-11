<template>
    <a is="sui-grid-column" :width="8" href="#">
        <sui-segment class="match-cell" inverted>
        <div class="teams"><div>
            <sui-image :src="match.homeBadge" avatar></sui-image>
            <span>{{match.homeName}}</span>
            <span class="res"><sui-icon size="small" name="play" v-if="winHome"></sui-icon>{{homePt}}</span>
        </div>
        <div>
            <sui-image :src="match.awayBadge" avatar></sui-image>
            <span>{{match.awayName}}</span>
            <span class="res"><sui-icon size="small" name="play" v-if="winAway"></sui-icon>{{awayPt}}</span>
        </div></div>
        <div class="time">{{match.time}}</div>
        </sui-segment>
    </a>
</template>

<script>
    export default {
        name: "MatchCell",
        props: ['match'],
        computed: {
            homePt: function () {
                return this.match.result.split(":")[0].trim();
            },
            awayPt: function () {
                return this.match.result.split(":")[1].trim();
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
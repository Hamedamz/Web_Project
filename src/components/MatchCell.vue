<template>
    <a is="sui-grid-column" class="match-cell" :width="8" href="#">
        <div class="teams"><div>
            <sui-image :src="match.homeBadge" avatar></sui-image>
            <span>{{match.homeName}}</span>
            <span class="res">{{homePt}}</span>
        </div>
        <div>
            <sui-image :src="match.awayBadge" avatar></sui-image>
            <span>{{match.awayName}}</span>
            <span class="res">{{awayPt}}</span>
        </div></div>
        <div class="time">{{match.time}}</div>
    </a>
</template>

<script>
    export default {
        name: "MatchCell",
        props: ['match'],
        computed: {
            homePt: function () {
                return this.match.result.split(":")[0];
            },
            awayPt: function () {
                return this.match.result.split(":")[1];
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
        padding-top: 1rem;
    }
</style>
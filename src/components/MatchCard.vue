<template>
    <a class="match-card  ui inverted">
        <div class="team-badge">
            <img :src="match.homeBadge" :alt="match.homeName">
        </div>
        <div class="match-info">
            <div class="match-result">
                <span>{{match.homeName}}</span>
                <span class="result">{{match.result}}</span>
                <span>{{match.awayName}}</span>
            </div>
            <div class="match-time">{{match.time}}</div>
        </div>
        <div class="team-badge">
            <img :src="match.awayBadge" :alt="match.awayName">
        </div>
    </a>
</template>

<script>
    export default {
        name: "MatchCard",
        props: ['match'],
    }
</script>

<style scoped>
    .match-card {
        padding: 0.5rem 1.5rem;
        color: white !important;
        max-width: 400px;
        display: flex;
        justify-content: space-between;
    }

    .match-info {
        flex: auto;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

    }

    .match-result {
        display: flex;
        justify-content: space-around;
        font-weight: bold;
    }

    .result {
        font-size: xx-large;
    }

    .match-time {
        color: rgba(255, 255, 255, 0.5);
        margin: 0.5rem 0;
    }

    .match-card img {
        max-height: 70px;
    }
</style>
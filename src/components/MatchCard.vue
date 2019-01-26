<template>
    <router-link :to="link()" class="match-card  ui inverted" id="matchCard" :class="{small: isSmall}">
        <div class="team-badge">
            <img :src="match.host_team.logo" :alt="match.guest_team.full_name">
        </div>
        <div class="match-info">
            <div class="match-result">
                <span class="name">{{match.host_team.abbreviation}}</span>
                <span class="result">{{result}}</span>
                <span class="name">{{match.guest_team.abbreviation}}</span>
            </div>
            <div class="match-time">{{match.time}}</div>
        </div>
        <div class="team-badge">
            <img :src="match.guest_team.logo" :alt="match.guest_team.full_name">
        </div>
    </router-link>
</template>

<script>
    export default {
        name: "MatchCard",
        props: ['match', 'isSmall'],
        computed: {
            result: function() {
                if (this.match.host_score !== null) {
                    return this.match.host_score + " - " + this.match.guest_score;
                }
                return this.match.date.slice('T')[0]
            },
        },
        methods: {
        link : function() {
            return 'match/' + this.match.id
        }
        }
    }
</script>

<style scoped>
    .match-card {
        /*padding: 0.5rem 1.5rem;*/
        color: white !important;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    @media (max-width: 450px) {
        .match-info {
            order: 3;
            flex-basis: 100% !important;
        }

        .result {
            order: 3;
            flex-basis: 100%;
        }

        .match-result {
            flex-wrap: wrap;
        }

        .team-badge {
            flex-basis: 50%;
        }
    }

    .small .match-info {
        order: 3;
        flex-basis: 100%;
    }

    .small .result {
        order: 3;
        flex-basis: 100%;
    }

    .small .match-result {
        flex-wrap: wrap;
    }

    .small .team-badge {
        flex-basis: 50%;
    }

    /*.team-badge:nth-child(1) {*/
    /*padding-right: 20%;*/
    /*}*/
    /*.team-badge:nth-child(3) {*/
    /*padding-left: 20%;*/
    /*}*/

    .match-info {
        flex: auto;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        font-size: 80% !important;
    }

    .match-result {
        display: flex;
        justify-content: space-between;
        font-weight: bold;
    }

    .result {
        font-size: 170%;
    }

    .match-time {
        color: rgba(255, 255, 255, 0.5);
        margin: 0.5rem 0;
    }

    .match-card img {
        width: 100%;
    }

    .team-badge {
        text-align: center;
        width: 15%;
        min-width: 25px;
        max-width: 70px;
        /*max-height: 70px;*/
    }

    .name:nth-child(1) {
        padding-left: 9%;
    }
    .name:nth-child(3) {
        padding-right: 9% !important;
    }
</style>
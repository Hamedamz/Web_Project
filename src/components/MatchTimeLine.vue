<template>
    <div id="time-line">
        <span class="teams ui">
            <img :src="match.host_team.logo" :alt="match.host_team.abbreviation">
            <img :src="match.guest_team.logo" :alt="match.guest_team.abbreviation">
        </span>
        <div>
            <div id="events">
                <time-line-event
                        v-for="event in timeLine"
                        :key="event.id"
                        :event="event"
                        :sport="match.sport"
                ></time-line-event>
            </div>
        </div>
    </div>
</template>

<script>
    import TimeLineEvent from "@/components/TimeLineEvent";
    export default {
        name: "MatchTimeLine",
        components: {TimeLineEvent},
        props: ['timeLine', 'match'],
    }
</script>

<style scoped>
    #time-line {
        position: relative;
        margin: 2rem 0.75rem;
    }
    .teams {
        padding: 0.5rem;
        background: rgba(255, 255, 255, .15);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 40px;
        width: calc(25px + 1rem);
        height: 80px;
    }
    .teams > img {
        max-height: 25px;
        max-width: 25px;
    }
    .teams::after {
        content: ' ';
        width: 100%;
        height: 1px;
        background: rgba(255, 255, 255, .15);
        position: absolute;
        top: 50%;
        margin-left: -0.5rem;
        margin-right: 1rem;
    }
</style>
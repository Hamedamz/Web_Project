<template>
    <span class="time-line-event" :style="positions" @mouseenter="showLabel = true" @mouseleave="showLabel = false">
        <sui-icon :name="icon" color="yellow" class="event-icon"></sui-icon>
        <span class="time"><sui-label circular>{{event.time + "'"}}</sui-label></span>
        <sui-label v-show="showLabel" class="label" circular :pointing="point">{{event.description}}</sui-label>
    </span>
</template>

<script>
    export default {
        name: "TimeLineEvent",
        props: ['event', 'sport'],
        data() {
            return {
                showLabel: false,
            }
        },
        computed: {
            icon: function () {
                return 'user';
            },
            positions: function () {
                let time = this.sport === 'football'? 90: 48;
                let pos = this.event.side === 'home'? 'top: 0': 'bottom: 0';
                let dir = this.event.side === 'home'? 'column': 'column-reverse';
                return "left: " + (this.event.time / time * 100) + "%;" + pos + ";" + "flex-direction: " + dir + ";";

            },
            point: function () {
                return this.event.side === 'home'? 'up': 'below'
            },
        }
    }
</script>

<style scoped>
    .time-line-event {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: baseline;
    }
    .time {
        margin: 1rem 0;
    }
    .label {
        bottom: 0;
        left: -50%;
    }
</style>
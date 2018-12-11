<template>
    <div class="field">
        <soccer-player v-for=" player in players" :key="player.id" :player="player"></soccer-player>
        <img src="static/SocField.svg"
             style="visibility: hidden;"/>
    </div>
</template>

<script>
    import SoccerPlayer from "./SoccerPlayer";
    export default {
        name: "SoccerField",
        components: {SoccerPlayer},
        props:['players']
    }
</script>

<style scoped>
    .field {
        background: url("https://a.espncdn.com/redesign/assets/img/formations/ukcom-soccer-field-001.svg");
        background-repeat: no-repeat;
        background-size: contain;
        width: 100%;
        position: relative;
    }
    .ba {
        display: flex;
    }
</style>

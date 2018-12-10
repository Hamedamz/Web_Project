<template>

    <!--<sui-image src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/bm-dante.jpg" size="tiny" circular/>-->
    <span :style="flex">
        <img :src="player.pic" class="circular--square"/>
        <div class="name">
            <p class="pp">
            {{player.name}}
            </p>
        </div>
    </span>
</template>

<script>
    export default {
        name: "SoccerPlayer",
        props: ['player'],
        data() {
            return {

                flex: {
                    display: 'flex',
                    flexDirection: 'column',
                    width: '5vw',
                    position: 'absolute',
                    top: this.player.top + '%',
                    left: this.player.left + '%',
                }
            }
        }
    }
</script>

<style scoped>
    .circular--square {
        border-top-left-radius: 50% 50%;
        border-top-right-radius: 50% 50%;
        border-bottom-right-radius: 50% 50%;
        border-bottom-left-radius: 50% 50%;
        width: 4vw;
        margin: auto;
        /*height: 10vh;*/

    }

    .name {
        color: #fbfbfb;
        text-align: center;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 20%;
        font-size: 1vw;
        /*width: 90%;*/
        background-size: cover;
        padding:1%;
    }
    .pp{

        /*font-size: 1em;*/
    }
</style>


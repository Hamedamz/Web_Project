<template>
    <div class="main">
        <team-lines-up :players="players"></team-lines-up>
        <team-lines-up :players="players"></team-lines-up>
    </div>
</template>

<script>

    import TeamLinesUp from "./TeamLinesUp";
    export default {
        name: "MatchLinesup",
        components: {TeamLinesUp},
        data(){
            return{
                players:[{
                    name:'Neuer',
                    pic:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/bm-rilbery.jpg',
                    left:44,
                    top:70,
                    id:2
                },{
                    name:'Benita',
                    pic:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/bm-rilbery.jpg',
                    left:28,
                    top:60,
                    id:3,
                    cIcon:'&#xE060;',
                    cardTime:"6'"
                },{
                    name:'Dante',
                    pic:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/bm-rilbery.jpg',
                    left:60,
                    top:60,
                    id:4
                },{
                    name:'Alaba',
                    pic:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/bm-rilbery.jpg',
                    left:13,
                    top:33,
                    id:5
                },{
                    name:'Lahm',
                    pic:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/bm-rilbery.jpg',
                    left:74,
                    top:33,
                    id:6,
                    subs:'Messi',
                    sIcon:'&#xE092;',
                    subTime:"18'",
                    cIcon:'&#xE060;',
                    cardTime:"6'"
                },{
                    name:'Ahmad',
                    pic:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/bm-rilbery.jpg',
                    left:44,
                    top:30,
                    id:7
                },{
                    name:'Rilbery',
                    pic:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/bm-rilbery.jpg',
                    left:60,
                    top:21,
                    id:8
                },{
                    name:'Martinez',
                    pic:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/bm-rilbery.jpg',
                    left:28,
                    top:21,
                    id:9,
                    subs:'Messi',
                    sIcon:'&#xE092;',
                    subTime:"18'"
                },{
                    name:'Roben',
                    pic:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/bm-rilbery.jpg',
                    left:33,
                    top:0,
                    id:10
                },{
                    name:'Pizarro',
                    pic:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/bm-rilbery.jpg',
                    left:55,
                    top:0,
                    id:11
                }]
            }
        }

    }
</script>

<style scoped>

    .main{
        padding: 1rem 0;
    }

</style>

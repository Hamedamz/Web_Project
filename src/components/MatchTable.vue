<template>
    <div id="match-table">
        <sui-grid class="container-fluid stackable">
            <match-cell
                v-for="match in matches"
                :match="match"
                ></match-cell>

        </sui-grid>
    </div>
</template>

<script>
    import MatchCell from "@/components/MatchCell";
    export default {
        name: "MatchTable",
        components: {MatchCell},
        data () {
            return {
                matches: [
                    {
                        homeName: 'LIV',
                        homeBadge: 'static/liv.png',
                        awayName: 'MAN',
                        awayBadge: 'static/man.png',
                        result: '3 : 1',
                        time: "68'",
                    },
                    {
                        homeName: 'ARS',
                        homeBadge: 'static/ars.png',
                        awayName: 'TOT',
                        awayBadge: 'static/tot.png',
                        result: '2 : 1',
                        time: "45'",
                    },
                    {
                        homeName: 'JUV',
                        homeBadge: 'static/juv.png',
                        awayName: 'MIL',
                        awayBadge: 'static/mil.png',
                        result: '0 : 0',
                        time: "15'",
                    },
                    {
                        homeName: 'PSG',
                        homeBadge: 'static/psg.png',
                        awayName: 'RSB',
                        awayBadge: 'static/rsb.png',
                        result: '11/12',
                        time: "11:30 PM",
                    },
                    {
                        homeName: 'BAR',
                        homeBadge: 'static/bar.png',
                        awayName: 'ATM',
                        awayBadge: 'static/atm.png',
                        result: '2 : 0',
                        time: "FT",
                    },
                ],
            }
        }
    }
</script>

<style scoped>

</style>
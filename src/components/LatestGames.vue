<template>
    <div class="latest-games">
        <sui-grid class="container-fluid horizontally padded">
            <sui-grid-column>
                <h2 is="sui-header" class="left floated" inverted>Latest Games</h2>
                <sui-button
                        @click="subscriptions = ! subscriptions"
                        :basic="!subscriptions"
                        size="small"
                        color="red"
                        icon="heart"
                        floated="right"
                        circular
                >
                </sui-button>
            </sui-grid-column>
        </sui-grid>
        <sui-grid class="container-fluid stackable padded relaxed">
            <match-box
                :matches="footballMatches"
                :image="footballImage"
                :subscriptions="subscriptions"
                ></match-box>
            <match-box
                :matches="basketballMatches"
                :image="basketballImage"
                :subscriptions="subscriptions"
                ></match-box>
        </sui-grid>
    </div>
</template>

<script>
    import MatchBox from "@/components/MatchBox";
    export default {
        name: "latest-games",
        components: {MatchBox},
        data() {
            return {
                footballMatches: [
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
                footballImage: 'static/i4.jpg',
                basketballMatches: [
                    {
                        homeName: 'Celtics',
                        homeBadge: 'static/celtics.png',
                        awayName: 'Jazz',
                        awayBadge: 'static/jazz.png',
                        result: '120 : 101',
                        time: "3",
                    },
                    {
                        homeName: 'Knicks',
                        homeBadge: 'static/knicks.png',
                        awayName: 'Lakers',
                        awayBadge: 'static/lakers.png',
                        result: '60 : 78',
                        time: "2",
                    },
                    {
                        homeName: 'Rockets',
                        homeBadge: 'static/rockets.png',
                        awayName: 'Spurs',
                        awayBadge: 'static/spurs.png',
                        result: '120 : 101',
                        time: "3",
                    },
                    {
                        homeName: 'Suns',
                        homeBadge: 'static/suns.png',
                        awayName: 'Raptors',
                        awayBadge: 'static/raptors.png',
                        result: '102 : 113',
                        time: "3",
                    },
                ],
                basketballImage: 'static/i3.jpg',

                subscriptions: false,
            }
        }
    }
</script>

<style scoped>

</style>
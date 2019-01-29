<template>
    <div id="match-table">
        <sui-grid>
            <div class="controls" v-if="!hideFilter">
                <sui-input placeholder="Rival..."  icon="search" basic inverted circular/>
                <sui-dropdown
                        text="Filter Posts"
                        icon="filter"
                        floating
                        labeled
                        button
                        class="icon grey basic small circular"
                        v-model="filter"
                        :options="options"
                ></sui-dropdown>
            </div>
        </sui-grid>
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
    import {APIService} from "@/APIService";
    export default {
        name: "MatchTable",
        components: {MatchCell},
        props: ['hideFilter'],
        data () {
            return {
                filter: 'All',
                options: [
                    {
                        key: 'All',
                        text: 'All',
                        value: 'All',
                    },
                    {
                        key: 'Win',
                        text: 'Win',
                        value: 'Win',
                        label: {color: 'green', empty: true, circular: true},
                    },
                    {
                        key: 'Draw',
                        text: 'Draw',
                        value: 'Draw',
                        label: {color: 'yellow', empty: true, circular: true},
                    },
                    {
                        key: 'Lost',
                        text: 'Lost',
                        value: 'Lost',
                        label: {color: 'red', empty: true, circular: true},
                    },
                ],
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
        },
        mounted(){
            this.getMatches()
        },
        methods: {
            getMatches: function () {
                const apiURL = APIService.MATCH + "league/" + this.$route.params.id;
                const myInit = {
                    mode: 'cors',
                };

                const myRequest = new Request(apiURL, myInit);

                fetch(myRequest)
                    .then(response => response.json())
                    .then((data) => {
                        this.matches = data
                    })
            },
        }
    }
</script>

<style scoped>
.controls {
    padding: 1rem 1rem;
}
</style>
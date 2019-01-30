<template>
    <div class="main">
        <team-lines-up :players="host_players"></team-lines-up>
        <team-lines-up :players="guest_players"></team-lines-up>
        <div class="flex">


        </div>

        <sui-grid divided="vertically">
            <sui-grid-row :columns="2">
                <sui-grid-column>
                    <sui-table stackable inverted color="black">
                        <sui-table-header>
                            <sui-table-row>
                                <sui-table-header-cell>
                                    No
                                </sui-table-header-cell>
                                <sui-table-header-cell>
                                    Name
                                </sui-table-header-cell>
                            </sui-table-row>
                        </sui-table-header>
                        <sui-table-body>
                            <sui-table-row v-for="player in host_subs">
                                <sui-table-cell>
                                    {{player.player.id}}
                                </sui-table-cell>
                                <sui-table-cell>
                                    {{player.player.first_name + player.player.last_name}}
                                </sui-table-cell>
                            </sui-table-row>

                        </sui-table-body>
                    </sui-table>
                </sui-grid-column>
                <sui-grid-column>
                    <sui-table stackable inverted color="black">
                        <sui-table-header>
                            <sui-table-row>
                                <sui-table-header-cell>
                                    No
                                </sui-table-header-cell>
                                <sui-table-header-cell>
                                    Name
                                </sui-table-header-cell>
                            </sui-table-row>
                        </sui-table-header>
                        <sui-table-body>
                            <sui-table-row v-for="player in guest_subs">
                                <sui-table-cell>
                                    {{player.player.id}}
                                </sui-table-cell>
                                <sui-table-cell>
                                    {{player.player.first_name + player.player.last_name}}
                                </sui-table-cell>
                            </sui-table-row>
                        </sui-table-body>
                    </sui-table>
                </sui-grid-column>
            </sui-grid-row>
        </sui-grid>
    </div>
</template>

<script>

    import TeamLinesUp from "./TeamLinesUp";
    import {APIService} from "@/APIService";

    export default {
        name: "MatchLinesup",
        components: {TeamLinesUp},
        data() {
            return {
                host_players: [],
                guest_players: [],
                host_subs: [],
                guest_subs: [],
                players: [
                    {
                    name: 'Neuer',
                    pic: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/bm-rilbery.jpg',
                    left: 44,
                    top: 70,
                    id: 2
                }, {
                    name: 'Benita',
                    pic: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/bm-rilbery.jpg',
                    left: 28,
                    top: 60,
                    id: 3,
                    cIcon: '&#xE060;',
                    cardTime: "6'"
                }, {
                    name: 'Dante',
                    pic: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/bm-rilbery.jpg',
                    left: 60,
                    top: 60,
                    id: 4
                }, {
                    name: 'Alaba',
                    pic: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/bm-rilbery.jpg',
                    left: 13,
                    top: 33,
                    id: 5
                }, {
                    name: 'Lahm',
                    pic: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/bm-rilbery.jpg',
                    left: 74,
                    top: 33,
                    id: 6,
                    subs: 'Messi',
                    sIcon: '&#xE092;',
                    subTime: "18'",
                    cIcon: '&#xE060;',
                    cardTime: "6'"
                }, {
                    name: 'Ahmad',
                    pic: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/bm-rilbery.jpg',
                    left: 44,
                    top: 30,
                    id: 7
                }, {
                    name: 'Rilbery',
                    pic: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/bm-rilbery.jpg',
                    left: 60,
                    top: 21,
                    id: 8
                }, {
                    name: 'Martinez',
                    pic: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/bm-rilbery.jpg',
                    left: 28,
                    top: 21,
                    id: 9,
                    subs: 'Messi',
                    sIcon: '&#xE092;',
                    subTime: "18'"
                }, {
                    name: 'Roben',
                    pic: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/bm-rilbery.jpg',
                    left: 33,
                    top: 0,
                    id: 10
                }, {
                    name: 'Pizarro',
                    pic: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/bm-rilbery.jpg',
                    left: 55,
                    top: 0,
                    id: 11
                }]
            }
        },
        mounted() {
            this.getLinesUp();
        },
        methods: {
            getLinesUp: function () {
                    const apiURL = APIService.MATCH + 'linesup/' + this.$route.params.id;
                    const myInit = {
                        mode: 'cors',
                    };

                    const myRequest = new Request(apiURL, myInit);

                    fetch(myRequest)
                        .then(response => response.json())
                        .then((data) => {
                            let htid = data[0].host_team;
                            let gtid = data[0].guest_team;
                            this.getHostPlayers(htid);
                            this.getGuestPlayers(gtid);
                        })
            },
            getHostPlayers: function (id) {
                const apiURL = APIService.MATCH + 'player/' + id;
                const myInit = {
                    mode: 'cors',
                };

                const myRequest = new Request(apiURL, myInit);

                fetch(myRequest)
                    .then(response => response.json())
                    .then((data) => {
                        this.host_players = data.filter(player => player.inField)
                        this.host_subs = data.filter(player => !player.inField)
                    })

            },
            getGuestPlayers: function (id) {
                const apiURL = APIService.MATCH + 'player/' + id;
                const myInit = {
                    mode: 'cors',
                };

                const myRequest = new Request(apiURL, myInit);

                fetch(myRequest)
                    .then(response => response.json())
                    .then((data) => {
                        this.guest_players = data.filter(player => player.inField)
                        this.guest_subs = data.filter(player => !player.inField)
                    })

            },
        }

    }
</script>

<style scoped>

    .main {
        padding: 1rem 0;
    }
</style>

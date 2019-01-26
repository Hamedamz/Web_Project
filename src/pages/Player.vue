<template>
    <full-page-image-container :image="player.back_pic" small="true" color="red">
        <template slot="header">
            <sui-item-group>
                <sui-item>
                    <sui-item-image size="medium" class="circular" :src="player.avatar"/>
                    <sui-item-content vertical-align="middle">
                        <sui-item-header class="player-name">{{player.first_name + " " + player.last_name}}</sui-item-header>
                    </sui-item-content>
                </sui-item>
            </sui-item-group>
        </template>
        <template slot="main">
            <div class="summary">
                <sui-grid :columns="2" stackable>
                    <sui-grid-row>
                        <sui-grid-column :width="6">
                            <sui-table single-line unstackable inverted selectable color="black">
                                <sui-table-body>
                                    <sui-table-row>
                                        <sui-table-cell :width="5">
                                            Nick Name:
                                        </sui-table-cell>
                                        <sui-table-cell :width="11">
                                            {{player.nick_name}}
                                        </sui-table-cell>
                                    </sui-table-row>
                                    <sui-table-row>
                                        <sui-table-cell :width="5">
                                            Birth Place:
                                        </sui-table-cell>
                                        <sui-table-cell :width="11">
                                            {{player.birth_place}}
                                        </sui-table-cell>
                                    </sui-table-row>
                                    <sui-table-row>
                                        <sui-table-cell :width="5">
                                            Birth Date:
                                        </sui-table-cell>
                                        <sui-table-cell :width="11">
                                            {{player.birth_date}}
                                        </sui-table-cell>
                                    </sui-table-row>
                                    <sui-table-row>
                                        <sui-table-cell :width="5">
                                            Experience:
                                        </sui-table-cell>
                                        <sui-table-cell :width="11">
                                           {{player.experience}}
                                        </sui-table-cell>
                                    </sui-table-row>
                                    <sui-table-row>
                                        <sui-table-cell :width="5">
                                            College:
                                        </sui-table-cell>
                                        <sui-table-cell :width="11">
                                            {{player.college}}
                                        </sui-table-cell>
                                    </sui-table-row>
                                </sui-table-body>
                            </sui-table>                        </sui-grid-column>
                        <sui-grid-column :width="10">
                            <sui-table single-line unstackable inverted striped selectable color="black">
                                <sui-table-header>
                                    <sui-table-row>
                                        <sui-table-header-cell >
                                            SEASON
                                        </sui-table-header-cell>
                                        <sui-table-header-cell>
                                            TEAM
                                        </sui-table-header-cell>
                                        <sui-table-header-cell collapsing>
                                            Played
                                        </sui-table-header-cell>
                                        <sui-table-header-cell collapsing>
                                            TWO-S
                                        </sui-table-header-cell>
                                        <sui-table-header-cell collapsing>
                                            THREE-S
                                        </sui-table-header-cell>
                                        <sui-table-header-cell collapsing>
                                            FOULS
                                        </sui-table-header-cell>
                                        <sui-table-header-cell collapsing>
                                            REBOUNDS
                                        </sui-table-header-cell>
                                    </sui-table-row>
                                </sui-table-header>
                                <sui-table-body>
                                    <p-layer-league-row v-for="league in player.leagues" :league="league" :key="league.year"></p-layer-league-row>
                                </sui-table-body>
                            </sui-table>
                        </sui-grid-column>
                    </sui-grid-row>
                </sui-grid>

            </div>
            <div class="padded">
                <p class="ui inverted header">Show related news based on: </p>
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
            <latest-news :posts="posts" ></latest-news>

        </template>
    </full-page-image-container>
</template>

<script>
    import FullPageImageContainer from "../layouts/FullPageImageContainer";
    import PlayerSpec from "../components/PlayerSpec";
    import PLayerLeagueRow from "../../public/static/PLayerLeagueRow";
    import LatestNews from "@/components/LatestNews";
    import {APIService} from "@/APIService";

    export default {
        name: "Player",
        components: {LatestNews,PLayerLeagueRow, PlayerSpec, FullPageImageContainer},
        data() {
            return {
                filter: 'Title',
                options: [
                    {
                        key: 'Title',
                        text: 'Title',
                        value: 'Title',
                    },
                    {
                        key: 'Tags',
                        text: 'Tags',
                        value: 'Tags',
                    },
                    {
                        key: 'Content',
                        text: 'Content',
                        value: 'Content',
                    },

                ],
                player: null,
                posts: [
                    {
                        id: 1,
                        title: 'A home for the pride key to roaring Lions',
                        image: 'http://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F1128%2Fr470200_1296x729_16%2D9.png&w=544&h=306&scale=crop&cquality=80&location=origin',
                        type: 'small',
                        category: 'premiere league',
                        sport: 'football',
                    },
                    {
                        id: 3,
                        title: 'Wright Thompson: Italian football gets in your blood',
                        image: 'http://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0929%2Fr438829_1296x729_16%2D9.jpg&w=544&h=306&scale=crop&cquality=80&location=origin',
                        type: 'small',
                        category: 'premiere league',
                        sport: 'football',
                    },
                    {
                        id: 4,
                        title: 'By the numbers: Ronaldo equals 51-year-old record',
                        image: 'http://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0816%2Fr415461_2_608x342_16%2D9.jpg&w=544&h=306&scale=crop&cquality=80&location=origin',
                        type: 'small',
                        category: 'serie A',
                        sport: 'football',
                    },
                    {
                        id: 5,
                        title: 'Why Liverpool should sell Salah',
                        image: 'http://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0816%2Fr415458_608x342_16%2D9.jpg&w=544&h=306&scale=crop&cquality=80&location=origin',
                        type: 'small',
                        category: 'premiere league',
                        sport: 'football',
                    },
                    {
                        id: 6,
                        title: 'Who\'s more important to Man United: Pogba or Mourinho?',
                        image: 'http://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0816%2Fr415457_608x342_16%2D9.jpg&w=544&h=306&scale=crop&cquality=80&location=origin',
                        type: 'big',
                        category: 'premiere league',
                        sport: 'football',
                    },
                    {
                        id: 7,
                        title: 'Kylian Mbappe and the curse of winning a World Cup',
                        image: 'http://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0925%2Fr436811_1296x729_16%2D9.jpg&w=544&h=306&scale=crop&cquality=80&location=origin',
                        type: 'small',
                        category: 'World Cup',
                        sport: 'football',
                    },
                ]
            }
        },
        mounted() {
            this.getPlayer();
        },
        watch: {
            '$route' (to, from) {
                this.getPlayer();
            }
        },
        methods: {
            getPlayer: function () {
                const apiURL = APIService.PLAYER + this.$route.params.id;
                const myInit = {
                    mode: 'cors',
                };

                const myRequest = new Request(apiURL, myInit);

                fetch(myRequest)
                    .then(response => response.json())
                    .then((data) => {
                        this.player = data
                    })
                    .catch(error => console.log(error))
            },

        }
    }
</script>

<style scoped>

    .player-name {
        font-size: xx-large !important;
        color: white !important;
    }

    .summary {
        color: #ffffff;
    }

    .padded {
        padding: 1.5rem 0 0 0;
    }

</style>

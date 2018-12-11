<template>
    <div class="back">
        <sui-table stackable inverted color="black">
            <sui-table-header>
                <sui-table-row text-align="center">
                    <sui-table-header-cell colspan="3">
                        <div class="cat">
                            Faculty
                        </div>
                    </sui-table-header-cell>
                </sui-table-row>
            </sui-table-header>
            <sui-table-body>
                <sui-table-row>
                    <player-over-all v-for="peo in people.faculty" :person="peo" :key="peo.joinedYear"></player-over-all>
                </sui-table-row>
            </sui-table-body>
        </sui-table>

        <div class="right">
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
        <sui-table single-line stackable inverted striped color="black">
            <sui-table-header>
                <sui-table-row text-align="center">
                    <sui-table-header-cell colspan="3">
                        <div class="cat">
                            Players
                        </div>
                    </sui-table-header-cell>
                </sui-table-row>
            </sui-table-header>
            <sui-table-body>
                <sui-table-row>
                    <player-over-all v-for="peo in filteredPosts" :person="peo" :key="peo.joinedYear"></player-over-all>
                </sui-table-row>
            </sui-table-body>
        </sui-table>
    </div>
</template>

<script>
    import PlayerOverAll from "./PlayerOverAll";

    export default {
        name: "TeamPlayers",
        components: {PlayerOverAll},
        props: ['people'],
        data(){
            return{
                filter: 'All',
                options: [
                    {
                        key: 'All',
                        text: 'All',
                        value: 'All',
                    },
                    {
                        key: 'Right Attacker',
                        text: 'Right Attacker',
                        value: 'Right Attacker',
                        label: {color: 'green', empty: true, circular: true},
                    },
                    {
                        key: 'HalfBack',
                        text: 'HalfBack',
                        value: 'HalfBack',
                        label: {color: 'orange', empty: true, circular: true},
                    },
                    {
                        key: 'Left Defender',
                        text: 'Left Defender',
                        value: 'Left Defender',
                        label: {color: 'red', empty: true, circular: true},
                    },
                ]
            }
        },
        methods: {
            filterBySport(person) {
                return this.filter === 'All' || person.post === this.filter;
            },
        },
        computed: {
            filteredPosts: function () {
                return this.people.players.filter(this.filterBySport)
            }
        }
    }
</script>

<style scoped>
    .cat {
        font-size: 120%;
    }
    .right{
        text-align: right;
    }

</style>

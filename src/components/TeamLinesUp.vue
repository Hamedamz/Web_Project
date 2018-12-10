<template>
    <div class="main">
        <!--<sui-table>-->
        <!--<sui-table-body>-->
        <!--</sui-table-body>-->
        <!--</sui-table>-->
        <sui-table single-line stackable inverted striped color="black" fixed>
            <sui-table-body>

                <sui-table-row>
                    <sui-table-cell>
                        <soccer-field :players="players"></soccer-field>
                    </sui-table-cell>
                    <sui-table-cell>
                        <sui-table color="black" inverted selectable>
                            <sui-table-header>
                                <sui-table-row>
                                    <sui-table-header-cell>No</sui-table-header-cell>
                                    <sui-table-header-cell>Name</sui-table-header-cell>
                                    <sui-table-header-cell>Detail</sui-table-header-cell>
                                </sui-table-row>
                            </sui-table-header>
                            <sui-table-body>
                                <PlayerStatRow v-for="player in players" :player="player"></PlayerStatRow>
                                <!--<sui-table-row>-->
                                <!--<sui-table-cell>sasa</sui-table-cell>-->
                                <!--</sui-table-row>-->
                            </sui-table-body>
                        </sui-table>
                    </sui-table-cell>
                </sui-table-row>
            </sui-table-body>
        </sui-table>
    </div>
</template>

<script>
    import SoccerField from "./SoccerField";
    import PlayerStatRow from "./PlayerStatRow";
    export default {
        name: "TeamLinesUp",
        components: { PlayerStatRow, SoccerField},
        props:['players']
    }
</script>

<style scoped>

    .main{
        padding: 1rem 0;
    }

</style>

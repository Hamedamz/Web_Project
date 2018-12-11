<template>
    <div class="main">
        <!--<sui-table>-->
        <!--<sui-table-body>-->
        <!--</sui-table-body>-->
        <!--</sui-table>-->
        <sui-grid :columns="2" divided="vertically" stackable>
            <sui-grid-row>

                <sui-grid-column :width="9">
                    <div class="flex">
                        <soccer-field class="field" :players="players"></soccer-field>
                    </div>
                </sui-grid-column>

                <sui-grid-column :width="7">
                    <sui-table unstackable color="black" inverted selectable>
                        <sui-table-header>
                            <sui-table-row>
                                <sui-table-header-cell>No</sui-table-header-cell>
                                <sui-table-header-cell>Name</sui-table-header-cell>
                                <sui-table-header-cell>Detail</sui-table-header-cell>
                            </sui-table-row>
                        </sui-table-header>
                        <sui-table-body>
                            <PlayerStatRow v-for="player in players" :player="player" :key="player.id"></PlayerStatRow>
                        </sui-table-body>
                    </sui-table>
                </sui-grid-column>
            </sui-grid-row>
        </sui-grid>
    </div>
</template>

<script>
    import SoccerField from "./SoccerField";
    import PlayerStatRow from "./PlayerStatRow";

    export default {
        name: "TeamLinesUp",
        components: {PlayerStatRow, SoccerField},
        props: ['players']
    }
</script>

<style scoped>

    .main {
        padding: 1rem 0;
    }
    .flex{
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }
    .field{
        margin: auto;
    }

</style>

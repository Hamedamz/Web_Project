<template>
    <sui-table-row>
        <sui-table-cell>
            {{league.year}}
        </sui-table-cell>
        <sui-table-cell>
            <sui-image :src="league.icon" avatar />
            <span>
            {{league.team}}</span>
        </sui-table-cell>
        <sui-table-cell>
            {{league.time}}
        </sui-table-cell>
        <sui-table-cell>
            {{league.twoS}}
        </sui-table-cell>
        <sui-table-cell>
            {{league.threeS}}
        </sui-table-cell>
        <sui-table-cell>
            {{league.fouls}}
        </sui-table-cell>
        <sui-table-cell>
            {{league.rebounds}}
        </sui-table-cell>
    </sui-table-row>
</template>

<script>
    export default {
        name: "PLayerLeagueRow",
        props:['league'],
    }
</script>

<style scoped>

</style>

<template>
    <sui-table-row>
        <sui-table-cell>
            {{league.year}}
        </sui-table-cell>
        <sui-table-cell>
            <sui-image :src="league.team.logo" avatar />
            <span>
            {{league.team.abbreviation}}</span>
        </sui-table-cell>
        <sui-table-cell>
            {{league.time}}
        </sui-table-cell>
        <sui-table-cell v-if="league.two_s">
            {{league.two_s}}
        </sui-table-cell>
        <sui-table-cell v-if="league.three_s">
            {{league.three_s}}
        </sui-table-cell>
        <sui-table-cell>
            {{league.fouls}}
        </sui-table-cell>
        <sui-table-cell v-if="league.rebounds">
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

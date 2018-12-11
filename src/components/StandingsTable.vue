<template>
    <div id="standings">
        <sui-table inverted striped selectable unstackable color="black">
        <sui-table-header>
            <sui-table-row>
                <sui-table-header-cell></sui-table-header-cell>
                <sui-table-header-cell
                        v-for="column in table.columns"
                        :key="column">
                    {{column}}
                </sui-table-header-cell>
            </sui-table-row>
        </sui-table-header>
        <sui-table-body>
            <sui-table-row
                    v-for="(row, index) in table.rows">
                <sui-table-cell>{{index + 1}}</sui-table-cell>
                <sui-table-cell v-for="(cell, key) in row">
                    <div v-if="key === 'Club'">
                        <sui-image :src="cell.badge" avatar />
                        <span>{{cell.name}}</span>
                    </div>
                    <div v-else>{{cell}}</div>
                </sui-table-cell>
            </sui-table-row>
        </sui-table-body>
    </sui-table>
    </div>
</template>

<script>
    export default {
        name: "StandingsTable",
        props: ['table'],
    }
</script>

<style scoped>

</style>
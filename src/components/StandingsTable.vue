<template>
    <div id="standings">
        <div class="ui container-fluid padded">
            <sui-dropdown
                    text="Sort By"
                    icon="sort"
                    labeled
                    button
                    class="icon grey basic small circular"
                    v-model="sorting"
                    :options="options"
            ></sui-dropdown>
        </div>
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
                        v-for="(row, index) in sortedList">
                    <sui-table-cell>{{index + 1}}</sui-table-cell>
                    <sui-table-cell v-for="(cell, key) in row">
                        <div v-if="key === 'Club'">
                            <sui-image :src="cell.badge" avatar/>
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
        data() {
            return {
                sorting: 'Pts',
                options:
                    [
                        {
                            key: 'Pts',
                            text: 'Pts',
                            value: 'Pts',
                        },
                        {
                            key: 'Club',
                            text: 'Club',
                            value: 'Club',
                        },
                        {
                            key: 'MP',
                            text: 'MP',
                            value: 'MP',
                        },
                        {
                            key: 'W',
                            text: 'W',
                            value: 'W',
                        },
                        {
                            key: 'D',
                            text: 'D',
                            value: 'D',
                        },
                        {
                            key: 'L',
                            text: 'L',
                            value: 'L',
                        },
                        {
                            key: 'GF',
                            text: 'GF',
                            value: 'GF',
                        },
                        {
                            key: 'GA',
                            text: 'GA',
                            value: 'GA',
                        },
                        {
                            key: 'GD',
                            text: 'GD',
                            value: 'GD',
                        },
                    ]
            }
        },
        computed: {
            sortedList: function () {
                let res = this.table.rows;
                if (this.sorting === 'MP')
                    return res.sort((a, b) => { return b.MP - a.MP;})
                if (this.sorting === 'W')
                    return res.sort((a, b) => { return b.W - a.W;})
                if (this.sorting === 'D')
                    return res.sort((a, b) => { return b.D - a.D;})
                if (this.sorting === 'L')
                    return res.sort((a, b) => { return b.L - a.L;})
                if (this.sorting === 'GF')
                    return res.sort((a, b) => { return b.GF - a.GF;})
                if (this.sorting === 'GA')
                    return res.sort((a, b) => { return b.GA - a.GA;})
                if (this.sorting === 'GD')
                    return res.sort((a, b) => { return b.GD - a.GD;})
                if (this.sorting === 'Pts')
                    return res.sort((a, b) => { return b.Pts - a.Pts;})
                if (this.sorting === 'Club')
                    return res.sort((a, b) => { return b.Club.name < a.Club.name? 1 : -1;})
                return res
            }
        }
    }
</script>

<style scoped>

</style>
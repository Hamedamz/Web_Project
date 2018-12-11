<template>
    <sui-table single-line unstackable inverted selectable color="black">
        <sui-table-body>
            <sui-table-row>
                <sui-table-cell :width="5">
                    Nick Name:
                </sui-table-cell>
                <sui-table-cell :width="11">
                    Tiger
                </sui-table-cell>
            </sui-table-row>
            <sui-table-row>
                <sui-table-cell :width="5">
                    Birth Place:
                </sui-table-cell>
                <sui-table-cell :width="11">
                    Philipin
                </sui-table-cell>
            </sui-table-row>
            <sui-table-row>
                <sui-table-cell :width="5">
                    Birth Date:
                </sui-table-cell>
                <sui-table-cell :width="11">
                    March 15, 1993 (Age: 25)
                </sui-table-cell>
            </sui-table-row>
            <sui-table-row>
                <sui-table-cell :width="5">
                    Experience:
                </sui-table-cell>
                <sui-table-cell :width="11">
                    20 years
                </sui-table-cell>
            </sui-table-row>
            <sui-table-row>
                <sui-table-cell :width="5">
                    College:
                </sui-table-cell>
                <sui-table-cell :width="11">
                    None
                </sui-table-cell>
            </sui-table-row>
        </sui-table-body>
    </sui-table>
</template>

<script>

    export default {
        name: "PlayerSpec",
        components: {}
    }
</script>

<style scoped>

</style>

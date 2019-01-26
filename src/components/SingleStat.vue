<template>

    <sui-table single-line unstackable inverted striped selectable color="black">
        <sui-table-body>
            <sui-table-row text-align="center">
                <sui-table-cell colspan="3">
                    {{stat.stat_kind}}
                </sui-table-cell>
            </sui-table-row>
            <progress-bar :stat="stat"></progress-bar>
        </sui-table-body>
    </sui-table>
</template>

<script>
    import ProgressBar from '@/components/ProgressBar'

    export default {
        name: "SingleStat",
        components: {ProgressBar},
        props: ['stat']
    }
</script>

<style scoped>

</style>

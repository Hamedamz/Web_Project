<template>
    <sui-table-body>
        <sui-table-row text-align="center">
            <sui-table-cell colspan="3">
                {{stat.name}}
            </sui-table-cell>
        </sui-table-row>
        <progress-bar :stat="stat"></progress-bar>
    </sui-table-body>
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

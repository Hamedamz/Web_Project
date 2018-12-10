<template>
    <div class="padded">
        <!--<sui-table single-line stackable inverted striped selectable color="black">-->
            <!--<sui-table-body>-->
            <single-stat v-for="st in stats" :key="1" :stat="st"></single-stat>
            <!--</sui-table-body>-->
        <!--</sui-table>-->

    </div>
</template>

<script>
    import SingleStat from "./SingleStat";

    export default {
        name: "MatchStatistics",
        components: {SingleStat},
        data() {
            return {
                stats: [{
                    name: 'Possession',
                    left: '30%',
                    right: '70%',
                    leftPercent: 30,
                },
                    {
                        name: 'Fouls',
                        left: 10,
                        right: 17,
                        leftPercent: 10 / 17 * 100,
                    },
                    {
                        name: 'OffSides',
                        left: 0,
                        right: 2,
                        leftPercent: 0,
                    }]
            }
        },
        props: ['stat']
    }
</script>

<style scoped>
    .padded {
        padding: 1rem 0;
    }

    .logo {
        height: 30px;
        width: 30px;
    }

    .salam {
        width: 100%;
        height: 20px;
        background: #f6f6f6;
    }
</style>

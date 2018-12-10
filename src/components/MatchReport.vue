<template>
    <div class="main">
        <sui-table single-line unstackable inverted striped selectable color="black" >
            <sui-table-body>
                <match-event v-for="ne in news" :news="ne" :key="ne.id"></match-event>
            </sui-table-body>
        </sui-table>
    </div>
</template>

<script>
    import MatchEvent from "@/components/MatchEvent"

    export default {
        name: "MatchReport",
        components: {
            MatchEvent
        },
        data(){
            return {
                news:[{
                    time:69,
                    main:'ahmad agha khata kard.',
                    icon:'&#x003C;',
                    id:0
                },{

                    time:9,
                    main:'mamad agha corner gereft.',
                    icon:'&#x0036;',
                    id:1
                }]
            }
        },
    }
</script>

<style scoped>
    .main{
        padding: 1rem 0;
    }
</style>

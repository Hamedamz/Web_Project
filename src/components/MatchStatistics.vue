<template>
    <div class="padded">
        <!--<sui-table single-line stackable inverted striped selectable color="black">-->
            <!--<sui-table-body>-->
            <single-stat v-for="st in stats" :key="st.stat_kind" :stat="st"></single-stat>
            <!--</sui-table-body>-->
        <!--</sui-table>-->

    </div>
</template>

<script>
    import SingleStat from "./SingleStat";
    import {APIService} from "@/APIService";

    export default {
        name: "MatchStatistics",
        components: {SingleStat},
        data() {
            return {
                stats: null
            }
        },
        props: ['stat'],
        mounted() {
            this.getStat()
        },
        methods: {
            getStat: function () {
                const apiURL = APIService.MATCH + 'stat/' + this.$route.params.id;
                const myInit = {
                    mode: 'cors',
                };

                const myRequest = new Request(apiURL, myInit);

                fetch(myRequest)
                    .then(response => response.json())
                    .then((data) => {
                        this.stats = data
                    })
                    .catch(error => console.log(error))
            }
        }
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

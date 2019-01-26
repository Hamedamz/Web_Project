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
    import {APIService} from "@/APIService";

    export default {
        name: "MatchReport",
        components: {
            MatchEvent
        },
        data(){
            return {
                news: null,
            }
        },
        mounted() {
            this.getReports()
        },
        methods: {
            getReports: function () {
                const apiURL = APIService.MATCH + 'report/' + this.$route.params.id;
                const myInit = {
                    mode: 'cors',
                };

                const myRequest = new Request(apiURL, myInit);

                fetch(myRequest)
                    .then(response => response.json())
                    .then((data) => {
                        this.news = data
                    })
                    .catch(error => console.log(error))

            }
        }
    }
</script>

<style scoped>
    .main{
        padding: 1rem 0;
    }
</style>

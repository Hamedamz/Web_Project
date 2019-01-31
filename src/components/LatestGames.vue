<template>
    <div class="latest-games">
        <sui-grid class="container-fluid horizontally padded">
            <sui-grid-column>
                <h2 is="sui-header" class="left floated" inverted>Latest Games</h2>
                <sui-button
                        @click="toggle_fav"
                        :basic="!subscriptions"
                        size="small"
                        color="red"
                        icon="heart"
                        floated="right"
                        circular
                >
                </sui-button>
            </sui-grid-column>
        </sui-grid>
        <sui-grid class="container-fluid stackable padded relaxed">
            <match-box
                :matches="footballMatches"
                :image="footballImage"
                v-if="!subscriptions"
                ></match-box>
            <match-box
                :matches="basketballMatches"
                :image="basketballImage"
                v-if="!subscriptions"
                ></match-box>
            <match-box
                    :matches="fav_footballMatches"
                    :image="footballImage"
                    v-if="subscriptions"
            ></match-box>
            <match-box
                    :matches="fav_basketballMatches"
                    :image="basketballImage"
                    v-if="subscriptions"
            ></match-box>
        </sui-grid>
    </div>
</template>

<script>
    import MatchBox from "@/components/MatchBox";
    import {APIService} from "@/APIService";
    export default {
        name: "latest-games",
        components: {MatchBox},
        data() {
            return {
                matches: null,
                fav_matches: null,
                footballMatches: null,
                fav_footballMatches: null,
                basketballMatches: null,
                fav_basketballMatches: null,

                footballImage: 'static/i4.jpg',
                basketballImage: 'static/i3.jpg',

                subscriptions: false,
            }
        },
        mounted() {
            this.getMatches();



        },
        methods: {
            toggle_fav() {
                this.subscriptions = ! this.subscriptions;
                if(this.subscriptions)
                    this.getFavGames()
            },
            getMatches() {
                const apiURL = APIService.MATCH + 'latest';
                const myInit = {
                    mode: 'cors',
                };

                const myRequest = new Request(apiURL, myInit);

                fetch(myRequest)
                    .then(response => response.json())
                    .then((data) => {
                        this.matches = data;
                        this.basketballMatches = this.matches.filter(post => post.sport === 'basketball');
                        this.footballMatches = this.matches.filter(post => post.sport === 'football');
                    })
                    .catch(error => console.log(error))
            },
            getFavGames: function() {
                const apiURL = APIService.MATCH + 'fav_matches/' + APIService.KEY;
                const myInit = {
                    mode: 'cors',
                };

                const myRequest = new Request(apiURL, myInit);

                fetch(myRequest)
                    .then(response => response.json())
                    .then((data) => {
                        this.fav_matches = data;
                        this.fav_basketballMatches = this.fav_matches.filter(post => post.sport === 'basketball');
                        this.fav_footballMatches = this.fav_matches.filter(post => post.sport === 'football');
                    })
            },

        }
    }
</script>

<style scoped>

</style>
<template>
    <full-page-image-container :image="team.camp" small="true" color="#1ba8a5">
        <template slot="header">
            <div class="flex">
                <sui-item-group>
                    <sui-item>
                        <sui-item-image size="tiny" class="circular" :src="team.icon"/>
                        <sui-item-content vertical-align="middle">
                            <sui-item-header class="team-name">{{team.name}}</sui-item-header>
                        </sui-item-content>
                    </sui-item>
                </sui-item-group>
                <div class="button">
                    <sui-button circular color="red" @click="subscribe" :icon="icon" :basic="!subscribed"><span
                            v-if="!subscribed">subscirbe</span></sui-button>
                </div>
            </div>
        </template>
        <template slot="main">
            <div class="league-menu">
                <sui-button-group :widths="4" class="padded">
                    <sui-button
                            v-for="tab in tabs"
                            :key="tab.name"
                            @click="currentTab = tab"
                            color="red"
                            :basic="currentTab.name !== tab.name"
                            :content="tab.name"
                    ></sui-button>
                </sui-button-group>
                <keep-alive>
                    <component
                            v-bind:is="currentTabComponent"
                            v-bind="currentTabProperties"
                            class="tab"
                    ></component>
                </keep-alive>
            </div>
        </template>
    </full-page-image-container>
</template>

<script>
    import FullPageImageContainer from "../layouts/FullPageImageContainer";
    import TeamPlayers from "@/components/TeamPlayers"
    import LatestNews from "@/components/LatestNews"
    import MatchTable from "@/components/MatchTable"

    export default {
        name: "Team",
        components: {FullPageImageContainer, TeamPlayers, LatestNews, MatchTable},
        data() {
            return {
                team: {
                    name: 'PARIS SAINT-GERMAIN',
                    camp: 'static/psg-stadium.jpg',
                    icon: 'static/psg.png'
                },
                posts: [
                    {
                        id: 1,
                        title: 'A home for the pride key to roaring Lions',
                        image: 'http://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F1128%2Fr470200_1296x729_16%2D9.png&w=544&h=306&scale=crop&cquality=80&location=origin',
                        type: 'small',
                        category: 'premiere league',
                        sport: 'football',
                    },
                    {
                        id: 3,
                        title: 'Wright Thompson: Italian football gets in your blood',
                        image: 'http://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0929%2Fr438829_1296x729_16%2D9.jpg&w=544&h=306&scale=crop&cquality=80&location=origin',
                        type: 'small',
                        category: 'premiere league',
                        sport: 'football',
                    },
                    {
                        id: 4,
                        title: 'By the numbers: Ronaldo equals 51-year-old record',
                        image: 'http://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0816%2Fr415461_2_608x342_16%2D9.jpg&w=544&h=306&scale=crop&cquality=80&location=origin',
                        type: 'small',
                        category: 'serie A',
                        sport: 'football',
                    },
                    {
                        id: 5,
                        title: 'Why Liverpool should sell Salah',
                        image: 'http://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0816%2Fr415458_608x342_16%2D9.jpg&w=544&h=306&scale=crop&cquality=80&location=origin',
                        type: 'small',
                        category: 'premiere league',
                        sport: 'football',
                    },
                    {
                        id: 6,
                        title: 'Who\'s more important to Man United: Pogba or Mourinho?',
                        image: 'http://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0816%2Fr415457_608x342_16%2D9.jpg&w=544&h=306&scale=crop&cquality=80&location=origin',
                        type: 'big',
                        category: 'premiere league',
                        sport: 'football',
                    },
                    {
                        id: 7,
                        title: 'Kylian Mbappe and the curse of winning a World Cup',
                        image: 'http://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0925%2Fr436811_1296x729_16%2D9.jpg&w=544&h=306&scale=crop&cquality=80&location=origin',
                        type: 'small',
                        category: 'World Cup',
                        sport: 'football',
                    },
                ],
                subscribed: false,
                tabs: [{name: 'News', comp: 'latest-news'}, {name: 'Squads', comp: 'team-players'}, {
                    name: 'Matches',
                    comp: 'match-table'
                }],
                currentTab: {name: 'News', comp: 'latest-news'},
                people:
                    {
                        players: [{
                            name: 'Michael Jordan',
                            age: 27,
                            joinedYear: 2013,
                            post: 'HalfBack',
                            image:'static/michael-avatar.png',
                            link:'http://localhost:8080/player'
                        },{
                            name: 'Daniel Alba',
                            age: 32,
                            joinedYear: 2018,
                            post: 'Left Defender',
                            image:'static/michael-avatar.png',
                            link:'http://localhost:8080/player'
                        },{
                            name: 'Dani',
                            age: 22,
                            joinedYear: 2010,
                            post: 'Right Attacker',
                            image:'static/michael-avatar.png',
                            link:'http://localhost:8080/player'
                        },],
                        faculty:[{
                            name: 'Carlos KeiRosh',
                            age: 51,
                            joinedYear: 2012,
                            post: 'Sar Morrabi',
                            image:'static/michael-avatar.png',
                            link:'/#'
                        },{
                            name: 'Ahmad Peirovani',
                            age: 65,
                            joinedYear: 1960,
                            post: 'komak Morrabi',
                            image:'static/michael-avatar.png',
                            link:'/#'
                        }]
                    }
            }
        },
        methods: {
            subscribe: function () {
                this.subscribed = !this.subscribed
            }
        },
        computed: {
            icon: function () {
                return this.subscribed ? 'like' : '';
            },
            currentTabComponent: function () {
                return this.currentTab.comp
            },
            currentTabProperties: function () {
                if (this.currentTabComponent === 'latest-news')
                    return {posts: this.posts};
                if (this.currentTabComponent === 'team-players')
                    return {people: this.people};
                return {};
            },
        },
    }
</script>

<style scoped>
    .team-name {
        font-size: xx-large !important;
        color: white !important;
    }

    .flex {
        display: flex;
        justify-content: space-between;
    }

    .button {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .padded {
        padding-bottom: 1rem;
    }
</style>

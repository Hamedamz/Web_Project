<template>
    <div id="leagues">
        <full-page-image-container small="true" color="#f00">
            <template slot="header">
                <sui-header class="header very large page-title" inverted>Leagues</sui-header>
            </template>
            <template slot="main">
                <sui-grid class="container-fluid stackable padded">
                    <sui-grid-row>
                        <sui-grid-column :width="8">
                            <sui-header inverted>Football</sui-header>
                            <sui-input v-model="footballQuery" placeholder="Search..." icon="search" inverted/>
                        </sui-grid-column>
                        <sui-grid-column :width="8">
                            <sui-header inverted>Basketball</sui-header>
                            <sui-input placeholder="Search..." icon="search" inverted/>
                        </sui-grid-column>
                    </sui-grid-row>
                    <sui-grid-row>
                        <sui-grid-column :width="8">
                            <transition-group
                                    name="staggered-fade"
                                    v-bind:css="false"
                                    v-on:before-enter="beforeEnter"
                                    v-on:enter="enter"
                                    v-on:leave="leave"
                            >
                                <div v-for="(item, index) in computedList"
                                     v-bind:key="item.name"
                                     v-bind:data-index="index"
                                     class="league-avatar">
                                    <sui-image :src="item.badge" avatar></sui-image>
                                    <span>{{item.name}}</span>
                                </div>
                            </transition-group>
                        </sui-grid-column>
                        <sui-grid-column :width="8">
                            <div v-for="league in basketballLeagues" class="league-avatar">
                                <sui-image :src="league.badge" avatar></sui-image>
                                <span>{{league.name}}</span>
                            </div>
                        </sui-grid-column>
                    </sui-grid-row>
                </sui-grid>
            </template>
        </full-page-image-container>

    </div>
</template>

<script>
    import FullPageImageContainer from "@/layouts/FullPageImageContainer";

    export default {
        name: "Leagues",
        components: {FullPageImageContainer},
        data() {
            return {
                footballQuery: '',
                footballLeagues: [
                    {name: 'UEFA Champions League', badge: '/static/eng1.png'},
                    {name: 'UEFA Europa League', badge: '/static/eng1.png'},
                    {name: 'English Premier League', badge: '/static/eng1.png'},
                    {name: 'English Championship', badge: '/static/eng1.png'},
                    {name: 'English FA Cup', badge: '/static/eng1.png'},
                    {name: 'English Carabao Cup', badge: '/static/eng1.png'},
                    {name: 'Spanish La Liga', badge: '/static/eng1.png'},
                    {name: 'German Bundesliga', badge: '/static/eng1.png'},
                    {name: 'Italian Serie A', badge: '/static/eng1.png'},
                ],
                basketballLeagues: [
                    {name: 'NBA', badge: '/static/eng1.png'},
                    {name: 'MLB', badge: '/static/eng1.png'},
                ],
            }
        },
        computed: {
            computedList: function () {
                var vm = this
                return this.footballLeagues.filter(function (item) {
                    return item.name.toLowerCase().indexOf(vm.footballQuery.toLowerCase()) !== -1
                })
            }
        },
        methods: {
            beforeEnter: function (el) {
                el.style.opacity = 0
                el.style.height = 0
            },
            enter: function (el, done) {
                var delay = el.dataset.index * 150
                setTimeout(function () {
                    Velocity(
                        el,
                        {opacity: 1, height: '3em'},
                        {complete: done}
                    )
                }, delay)
            },
            leave: function (el, done) {
                var delay = el.dataset.index * 150
                setTimeout(function () {
                    Velocity(
                        el,
                        {opacity: 0, height: 0},
                        {complete: done}
                    )
                }, delay)
            }
        }
    }
</script>

<style scoped>
    .league-avatar {
        color: white;
        padding: .5rem 0;
    }
    .page-title {
        font-size: xx-large !important;
    }
</style>
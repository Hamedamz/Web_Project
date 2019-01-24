<template>
    <div id="slider-nav" v-scroll="scrolling" :style="opacity">
        <div class="dimmer" v-if="isOpen" @click.prevent="isOpen = ! isOpen"></div>
        <div class="wrapper">
            <sui-container>
                <sui-header class="logo large" inverted>LOGO</sui-header>
                <sui-button @click="isOpen = !isOpen" icon="bars" floated="left" color="red" basic inverted
                            circular></sui-button>
                <sui-button icon="user" floated="right" basic inverted circular></sui-button>
                <sui-button icon="search" floated="right" basic inverted circular @click="toggleSearch">
                    <sui-input v-if="isSearch" v-model="search" class="transparent inverted search-input" @click.stop="" @></sui-input>
                </sui-button>
            </sui-container>
        </div>
        <div class="ui wide sidebar inverted vertical menu" :class="{visible: isOpen}">
            <div is="sui-segment" inverted class="nav-menu">
                <sui-accordion exclusive inverted transparent>
                    <router-link v-for="item in links" :key="item.id" :to="item.link" ><sui-list-item>{{item.name}}</sui-list-item></router-link>
                    <div v-for="menu in menus" :key="menu.id">
                    <sui-accordion-title>
                        <sui-icon name="dropdown" />
                        {{menu.name}}
                    </sui-accordion-title>
                    <sui-accordion-content>
                        <sui-list link>
                            <router-link v-for="item in menu.items" :key="item.id" :to="item.link" ><sui-list-item>{{item.name}}</sui-list-item></router-link>
                        </sui-list>
                    </sui-accordion-content>
                    </div>
                </sui-accordion>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "SliderNav",
        data() {
            return {
                alpha: 0,
                isOpen: false,
                isSearch: false,
                search: '',
                menus: [
                    {id: 1, name: 'Players', items: [{id: 11, name: 'Michael Jordan', link: '/player/87346498'}, {id: 12, name: 'Cristiano Ronaldo', link: '/player/23485985'},]},
                    {id: 2, name: 'Teams', items: [{id: 21, name: 'Barcelona', link: '/team/76503945'}, {id: 22, name: 'Golden State', link: '/team/10934370'},]},
                ],
                links: [
                    {id: 3, name: 'Home', link: '/'},
                    {id: 4, name: 'Leagues', link: '/leagues'}
                ]
            }
        },
        methods: {
            scrolling: function () {
                this.alpha = window.scrollY / 500;
                if (this.alpha > 1) this.alpha = 1;
            },
            toggleSearch: function () {
                this.isSearch = !this.isSearch;
                this.search.el.focus();
            }
        },
        computed: {
            opacity: function () {
                return "background: rgba(0,0,0," + this.alpha + ");"
            }
        }
    }
</script>

<style scoped>
    #slider-nav {
        position: fixed;
        padding: .75rem 0;
        z-index: 1000;
    }

    #slider-nav .wrapper {
        width: 100vw;
    }
    .search-input {
        margin: -0.5rem 0;
    }
    .logo {
        display: inline-block;
        text-align: center;
        margin: 0 auto !important;
        line-height: 40px;
        height: 40px;
    }

    .black {
        background: rgba(0, 0, 0, 0.75);
    }

    .wrapper {
        text-align: center;
    }
    .ui.wide.sidebar {
        width: 250px;
        background: linear-gradient(to right, rgb(0,0,0), rgba(0,0,0,0.8), rgba(0,0,0,0));
    }
    .nav-menu {
        background: none!important;
    }
    .dimmer {
        background: rgba(0, 0, 0, 0.1);
        z-index: auto;
        width: 100vw;
        height: 100%;
        position: fixed;
        margin-top: -.75rem;
    }
</style>
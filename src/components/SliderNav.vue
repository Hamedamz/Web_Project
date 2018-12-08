<template>
    <div id="slider-nav" v-scroll="scrolling" :style="opacity">
        <div class="dimmer" v-if="isOpen" @click.prevent="isOpen = ! isOpen"></div>
        <div class="wrapper">
            <sui-container>
                <sui-header class="logo large" inverted>LOGO</sui-header>
                <sui-button @click="isOpen = !isOpen" icon="bars" floated="left" color="red" basic inverted
                            circular></sui-button>
                <sui-button icon="user" floated="right" basic inverted circular></sui-button>
                <sui-button icon="search" floated="right" basic inverted circular><sui-input class="transparent search-input"></sui-input></sui-button>
            </sui-container>
        </div>
        <div class="ui wide sidebar inverted vertical menu" :class="{visible: isOpen}">
            <div is="sui-segment" inverted>
                <sui-accordion exclusive inverted>
                    <div v-for="menu in menus" :key="menu.id">
                    <sui-accordion-title>
                        <sui-icon name="dropdown" />
                        {{menu.name}}
                    </sui-accordion-title>
                    <sui-accordion-content>
                        <sui-list link>
                            <sui-list-item v-for="item in menu.items" :key="item.id">{{item.name}}</sui-list-item>
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
                menus: [
                    {id: 1, name: 'Football', items: [{id: 11, name: 'A'}, {id: 12, name: 'B'}, {id: 13, name: 'C'},]},
                    {id: 2, name: 'BasketBall', items: [{id: 21, name: 'A'}, {id: 22, name: 'B'}, {id: 23, name: 'C'},]},
                ]
            }
        },
        methods: {
            scrolling: function () {
                this.alpha = window.scrollY / 500;
                if (this.alpha > 1) this.alpha = 1;
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
    }
    .dimmer {
        background: rgba(0, 0, 0, 0.5);
        z-index: auto;
        width: 100vw;
        height: 100%;
        position: fixed;
        margin-top: -.75rem;
    }
</style>
<template>
    <div class="all">
        <div v-bind:class="{backT:scrolled}" class="float nav" v-scroll="scroling">
            <div class="logo">
                Elcampus
            </div>
            <div class="links float">
                <a href="#frontpage" v-bind:class="{inside:home}" class="hover_link">Home</a>
                <a href="#about" v-bind:class="{inside:soccer}" class="hover_link" @mouseover="socSub"
                   @mouseleave="leave">Soccer</a>
                <a href="#projects" v-bind:class="{inside:basket}" class="hover_link" @mouseover="basSub"
                   @mouseleave="leave">BasketBall</a>
            </div>
            <div class="float righted">
                <sui-button icon="user" color="white" inverted/>
                <sui-button icon="search" color="white" inverted/>
            </div>
        </div>
        <div @mouseover="showSub" @mouseleave="leave">
            <sub-nav v-if="subShow" :leagues="leas" class="sub"></sub-nav>
        </div>
    </div>
</template>

<script>
    import SubNav from "@/components/SubNav"

    export default {
        name: "nav-bar",
        components: {SubNav},
        data() {
            return {
                scrolled: false,
                soccerL: [{
                    name: 'SerA',
                    id: 1,
                    href: "#s"
                }, {
                    name: 'LaLeague',
                    id: 2,
                    href: "#a"
                }],
                basketL: [{
                    name: 'NBA',
                    id: 1,
                    href: "#s"
                }, {
                    name: 'MBA',
                    id: 2,
                    href: "#a"
                }],
                subShow: false,
                leas: this.soccerL,
                flag: false

            }
        },
        props: ['home', 'soccer', 'basket'],
        methods: {
            leave: function () {
                setTimeout(() => {
                    if (!this.flag) {
                        this.subShow = false
                    }
                }, 500)

                this.flag = false
            },
            socSub: function () {
                this.leas = this.soccerL;
                this.subShow = true
                this.flag = true

            },
            basSub: function () {
                this.leas = this.basketL;
                this.subShow = true
                this.flag = true

            },
            showSub: function () {
                this.subShow = true;
                this.flag = true
            },
            scroling: function () {
                if (window.scrollY > 10) {
                    this.scrolled = true
                }
                else {
                    this.scrolled = false
                }
            }
        }
    }
</script>

<style scoped>

    .float {
        display: flex;
    }

    .links {
        flex: 1;
    }

    .all {
        position: fixed;
        width: 100%;
        z-index: 1;
        font-family: Montserrat;
        font-size: 20px;

    }

    .nav {
        padding: 10px;
        justify-content: space-between;

    }

    .backT {
        background-color: rgba(0, 0, 0, 0.8) !important;
    }

    .hover_link {
        color: #ffffff;
        margin-left: 100px;
        letter-spacing: 1.2px;
        text-decoration: none;
    }

    .hover_link:after {
        border-bottom: 3px solid #40f8bf;
        content: "";
        display: block;
        margin: 0.25em auto 0;
        transition: width 250ms ease-in-out 0s;
        width: 0;
    }

    .logo {
        letter-spacing: 1.2px;
        text-decoration: none;
        font-style: italic;
        color: white;
        margin-left: 100px;
        font-size: 20px;
    }

    .hover_link:hover:after {
        transition: width 100ms ease-in-out 0s;
        width: 100%;
    }

    .inside {

        background: #fffbfd;
        color: #000;
    }

    .righted {
        padding: 0px 10px;

    }


</style>

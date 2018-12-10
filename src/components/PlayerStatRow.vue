<template>
    <sui-table-row>
        <sui-table-cell>{{player.id}}</sui-table-cell>
        <sui-table-cell>{{player.name}}
            <div v-show="subs">

                <span v-html="player.sIcon" class="font-icon"></span>
                <br/>
                <div>{{player.subs}}</div>
            </div>
        </sui-table-cell>
        <sui-table-cell >
            <span v-show="card">
                <transition name="fade" class="pad">
                    <span v-show="show" v-html="player.cIcon" class="font-icon"></span>
                </transition>
                <transition name="fade">
                    <span v-show="showTime">{{player.cardTime}}</span>
                </transition>
            </span>
            <div v-show="subs" class="pad">
                <transition name="fade">
                    <span v-show="show" v-html="player.sIcon" class="font-icon"></span>
                </transition>
                <transition name="fade">
                    <span v-show="showTime">{{player.subTime}}</span>
                </transition>
            </div>
        </sui-table-cell>
    </sui-table-row>
</template>

<script>
    export default {
        name: "PlayerStatRow",
        props: ['player'],
        methods: {
            mouse: function () {
                setTimeout(() => {
                    this.showTime = true;
                }, 520);
                setTimeout(() => {
                    this.mou();
                }, 3000);
                this.show = false;
            },
            mou: function () {
                setTimeout(() => {
                    this.show = true;
                }, 520);
                setTimeout(() => {
                    this.mouse();
                }, 3000);
                this.showTime = false;
            }
        },
        data() {
            return {
                show: true,
                showTime: false
            }
        },
        computed: {
            card: function () {
                if(this.player.cardTime !== undefined){
                    this.mouse();
                    return true;
                }
                return false

            },
            subs:function () {
                if(this.player.subs !== undefined){
                    this.mouse();
                    return true;
                }
                return false;
            }
        }
    }
</script>

<style scoped>

    .font-icon {
        font-family: 'ESPN';
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }
</style>

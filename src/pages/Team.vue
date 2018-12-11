<template>
    <full-page-image-container :image="team.camp" small="true" color="#1ba8a5">
        <template slot="header">
            <div class="flex">
                <sui-item-group>
                    <sui-item>
                        <sui-item-image size="medium" class="circular" :src="team.icon"/>
                        <sui-item-content vertical-align="middle">
                            <sui-item-header class="team-name">{{team.name}}</sui-item-header>
                        </sui-item-content>
                    </sui-item>
                </sui-item-group>
                <div class="button">
                    <sui-button circular color="red" @click="subscribe" :icon="icon" :basic="!subscribed"><span v-if="!subscribed">subscirbe</span></sui-button>
                </div>
            </div>
        </template>
        <template slot="main">
            <div>
                fj
            </div>
        </template>
    </full-page-image-container>
</template>

<script>
    import FullPageImageContainer from "../layouts/FullPageImageContainer";

    export default {
        name: "Team",
        components: {FullPageImageContainer},
        data() {
            return {
                team: {
                    name: 'PARIS SAINT-GERMAIN',
                    camp: 'static/psg-stadium.jpg',
                    icon: 'static/psg.png'
                },
                subscribed:false
            }
        },
        methods:{
            subscribe:function () {
                this.subscribed = !this.subscribed
            }
        },
        computed: {
            icon: function () {
                return this.subscribed ? 'like': '';
            }
        }
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
    .button{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
</style>

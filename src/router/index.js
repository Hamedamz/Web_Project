import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Match from '@/pages/Match'
import News from '@/pages/News'
import Player from '@/pages/Player'
import Team from '@/pages/Team'
import League from "@/pages/League";
import Leagues from "@/pages/Leagues";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/match/:id',
            name: 'Match',
            component: Match
        },
        {
            path: '/news/:id',
            name: 'News',
            component: News
        },
        {
            path: '/league/:id',
            name: 'League',
            component: League
        },
        {
            path: '/leagues',
            name: 'Leagues',
            component: Leagues
        },
        {
            path: '/player/:id',
            name: 'Player',
            component: Player
        },
        {
            path: '/team/:id',
            name: 'Team',
            component: Team
        },
        {
            path: '/',
            name: 'Home',
            component: Home
        },
    ]
})

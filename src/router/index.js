import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Match from '@/pages/Match'
import News from '@/pages/News'
import Player from '@/pages/Player'
import Team from '@/pages/Team'
import League from "@/pages/League";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/match',
            name: 'Match',
            component: Match
        },
        {
            path: '/news',
            name: 'News',
            component: News
        },
        {
            path: '/league',
            name: 'League',
            component: League
        },
        {
            path: '/player',
            name: 'Player',
            component: Player
        },
        {
            path: '/team',
            name: 'Team',
            component: Team
        },
    ]
})

<template>
    <!--<sui-grid-column :width="post.type === 'small' ? 4 : 8" class="news-card" :class="{big: post.type === 'big'}">-->
    <sui-grid-column :width="1 ? 4 : 8" class="news-card" :class="{big: 0}">
    <!--<sui-grid-column width='4' class="news-card">-->
        <router-link :to='"/news/" + post.id' ><img :src="post.news_pic" :alt="post.title"></router-link>
        <div class="post">
            <div class="post-cat" v-if="!isMedia">
                <sui-label
                        circular
                        :color="color"
                        empty
                ></sui-label>
                {{post.source.toUpperCase()}}
                <sui-icon name="calendar" class="inverted"></sui-icon>{{post.pub_date | formatDate}}
            </div>
            <!--<router-link to="/news/id"><h3 class="post-title" v-if="post.media !== 'photo'"><sui-icon name="play" v-if="post.media === 'video'"></sui-icon>{{post.title}}</h3></router-link>-->
            <router-link :to='"/news/" + post.id'><h3 class="post-title" ><sui-icon name="play" v-if="post.media === 'video'"></sui-icon>{{post.title}}</h3></router-link>
            <router-link :to='"/news/" + post.id'><sui-button circular size="mini" color="grey" basic v-if="!isMedia">Full Story</sui-button></router-link>
        </div>
    </sui-grid-column>
</template>

<script>
    export default {
        name: "NewsCard",
        props: ['post'],
        computed: {
            color: function () {
                return this.post.sport ===  'football' ? 'green' : 'orange';
            },
            isMedia: function () {
                return this.post.media === 'photo' || this.post.media === 'video'
            }
        }
    }
</script>

<style scoped>
    .news-card {
        position: relative;
        overflow: hidden;
        display: flex !important;
        flex-direction: column;
        align-items: stretch;
    }
    .news-card img {
        width: 100%;
        border-radius: 15px 15px 0 0;
    }
    .news-card.big img {
        border-radius: 15px;
        height: 100%;
    }
    .news-card.big .post {
        position: absolute;
        bottom: 1rem;
    }
    .post {
        background: linear-gradient(to left, #000, rgba(255, 255, 255, .1));
        padding: 0.75rem;
        width: 100%;
        border-radius: 0 0 15px 15px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: baseline;
    }
    .news-card.big .post {
        background: linear-gradient(rgba(0, 0, 0, 0), #000);
    }
    .post-cat {
        color: rgba(255, 255, 255, 0.5);
    }
    .post-title {
        color: white;
        margin: 0.5rem 0 1.5rem 0;
        font-size: x-large;
    }
</style>
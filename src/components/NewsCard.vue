<template>
    <sui-grid-column :width="post.type === 'small' ? 4 : 8" class="news-card" :class="{big: post.type === 'big'}">
        <img :src="post.image" :alt="post.title">
        <div class="post">
            <div class="post-cat">
                <sui-label
                        circular
                        :color="color"
                        empty
                ></sui-label>
                {{post.category.toUpperCase()}}
            </div>
            <h3 class="post-title">{{post.title}}</h3>
            <sui-button circular size="mini" color="grey" basic>Full Story</sui-button>
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
    .news-card > img {
        width: 100%;
        border-radius: 15px 15px 0 0;
    }
    .news-card.big > img {
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
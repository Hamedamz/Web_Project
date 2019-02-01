<template>
    <div class="latest-news">
        <sui-grid v-if="withHeader" class="container-fluid padded head">
            <h2 is="sui-header" inverted>{{withHeader}}</h2>
            <div v-if="withButtons">
                <sui-dropdown
                        text="Filter Posts"
                        icon="filter"
                        floating
                        labeled
                        button
                        class="icon grey basic small circular"
                        v-model="filter"
                        :options="options"
                ></sui-dropdown>
                <sui-dropdown
                        placeholder="count"
                        :options="post_count_options"
                        v-if="!subscriptions"
                        button
                        labeled
                        floating
                        class="icon grey basic small circular"
                        v-model="post_counts"
                />
                <sui-button
                        @click="subscriptions = ! subscriptions"
                        :basic="!subscriptions"
                        size="small"
                        color="red"
                        icon="heart"
                        circular
                >
                </sui-button>
            </div>
        </sui-grid>
            <sui-header inverted class="center aligned" v-if="subscriptions && favs.length === 0">You are not following any news yet!</sui-header>
        <transition-group name="cell" class="ui grid container-fluid stackable padded">
            <news-card
                    v-for="post in filteredPosts()"
                    :key="post.id"
                    :post="post"
                    :mediaOnly="mediaOnly"
                    class="cell"
            ></news-card>
        </transition-group>

    </div>
</template>


<script>
    import NewsCard from "@/components/NewsCard";
    import SuiDropdown from "semantic-ui-vue/dist/commonjs/modules/Dropdown/Dropdown";
    import SuiHeader from "semantic-ui-vue/dist/commonjs/elements/Header/Header";

    export default {
        name: "latest-news",
        components: {SuiHeader, SuiDropdown, NewsCard},
        props: ['posts', 'favs', 'withHeader', 'withButtons', 'mediaOnly'],
        data() {
            return {
                filter: 'All',
                post_counts: 5,
                subscriptions: false,
                post_count_options: [{
                    text: '5',
                    value: 5,
                }, {
                    text: '10',
                    value: 10,
                }, {
                    text: '15',
                    value: 15,
                }],
                options: [
                    {
                        key: 'All',
                        text: 'All',
                        value: 'All',
                    },
                    {
                        key: 'Football',
                        text: 'Football',
                        value: 'Football',
                        label: {color: 'green', empty: true, circular: true},
                    },
                    {
                        key: 'Basketball',
                        text: 'Basketball',
                        value: 'Basketball',
                        label: {color: 'orange', empty: true, circular: true},
                    },
                ]
            }
        },
        watch: {
            post_counts: function(val) {
                this.$emit('change-count', val)
            },
            subscriptions: function (val) {
                if (val)
                    this.$emit('get-fav')
            },
        },
        methods: {
            filterBySport(post) {
                return this.filter === 'All' || post.sport === this.filter.toLowerCase();
            },
            filteredPosts: function () {
                // return this.posts
                if (this.subscriptions)
                    return this.favs;
                let posts = this.posts.filter(this.filterBySport);
                if (!this.subscriptions)
                    posts = posts.slice(0, this.post_counts);
                return posts
            }
        }
    }
</script>

<style scoped>
    .latest-news {
        padding-top: 1rem;
    }

    .head {
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>
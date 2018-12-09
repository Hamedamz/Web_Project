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
        <sui-grid class="container-fluid stackable padded">
            <news-card
                    v-for="post in filteredPosts"
                    :key="post.id"
                    :post="post"
            ></news-card>
            <sui-grid-row>
                <sui-button basic inverted color="red" circular class="m-auto" icon="ellipsis horizontal"></sui-button>
            </sui-grid-row>
        </sui-grid>
    </div>
</template>


<script>
    import NewsCard from "@/components/NewsCard";
    import SuiDropdown from "semantic-ui-vue/dist/commonjs/modules/Dropdown/Dropdown";

    export default {
        name: "latest-news",
        components: {SuiDropdown, NewsCard},
        props: ['posts','withHeader', 'withButtons'],
        data() {
            return {
                filter: 'All',
                subscriptions: false,
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
        methods: {
            filterBySport(post) {
                return this.filter === 'All' || post.sport === this.filter.toLowerCase();
            }
        },
        computed: {
            filteredPosts: function () {
                return this.posts.filter(this.filterBySport)
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
    .m-auto {
        margin: 0 auto;
    }
</style>
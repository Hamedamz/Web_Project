<template>
    <div class="latest-news">
        <sui-grid class="container-fluid horizontally padded">
            <sui-grid-column>
                <sui-dropdown
                        text="Filter Posts"
                        icon="filter"
                        floating
                        labeled
                        button
                        class="icon inverted small"
                        v-model="filter"
                        :options="options"
                ></sui-dropdown>
                <sui-button
                        @click="subscriptions = ! subscriptions"
                        :basic="!subscriptions"
                        size="small"
                        color="red"
                        content="Subscriptions"
                        icon="heart"
                        floated="right">
                </sui-button>
            </sui-grid-column>
        </sui-grid>
        <sui-grid class="container-fluid stackable padded">
            <news-card
                    v-for="post in filteredPosts"
                    :key="post.id"
                    :post="post"
            ></news-card>
        </sui-grid>
    </div>
</template>


<script>
    import NewsCard from "@/components/NewsCard";
    import SuiDropdown from "semantic-ui-vue/dist/commonjs/modules/Dropdown/Dropdown";

    export default {
        name: "latest-news",
        components: {SuiDropdown, NewsCard},
        data() {
            return {
                posts: [
                    {
                        id: 1,
                        title: 'A home for the pride key to roaring Lions',
                        image: 'http://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F1128%2Fr470200_1296x729_16%2D9.png&w=544&h=306&scale=crop&cquality=80&location=origin',
                        type: 'small',
                        category: 'premiere league',
                        sport: 'football',
                    },
                    {
                        id: 2,
                        title: 'Predicting Kevin Durant\'s next team and NBA legacy',
                        image: 'http://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F1129%2Fr470235_2_608x342_16%2D9.jpg&w=544&h=306&scale=crop&cquality=80&location=origin',
                        type: 'small',
                        category: 'NBA',
                        sport: 'basketball',
                    },
                    {
                        id: 3,
                        title: 'Wright Thompson: Italian football gets in your blood',
                        image: 'http://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0929%2Fr438829_1296x729_16%2D9.jpg&w=544&h=306&scale=crop&cquality=80&location=origin',
                        type: 'small',
                        category: 'premiere league',
                        sport: 'football',
                    },
                    {
                        id: 4,
                        title: 'By the numbers: Ronaldo equals 51-year-old record',
                        image: 'http://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0816%2Fr415461_2_608x342_16%2D9.jpg&w=544&h=306&scale=crop&cquality=80&location=origin',
                        type: 'small',
                        category: 'serie A',
                        sport: 'football',
                    },
                    {
                        id: 5,
                        title: 'Why Liverpool should sell Salah',
                        image: 'http://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0816%2Fr415458_608x342_16%2D9.jpg&w=544&h=306&scale=crop&cquality=80&location=origin',
                        type: 'small',
                        category: 'premiere league',
                        sport: 'football',
                    },
                    {
                        id: 6,
                        title: 'Who\'s more important to Man United: Pogba or Mourinho?',
                        image: 'http://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0816%2Fr415457_608x342_16%2D9.jpg&w=544&h=306&scale=crop&cquality=80&location=origin',
                        type: 'big',
                        category: 'premiere league',
                        sport: 'football',
                    },
                    {
                        id: 7,
                        title: 'Kylian Mbappe and the curse of winning a World Cup',
                        image: 'http://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0925%2Fr436811_1296x729_16%2D9.jpg&w=544&h=306&scale=crop&cquality=80&location=origin',
                        type: 'small',
                        category: 'World Cup',
                        sport: 'football',
                    },
                ],

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
</style>
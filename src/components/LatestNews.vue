<template>
    <div class="latest-news">
        Latest News
    </div>
</template>


<script>
    import NewsCard from "@/components/NewsCard";

    export default {
        name: "latest-news",
        components: {NewsCard},
        data() {
            return {
                posts: [
                    {
                        id: 1,
                        title: 'post title',
                        image: 'https://semantic-ui-vue.github.io/static/images/avatar/large/steve.jpg',
                        type: 'small',
                    },
                    {
                        id: 2,
                        title: 'post title',
                        image: 'https://semantic-ui-vue.github.io/static/images/avatar/large/steve.jpg',
                        type: 'small',
                    },
                    {
                        id: 3,
                        title: 'post title',
                        image: 'https://semantic-ui-vue.github.io/static/images/avatar/large/steve.jpg',
                        type: 'small',
                    },
                    {
                        id: 4,
                        title: 'post title',
                        image: 'https://semantic-ui-vue.github.io/static/images/avatar/large/steve.jpg',
                        type: 'small',
                    },
                    {
                        id: 5,
                        title: 'post title',
                        image: 'https://semantic-ui-vue.github.io/static/images/avatar/large/steve.jpg',
                        type: 'small',
                    },
                ]
            }
        },
    }
</script>

<style scoped>

</style>
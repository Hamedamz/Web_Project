<template>
    <full-page-image-container :image="post.image">
        <template slot="header">
            <h1 is="sui-header" inverted class="post-title">
                {{post.title}}
            </h1>
        </template>
        <template slot="main">
            <div id="meta" class="white">
                <sui-label
                        circular
                        :color="color"
                        empty
                ></sui-label>
                {{post.category.toUpperCase()}}
                <sui-icon name="calendar" class="inverted"></sui-icon>{{post.time}}
                <sui-ladel color="red"></sui-ladel>
                <sui-button-group icons class="font-control" size="mini">
                    <sui-button @click="decrementSize" icon="minus" color="grey" basic/>
                    <sui-button @click="incrementSize" icon="plus" color="grey" basic/>
                </sui-button-group>
            </div>
            <sui-divider inverted></sui-divider>
            <div id="tags" class="ui tag labels inverted">
                <a is="sui-label"
                   v-for="tag in post.tags"
                   :key="tag.id"
                   tag
                   inverted
                   color="red"
                >
                    {{tag.name}}
                </a>
            </div>
            <sui-divider inverted></sui-divider>
            <div v-html="post.content" class="post-content" :style="fontSize"></div>
            <sui-divider></sui-divider>
            <latest-news :posts="relatedPosts" with-header="Related"></latest-news>
            <post-comments></post-comments>
        </template>
    </full-page-image-container>
</template>

<script>
    import FullPageImageContainer from "@/layouts/FullPageImageContainer";
    import PostComments from "@/components/PostComments";
    import LatestNews from "@/components/LatestNews";

    export default {
        name: "News",
        data() {
            return {
                size: 12,
                post: {
                    title: 'A home for the pride key to roaring Lions',
                    image: 'static/i6.jpg',
                    category: 'premiere league',
                    time: 'DEC 9 2018',
                    sport: 'football',
                    tags: [
                        {id: 1, name: 'ipsum'},
                        {id: 2, name: 'dolor'},
                        {id: 3, name: 'consectetuer'},
                    ],
                    content: "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\n" +
                        "<p>Proin pharetra nonummy pede. Mauris et orci. <strong>Aenean</strong> nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. </p>\n" +
                        "<p>Ut nonummy. Fusce <a>aliquet</a> pede non pede. Suspendisse dapibus lorem pellentesque magna. Integer nulla. Donec blandit feugiat ligula. Donec hendrerit, felis et imperdiet euismod, purus ipsum pretium metus, in lacinia nulla nisl eget sapien. Donec ut est in lectus consequat consequat. </p>\n" +
                        "<p>Etiam eget dui. Aliquam erat volutpat. Sed at lorem in nunc porta tristique. Proin nec augue. Quisque aliquam tempor magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc ac magna. </p>\n" +
                        "<p>Maecenas odio dolor, vulputate vel, auctor ac, accumsan id, felis. Pellentesque cursus sagittis felis. Pellentesque porttitor, velit lacinia egestas auctor, diam eros tempus arcu, nec vulputate augue magna vel risus. Cras non magna vel ante adipiscing rhoncus. Vivamus a mi. Morbi neque. Aliquam erat volutpat. </p>\n",
                },
                relatedPosts: [
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
                        title: 'Wright Thompson: Italian football gets in your blood',
                        image: 'http://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0929%2Fr438829_1296x729_16%2D9.jpg&w=544&h=306&scale=crop&cquality=80&location=origin',
                        type: 'small',
                        category: 'premiere league',
                        sport: 'football',
                    },
                    {
                        id: 3,
                        title: 'By the numbers: Ronaldo equals 51-year-old record',
                        image: 'http://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0816%2Fr415461_2_608x342_16%2D9.jpg&w=544&h=306&scale=crop&cquality=80&location=origin',
                        type: 'small',
                        category: 'serie A',
                        sport: 'football',
                    },
                    {
                        id: 4,
                        title: 'Why Liverpool should sell Salah',
                        image: 'http://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0816%2Fr415458_608x342_16%2D9.jpg&w=544&h=306&scale=crop&cquality=80&location=origin',
                        type: 'small',
                        category: 'premiere league',
                        sport: 'football',
                    },
                ],
            }
        },
        components: {LatestNews, PostComments, FullPageImageContainer},
        methods: {
            incrementSize: function () {
                if (this.size < 20)
                    this.size = this.size + 1;
            },
            decrementSize: function () {
                if (this.size > 9)
                    this.size = this.size - 1;
            }
        },
        computed: {
            color: function () {
                return this.post.sport === 'football'? 'green': 'orange';
            },
            fontSize: function () {
                return "font-size: " + this.size + "pt;"
            }
        }
    }
</script>

<style scoped>
    .post-title {
        font-size: 40pt!important;
    }
    .post-content {
        color: white;
    }
    .white {
        color: white;
    }
    .font-control {
        float: right;
    }
</style>
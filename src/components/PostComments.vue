<template>
    <div id="comments">
        <sui-comment-group class="inverted">
            <h3 is="sui-header" inverted>Comments</h3>
            <sui-divider inverted></sui-divider>

            <sui-comment v-for="comment in comments" :key="comment.id">
                <sui-comment-avatar :src="comment.profile.pic"/>
                <sui-comment-content>
                    <a is="sui-comment-author">{{comment.profile.user.username}}</a>
                    <sui-comment-metadata>
                        <div>{{comment.pub_date | formatDate}}</div>
                    </sui-comment-metadata>
                    <sui-comment-text>{{comment.text}}</sui-comment-text>
                </sui-comment-content>
            </sui-comment>

            <p v-if="!logged" class="text">Log in to send comments.</p>
            <form class="ui reply form" v-if="logged">
                <div class="field">
                    <textarea v-model="reply_body.text"></textarea>
                </div>
                <div class="field"></div>
                <sui-button
                        @click.stop.prevent="sendReply"
                        content="Add Reply"
                        label-position="left"
                        icon="edit"
                        primary
                ></sui-button>
            </form>
        </sui-comment-group>
    </div>
</template>

<script>
    import {APIService} from "@/APIService";

    export default {
        name: "PostComments",
        data () {
            return {
                reply_body: {
                    text: '',
                    news: '',
                    key: '',
                },
                reply_loading: false,
                comments: [],
            }
        },
        mounted() {
              this.getComments();
        },
        computed: {
            logged: function () {
                return APIService.loggedIn.logged
            }
        },
        watch: {
            '$route'() {
                this.getComments()
            },
        },
        methods: {
            sendReply: function() {
                this.reply_body.news = this.$route.params.id;
                this.reply_body.key = APIService.KEY;
                this.$http.post(APIService.COMMENTS +'send', this.reply_body, {emulateJSON: true, mode: 'cors'})
                    .then(response => response.json())
                    .then(this.getComments)
                    .then(() => this.reply_body.text = '')

            },
            getComments: function () {
                const apiURL = APIService.COMMENTS + this.$route.params.id;
                // const apiURL = APIService.LATEST_NEWS + 'filter/' + this.filterAPI() + '/' + this.player.first_name + "%20" + this.player.last_name;
                const myInit = {
                    mode: 'cors',
                };

                const myRequest = new Request(apiURL, myInit);

                fetch(myRequest)
                    .then(response => response.json())
                    .then((data) => {
                        this.comments = data
                    })
                    .catch(error => console.log(error))
            },
        }
    }
</script>

<style scoped>
    #comments {
        margin-top: 3rem;
    }

    .inverted .text, .inverted .author {
        color: white !important;
    }

    .inverted .metadata, .inverted .actions a {
        color: rgba(255, 255, 255, 0.5) !important;
    }
</style>
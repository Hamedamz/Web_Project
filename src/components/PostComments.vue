<template>
    <div id="comments">
        <sui-comment-group class="inverted">
            <h3 is="sui-header" inverted>Comments</h3>
            <sui-divider inverted></sui-divider>

            <sui-comment>
                <sui-comment-avatar src="static/matt.jpg"/>
                <sui-comment-content>
                    <a is="sui-comment-author">Matt</a>
                    <sui-comment-metadata>
                        <div>Today at 5:42PM</div>
                    </sui-comment-metadata>
                    <sui-comment-text>How artistic!</sui-comment-text>
                    <sui-comment-actions>
                        <sui-comment-action>Reply</sui-comment-action>
                    </sui-comment-actions>
                </sui-comment-content>
            </sui-comment>

            <sui-comment>
                <sui-comment-avatar src="static/elliot.jpg"/>
                <sui-comment-content>
                    <a is="sui-comment-author">Elliot Fu</a>
                    <sui-comment-metadata>
                        <div>Yesterday at 12:30AM</div>
                    </sui-comment-metadata>
                    <sui-comment-text>
                        <p>This has been very useful for my research. Thanks as well!</p>
                    </sui-comment-text>
                    <sui-comment-actions>
                        <sui-comment-action>Reply</sui-comment-action>
                    </sui-comment-actions>
                </sui-comment-content>
                <sui-comment-group>
                    <sui-comment>
                        <sui-comment-avatar src="static/jenny.jpg"/>
                        <sui-comment-content>
                            <a is="sui-comment-author">Jenny Hess</a>
                            <sui-comment-metadata>
                                <div>Just now</div>
                            </sui-comment-metadata>
                            <sui-comment-text>
                                Elliot you are always so right :)
                            </sui-comment-text>
                            <sui-comment-actions>
                                <sui-comment-action>Reply</sui-comment-action>
                            </sui-comment-actions>
                        </sui-comment-content>
                    </sui-comment>
                </sui-comment-group>
            </sui-comment>

            <sui-comment>
                <sui-comment-avatar src="static/joe.jpg"/>
                <sui-comment-content>
                    <a is="sui-comment-author">Joe Henderson</a>
                    <sui-comment-metadata>
                        <div>5 days ago</div>
                    </sui-comment-metadata>
                    <sui-comment-text>
                        Dude, this is awesome. Thanks so much
                    </sui-comment-text>
                    <sui-comment-actions>
                        <sui-comment-action>Reply</sui-comment-action>
                    </sui-comment-actions>
                </sui-comment-content>
            </sui-comment>

            <form class="ui reply form">
                <div class="field">
                    <textarea v-model="reply_body.text"></textarea>
                </div>
                <div class="field"></div>
                <sui-button
                        @click="sendReply"
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
                    news: this.$route.params.id,
                },
                reply_loading: false,
            }
        },
        methods: {
            sendReply: function() {
                this.reply_loading = true;
                this.$http.post('http://127.0.0.1:8000/news/comment/send/', this.reply_body)
            .then((response) => {
                    this.reply_loading = false;
                    // this.getArticles();
                })
                    .catch((err) => {
                        this.reply_loading = false;
                        console.log(err);
                    })
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
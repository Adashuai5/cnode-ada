<template>
    <div class="Article">
        <div class="loading" v-if="isLoading">
            <img src="../assets/loading.gif">
        </div>
        <div v-else>
            <div class="topic_header">
                <div class="topic_title"><span :class="[{put_good:(post.good === true)},{put_top:(post.top === true)}]">
                        <span>{{post | tabFormatter}}</span>
                    </span>{{post.title}}
                </div>
                <ul>
                    <li><span>发布于 {{post.create_at | formatDate}}</span></li>
                    <li>&nbsp<span>作者 {{post.author.loginname}}</span></li>
                    <li>&nbsp<span>{{post.visit_count}} 次浏览</span></li>
                    <li>&nbsp<span>来自 {{post | tabFormatter}}</span></li>
                </ul>
                <div v-html="post.content" class="topic_content"></div>
            </div>
            <div id="reply">
                <div class="topbar">{{post.reply_count}} 回复</div>
                <div class="replySec" v-for="(reply,index) in post.replies" :key="reply.id">
                    <div class="replyUp clearfix">
                        <img :src="reply.author.avatar_url">
                        <span> {{reply.author.loginname}} </span>
                        <span> {{index+1}} 楼</span><span>•{{reply.create_at | formatDate}} </span>
                        <span v-if="reply.author.loginname === post.author.loginname" class="author">作者</span>
                        <span v-if="reply.ups.length>0" class="ups">
                            <img src="../assets/submit.svg" class="submit"><span
                                class="ups_length clearfix">{{reply.ups.length}}</span>
                        </span>
                        <span v-else>
                        </span>
                        <p v-html="reply.content" class="content"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Aricle",
        data() {
            return {
                isLoading: false,
                post: {}
            }
        },
        methods: {
            getArticleData() {
                this.$axios.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
                    .then((res) => {
                        this.isLoading = false
                        this.post = res.data.data
                        console.log(res);
                    })
                    .catch((err) => {
                        alert(err)
                    })
            }
        },
        beforeMount() {
            this.isLoading = true
            this.getArticleData()
        }
    }
</script>

<style lang="scss">
    @import url('../assets/markdown-github.css');

    .Article {
        background-color: #e1e1e1;
        &:not(:first-child) {
            margin-right: 340px;
            margin-top: 15px;
        }

        a {
            text-decoration: none;
            color: black;
            &:hover {
                text-decoration: underline;
            }
        }

        > .loading {
            text-align: center;
            padding-top: 300px;
        }

        .topic_header {
            background: #fff;
            padding: 10px;
            border-radius: 3px;
            .topic_title {
                font-size: 22px;
                font-weight: 700;
                margin: 8px 0;

                .put_good, .put_top {
                    background: #80bd01;
                    padding: 2px 4px;
                    border-radius: 3px;
                    color: #fff;
                    font-size: 12px;
                    margin-right: 10px;
                }
            }

            ul {
                list-style: none;
                margin: 6px 0px;
                li {
                    display: inline-block;
                    font-size: 12px;
                    color: #838383;
                    span:before {
                        content: '• ';
                    }
                }
            }

            .topic_content {
                line-height: 2em;
                border-top: 1px solid #e5e5e5;
                padding: 0 10px;
                .markdown-text img {
                    width: 92% !important;
                }
            }
        }

        #reply {
            background: #fff;
            border-radius: 3px;
            margin-top: 15px;
            .topbar {
                padding: 10px;
                background-color: #f6f6f6;
                height: 16px;
                font-size: 12px;
                margin-top: 10px;
            }

            .replySec {
                padding: 10px 0 10px 10px;
                border-bottom: 1px solid #e5e5e5;
                position: relative;
                font-size: 14px;
                img {
                    width: 30px;
                    height: 30px;
                    position: relative;
                    bottom: -14px;
                    border-radius: 3px;
                }

                .replyUp {
                    .author {
                        color: #fff;
                        background-color: #6ba44e;
                        padding: 2px;
                        font-size: 12px;
                    }

                    a, span {
                        font-size: 13px;
                        color: #666;
                    }

                    .clearfix::after {
                        content: '';
                        display: block;
                        clear: both;
                    }

                    .ups {
                        float: right;
                        margin-right: 20px;
                        font-size: 15px;
                        .submit {
                            height: 1.2em;
                            &:hover {
                                color: #000;
                                opacity: .6;
                            }
                        }
                    }
                }

                .content {
                    margin-bottom: 1em;
                    font-size: 15px;
                    line-height: 1.7em;
                    overflow: auto;
                    padding-left: 3em;
                }
            }
        }
    }
</style>
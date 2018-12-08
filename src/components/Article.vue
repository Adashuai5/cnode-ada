<template>
    <div class="Article">
        <div>
            <div class="topic_header">
                <div class="header">
                    <div class="topic_title"><span
                            :class="[{put_good:(post.good === true)},{put_top:(post.top === true)}]">
                        <span>{{post | tabFormatter}}</span>
                    </span>{{post.title}}
                    </div>
                    <ul>
                        <li><span>发布于 {{post.create_at | formatDate}}</span></li>
                        <li>&nbsp<span>作者
                            <router-link :to="{name:'user_info',params:{
                                name: post.author.loginname
                            }}">
                                {{post.author.loginname}}
                            </router-link>
                        </span></li>
                        <li>&nbsp<span>{{post.visit_count}} 次浏览</span></li>
                        <li>&nbsp<span>来自 {{post | tabFormatter}}</span></li>
                    </ul>
                </div>
                <div v-html="post.content" class="topic_content" id="content"></div>
            </div>
            <div id="reply">
                <div class="topbar">{{post.reply_count}} 回复</div>
                <div class="replySec" v-for="(reply,index) in post.replies" :key="reply.id">
                    <div class="replyUp clearfix">
                        <router-link :to="{name:'user_info',params:{
                            name: reply.author.loginname
                            }
                        }">
                            <img :src="reply.author.avatar_url">
                        </router-link>
                        <router-link :to="{name:'user_info',params:{
                            name: reply.author.loginname
                            }
                        }"><span class="loginname">{{reply.author.loginname}} </span>
                        </router-link>
                        <span> {{index+1}} 楼</span><span>•{{reply.create_at | formatDate}} </span>
                        <span v-if="reply.author.loginname === post.author.loginname" class="author">作者</span>
                        <span v-if="reply.ups.length>0" class="ups">
                            <img src="../assets/submit.svg" class="submit"><span
                                class="ups_length">{{reply.ups.length}}</span>
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
                post: {}
            }
        },
        methods: {
            getArticleData() {
                this.$axios.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
                    .then((res) => {
                        this.post = res.data.data
                    })
                    .catch((err) => {
                        alert(err)
                    })
            }
        },
        beforeMount() {
            this.getArticleData()
        },
        watch: {
            '$route'(to, from) {
                this.getArticleData()
            }
        }
    }
</script>

<style lang="scss">
    @import url('../assets/markdown-github.css');

    .Article {
        background-color: #e1e1e1;
        &:not(:first-child) {
            margin-right: 305px;
            margin-top: 15px;
        }

        a {
            text-decoration: none;
            color: black;
        }
        @import url('../assets/loading.css');

        .topic_header {
            background: #fff;
            border-radius: 3px;
            .header {
                padding: 10px;
                .topic_title {
                    font-size: 22px;
                    font-weight: 700;
                    margin: 8px 0;
                    width: 75%;
                    .put_good, .put_top {
                        background: #80bd01;
                        padding: 2px 4px;
                        border-radius: 3px;
                        color: #fff;
                        font-size: 12px;
                        margin-right: 8px;
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

                        a {
                            color: #838383;
                            &:hover {
                                text-decoration: underline;
                            }
                        }

                    }
                }
            }

            .topic_content {
                border-top: 1px solid #e5e5e5;
                padding: 10px;
                .markdown-text {
                    margin: 10px;
                    img {
                        max-width: 100% !important;
                    }
                }

            }
        }

        #reply {
            background: #fff;
            margin-top: 15px;
            .topbar {
                padding: 10px;
                background-color: #f6f6f6;
                font-size: 14px;
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

                    span {
                        font-size: 13px;
                        color: #666;
                    }

                    .loginname {
                        padding-left: 10px;
                        font-weight: 700;
                        &:hover {
                            color: #385f8a;
                        }
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
                        .ups_length {
                            color: #666;
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
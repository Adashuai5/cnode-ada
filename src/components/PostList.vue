<template>
    <div class="PostList">
        <div id="loading" v-if="isLoading"></div>
        <div class="posts" v-else>
            <ul>
                <li>
                    <div class="toobar">
                        <span class="active">全部</span>
                        <span @click="alert">精华</span>
                        <span @click="alert">分享</span>
                        <span @click="alert">问答</span>
                        <span @click="alert">招聘</span>
                    </div>
                </li>
                <li v-for="post in posts" :key="post.id">
                    <router-link :to="{name:'user_info',params:{
                        name: post.author.loginname
                        }
                    }">
                        <img :src="post.author.avatar_url">
                    </router-link>
                    <span class="allcount">
                        <span class="reply_count">{{post.reply_count}}</span>
                        /<span class="visit_count"> {{post.visit_count}}</span>
                    </span>
                    <span :class="[{put_good:(post.good === true)},{put_top:(post.top === true)},{topiclist_tab:(post.good  !== true && post.top  !== true)}]">
                        <span>{{post | tabFormatter}}</span>
                    </span>
                    <router-link :to="{name:'post_content',
                    params:{
                        id: post.id,
                        name: post.author.loginname
                    }}" class="topic_link">
                        {{post.title}}
                    </router-link>
                    <span class="last_reply">{{post.last_reply_at | formatDate}}</span>
                </li>
                <li>
                    <Pagination @handlePage="renderPage"></Pagination>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Pagination from './Pagination'

    export default {
        name: "Postlist",
        data() {
            return {
                isLoading: false,
                postPage: 1,
                posts: []
            }
        },
        components: {
            Pagination
        },
        methods: {
            getData() {
                this.$axios.get('https://cnodejs.org/api/v1/topics', {
                    params: {
                        page: this.postPage,
                        limit: 20
                    }
                }).then(res => {
                    this.isLoading = false
                    this.posts = res.data.data
                    // console.log(res);
                }).catch((err) => {
                    alert(err);
                })
            },
            renderPage(value) {
                this.postPage = value
                this.getData()
            },
            alert() {
                alert(`由于该页与'全部'页面完全一致，暂时未做。。`)
            }
        },
        beforeMount() {
            this.isLoading = true
            this.getData()
        }
    }
</script>

<style scoped lang="scss">
    @import url('../assets/loading.css');

    @media (max-width: 979px) {
        .PostList {
            width: 100%;
            min-width: 0;
            .posts {
                margin: 0 5px;
                ul {
                    list-style: none;
                    width: 100%;
                    max-width: 979px;
                    margin: 0 auto;
                    .toobar {
                        background-color: #f5f5f5;
                        border-radius: 3px 3px 0 0;
                        padding: 10px;
                        & > span {
                            font-size: 14px;
                            color: #80bd01;
                            margin: 0 12px;
                            cursor: pointer;

                            &:hover {
                                color: #9e78c0;
                            }

                            &.active {
                                padding: 3px 4px;
                                border-radius: 3px;
                                color: #fff;
                                background: #80bd01;
                            }
                        }
                    }
                }
            }
        }
    }

    .PostList {
        background-color: #e1e1e1;
        a {
            text-decoration: none;
            color: black;
            font-size: 16px;

            &:hover {
                text-decoration: underline;
            }
            &:visited {
                color: #888;
            }
        }

        > .posts {
            margin-top: 10px;
            ul {
                list-style: none;
                width: 100%;
                max-width: 1344px;
                margin: 0 auto;
                .toobar {
                    background-color: #f5f5f5;
                    border-radius: 3px 3px 0 0;
                    padding: 10px;
                    & > span {
                        font-size: 14px;
                        color: #80bd01;
                        margin: 0 12px;
                        cursor: pointer;

                        &:hover {
                            color: #9e78c0;
                        }

                        &.active {
                            padding: 3px 4px;
                            border-radius: 3px;
                            color: #fff;
                            background: #80bd01;
                        }
                    }
                }

                li:not(:first-child) {
                    padding: 10px;
                    font-size: 15px;
                    font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", STHeiti, sans-serif !important;
                    font-weight: 400;
                    background-color: white;
                    color: #333;
                    border-top: 1px solid #f0f0f0;
                    &:hover {
                        background: #f5f5f5;;
                    }

                    .topic_link {
                        padding-left: 5px;
                        line-height: 30px;
                        vertical-align: middle;
                        display: inline-block;
                        max-width: 752px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    img {
                        border-radius: 3px;
                        height: 30px;
                        width: 30px;
                        vertical-align: middle;
                    }

                    .allcount {
                        width: 70px;
                        display: inline-block;
                        text-align: center;
                        font-size: 12px;
                    }

                    .reply_count {
                        color: #9e78c0;
                        font-size: 14px;
                    }

                    .visit_count {
                        font-size: 10px;
                        color: #b4b4b4;
                    }

                    .put_good, .put_top {
                        background: #80bd01;
                        padding: 2px 4px;
                        border-radius: 3px;
                        color: #fff;
                        font-size: 12px;
                    }

                    .topiclist_tab {
                        background-color: #e5e5e5;
                        color: #999;
                        padding: 2px 4px;
                        border-radius: 3px;
                        font-size: 12px;
                    }

                    .last_reply {
                        text-align: right;
                        min-width: 50px;
                        display: inline-block;
                        white-space: nowrap;
                        float: right;
                        color: #778087;
                        font-size: 12px;
                    }
                }

                li:last-child {
                    border-radius: 0 0 3px 3px;
                    border-top: none;
                    &:hover {
                        background: white;
                    }
                }
            }
        }
    }

</style>
<template>
    <div class="UserInfo">
        <div class="loading" v-if="isLoading">
            <img src="../assets/loading.gif">
        </div>
        <div v-else class="userInfomation">
            <div class="header">
                <a href="/">主页</a>
                <span class="divider">/</span>
            </div>
            <section class="clearfix">
                <img :src="userinfo.avatar_url" alt="头像">
                <span class="loginname">{{userinfo.loginname}}</span>
                <p class="user_profile">{{userinfo.score}} 积分</p>
                <p class="col_fade">注册时间 {{userinfo.create_at | formatDate}}</p>
            </section>
            <div class="topics">
                <p class="topics_title">最近创建的话题</p>

                <ul>
                    <li v-for="item in userinfo.recent_topics" :key="item.id">
                        <router-link :to="{name:'user_info',params:{
                            name: item.author.loginname
                            }
                        }">
                            <img :src="item.author.avatar_url">
                        </router-link>
                        <router-link :to="{name:'post_content',params:{
                                id: item.id
                            }
                        }" class="title">
                            {{item.title}}
                        </router-link>
                        <span class="last_reply">{{item.last_reply_at | formatDate}}</span>
                    </li>
                </ul>
            </div>
            <div class="replies">
                <p class="replies_title">最近参与的话题</p>
                <ul>
                    <li v-for="item in userinfo.recent_replies" :key="item.id">
                        <router-link :to="{name:'user_info',params:{
                            name: item.author.loginname
                            }
                        }">
                            <img :src="item.author.avatar_url">
                        </router-link>
                        <router-link :to="{name:'post_content',params:{
                                id: item.id
                            }
                        }" class="title">
                            {{item.title}}
                        </router-link>
                        <span class="last_reply">{{item.last_reply_at | formatDate}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserInfo",
        data() {
            return {
                isLoading: false,
                userinfo: {}
            }
        },
        beforeMount() {
            this.isLoading = true
            this.getUserInfoData()
        },
        methods: {
            getUserInfoData() {
                this.$axios.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
                    .then(res => {
                        this.isLoading = false
                        this.userinfo = res.data.data
                        // console.log(res);
                    })
                    .catch((err) => {
                        alert(err);
                    })
            }
        }
    }
</script>

<style scoped lang="scss">
    .UserInfo {
        padding-right: 20px;
        .userInfomation {
            background: white;
            margin: 10px auto;
            .header {
                padding: 10px;
                background-color: #f6f6f6;
                a {
                    color: #80bd01;
                    text-decoration: none;
                    &:hover {
                        text-decoration: underline;
                    }
                }
                .divider {
                    padding: 0 5px;
                    color: #ccc;
                }
            }

            clearfix::after {
                content: '';
                display: block;
                clear: both;
            }

            section {
                font-size: 14px;
                padding: 10px;
                border-top: 1px solid #e5e5e5;
                img {
                    width: 40px;
                    height: 40px;
                    margin-right: 10px;
                    float: left;
                }

                .loginname {
                    color: #778087;
                }

                .user_profile {
                    font-size: 14px;
                    padding: 10px;
                    margin-top: 20px;
                    clear: left;
                }

                .col_fade {
                    color: #ababab;
                    margin-bottom: 10px;
                }
            }

            img {
                border-radius: 3px;
                height: 30px;
                width: 30px;
                vertical-align: middle;
                margin-right: 10px;
            }

            li {
                list-style: none;
                border-top: 1px solid #f0f0f0;
                .title {
                    padding: 10px 0;
                    max-width: 70%;
                    white-space: nowrap;
                    display: inline-block;
                    vertical-align: middle;
                    font-size: 16px;
                    line-height: 30px;
                }
            }

            .replies,
            .topics {
                font-size: 0.72rem;
                border-top: 10px #ddd solid;
                .topics_title,
                .replies_title {
                    padding: 12px;
                    background-color: rgba(212, 205, 205, 0.17);
                    font-size: 0.75rem;
                    margin: 0;
                    border-radius: 3px 3px 0 0;
                }
                ul > li {
                    padding: 4px 0 4px 12px;
                    white-space: nowrap;
                    font-size: 0.72rem;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    line-height: 30px;
                    vertical-align: middle;
                    a {
                        color: #08c;
                        text-decoration: none;
                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
            }

            .last_reply {
                text-align: right;
                min-width: 50px;
                display: inline-block;
                white-space: nowrap;
                float: right;
                color: #778087;
                font-size: 12px;
                margin-right: 10px;
            }
        }
    }
</style>
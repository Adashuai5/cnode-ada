<template>
    <div class="autherinfo">
        <div class="authersummay">
            <div class="topbar">作者</div>
            <router-link :to="{
              name:'user_info',
              params:{
                name:userinfo.loginname
              }
            }">
                <img :src="userinfo.avatar_url">
            </router-link>
            <router-link :to="{
              name:'user_info',
              params:{
                name:userinfo.loginname
              }
            }">
                <span class="loginname">{{userinfo.loginname}}</span>
            </router-link>
            <p class="user_profile"> 积分: {{userinfo.score}}</p>
        </div>
        <div class="recent_topics">
            <div class="topics_title">作者最近主题</div>
            <div class="inner">
                <ul>
                    <li v-for="list in topcilimit" :key="list.id">
                        <router-link :to="{
                        name:'post_content',
                        params:{
                          id:list.id,
                          name:list.author.loginname
                        }
                    }">
                            {{list.title}}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="recent_replies">
            <div class="replies_title">作者最近回复</div>
            <div class="inner">
                <ul>
                    <li v-for="list in replylimit" :key="list.id">
                        <router-link :to="{
                        name:'post_content',
                        params:{
                          id:list.id,
                          name:list.author.loginname
                        }
                    }">
                            {{list.title}}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SlideBar",
        data() {
            return {
                isLoading: false,
                userinfo: {}
            }
        },
        methods: {
            getSlideBarData() {
                this.$axios.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
                    .then(res => {
                        this.isLoading = false;
                        this.userinfo = res.data.data;
                        // console.log(res);
                    })
                    .catch(function (err) {
                        alert(err)
                    })
            }
        },
        computed: {
            topcilimit() {
                if (this.userinfo.recent_topics) {
                    return this.userinfo.recent_topics.slice(0, 5);
                }
            },
            replylimit() {
                if (this.userinfo.recent_replies) {
                    return this.userinfo.recent_replies.slice(0, 5);
                }
            }
        },
        beforeMount() {
            this.isLoading = true;
            this.getSlideBarData();
        }
    }
</script>

<style scoped lang="scss">

    .autherinfo {
        width: 290px;
        float: right;
        .authersummay {
            border-radius: 3px;
            background-color: #fff;
            .topbar {
                padding: 13px;
                background-color: #f6f6f6;
                font-size: 13px;
            }

            img {
                height: 48px;
                width: 48px;
                border-radius: 3px;
                margin: 10px;
            }

            a {
                text-decoration: none;
                color: #778087;
                .loginname {
                    width: 100px;
                    float: right;
                    margin-top: 22px;
                    margin-right: 121px;
                    font-size: 16px;
                }
            }

            .user_profile {
                padding: 10px;
                font-size: 14px;
            }
        }

        .recent_replies,
        .recent_topics {
            border-radius: 3px;
            background-color: #fff;
            .topics_title,
            .replies_title {
                border-top: 10px #ddd solid;
                padding: 12px;
                background-color: rgba(212, 205, 205, 0.17);
                font-size: 0.75rem;
                margin: 0;
                border-radius: 3px 3px 0 0;
            }
            .inner {
                padding: 10px;
                ul {
                    list-style: none;
                    margin-bottom: 10px;
                    li {
                        white-space: nowrap;
                        max-width: 270px;
                        line-height: 30px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        a {
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            font-size: 12px;
                            text-decoration: none;
                            color: #778087;
                        }
                    }
                }
            }
        }

    }

    .authersummay .topbar {
        margin-top: 0px;
    }
</style>
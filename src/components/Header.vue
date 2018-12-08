<template>
    <div class="header">
        <div class="header-inner">
            <div class="container clearfix">
                <a href="/" class="brand">
                    <img src="../assets/cnode-ada.svg" alt="">
                </a>
                <ul class="navbar">
                    <li><a href="/">首页</a></li>
                    <li><a href="#">新手入门</a></li>
                    <li><a href="#">API</a></li>
                    <li><a href="#">关于</a></li>
                    <li><a href="#">注册</a></li>
                    <li><a href="#">登录</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang="scss">
    .clearfix::after {
        content: '';
        display: block;
        clear: both;
    }

    .header {
        background: #444444;
        width: 100%;
        font-size: 13px;
        .header-inner {
            width: 90%;
            padding: 5px;
            margin: auto;
            min-height: 40px;
            .container {
                width: 100%;
                min-width: 960px;
                max-width: 1400px;
                margin: 0 auto;
                .brand {
                    display: block;
                    width: 120px;
                    padding: 3px 20px;
                    margin-left: -20px;
                    line-height: 34px;
                    height: 34px;
                    color: #ccc;
                    font-weight: 700;
                    float: left;
                    > img {
                        width: 120px;
                    }
                }

                .navbar {
                    list-style: none;
                    float: right;
                    > li {
                        display: inline-flex;
                        line-height: 20px;
                        padding: 10px 15px;
                        > a {
                            text-decoration: none;
                            color: #ccc;
                            &:hover {
                                color: #fff;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
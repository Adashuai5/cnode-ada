<template>
    <div class="header">
        <div class="header-inner">
            <div class="container">
                <router-link :to="{name: 'root'}" class="brand">
                    <img src="../assets/cnode-ada.svg" alt="">
                </router-link>
                <ul class="navbar">
                    <li>
                        <router-link :to="{name: 'root'}">首页</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'about'}">关于</router-link>
                    </li>
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
    .header {
        background: #444444;
        width: 100%;
        font-size: 13px;
        .header-inner {
            width: 90%;
            padding: 5px;
            margin: auto;
            min-height: 40px;
            &:after, &:before {
                display: table;
                line-height: 0;
                content: "";
            }
            .container {
                display: flex;
                justify-content: space-between;
                width: 100%;
                max-width: 1400px;
                margin: 0 auto;
                flex-wrap: wrap;
                .brand {
                    padding: 3px 20px;
                    margin-left: -20px;
                    line-height: 34px;
                    height: 34px;
                    color: #ccc;
                    font-weight: 700;
                    img {
                        width: 120px;
                    }
                }

                .navbar {
                    margin-right: 20px;
                    list-style: none;
                    display: flex;
                    clear: both;
                    li {
                        line-height: 20px;
                        padding: 10px 15px;
                        a {
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

    @media (max-width: 979px) {
        .header {
            margin: 0 5px;
            .container {
                width: 100%;
                min-width: 0;
                flex-wrap: wrap;
                .navbar {
                    clear: both;
                }
            }
        }
    }
</style>

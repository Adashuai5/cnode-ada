<template>
    <div id="app">
        <Header></Header>
        <div class="main clearfix">
            <router-view name="slidebar"></router-view>
            <router-view name="main"></router-view>
        </div>
        <footer>
            <div class="footer_main">
                © zhouyuanda.top 2018 wechat:ddlyf873606339
            </div>
        </footer>
    </div>
</template>

<script>
    import Header from './components/Header'

    export default {
        name: "App",
        components: {
            Header
        }
    }

</script>

<style>
    * {
        margin: 0;padding: 0;
        box-sizing: border-box;
    }

    clearfix::after {
        content: '';
        display: block;
        clear: both;
    }

    body {
        min-height: 100vh;
        background: #E1E1E1;
        font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", STHeiti, sans-serif !important;
    }

    .main {
        width: 90%;
        max-width: 1400px;
        min-width: 960px;
        margin: 15px auto;
        min-height: 400px;
    }

    footer {
        clear: both;
        background: #fff;
    }

    .footer_main {
        display: flex;
        justify-content: center;
        width: 90%;
        max-width: 1400px;
        min-width: 960px;
        margin: 0 auto;
        color: #e2e2e2;
        padding: 22px 0;
        font-size: 13px;
        line-height: 2em;
    }

</style>

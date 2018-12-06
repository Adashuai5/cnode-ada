<template>
    <div id="app">
        <Header></Header>
        <div class="main clearfix">
            <router-view name="slidebar"></router-view>
            <router-view name="main"></router-view>
        </div>
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
    }

    clearfix::after {
        content: '';
        display: block;
        clear: both;
    }

    body {
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
</style>

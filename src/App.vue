<template>
    <div id="app">
        <Header></Header>
        <div class="main">
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

    body {
        background: #E1E1E1;
    }

    .main {
        width: 90%;
        max-width: 1400px;
        min-width: 960px;
        margin: 15px auto;
        min-height: 400px;
    }
</style>

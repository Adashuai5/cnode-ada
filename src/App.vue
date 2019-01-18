<template>
  <div id="app">
    <Header></Header>
    <main>
      <router-view name="slidebar"></router-view>
      <router-view name="main"></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  background: #e1e1e1;
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma,
    "Hiragino Sans GB", STHeiti, sans-serif !important;
}

main {
  width: 90%;
  max-width: 1400px;
  min-width: 960px;
  margin: 15px auto;
}

@media (max-width: 979px) {
  main {
    margin: 20px auto;
  }
}
</style>

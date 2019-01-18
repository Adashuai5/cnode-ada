<template>
  <div class="about">
    <div class="header">
      <a href="/">主页</a>
      <span class="divider">/</span>
      <span class="title">关于</span>
    </div>
    <main>
      <section>
        <h1>关于 cnode-ada</h1>
        <p>
          cnode-ada 是我在学习 vue 过程中，尝试仿照 Cnode社区 做的一个简单前端项目。项目使用 Vue 重构 cnode 官方社区，利用 cnode 官
          方社区提供的 API，以 Vue-cli 创建项目模版，使用 Axios 获取数据，
          使用 Vue Router 进行前端路由的切换及传参，使用 watch 监听路由的
          变化，Webpack 打包。
        </p>
        <p>
          该项目使用vue.js技术栈：
          <strong>Vue-cli/ Vue2/ Vue Router/ Axios/ ES6/ Npm/ SCSS 等</strong>，调用 cnode 社区提供的 API 为接口。
        </p>
        <p>其中囊括了 PosltList 主列表；Article 文章的详情页；SlideBar 侧边栏；UserInfo 用户个人信息；Psgination 分页组件等主要组件。</p>
      </section>
      <section>
        <h1>关于我</h1>
        <p>
          访问
          <a href="https://github.com/Adashuai5">github</a>
        </p>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped lang="scss">
.about {
  border-radius: 3px;
  height: 83.1vh;
  a {
    color: #80bd01;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  background: white;
  margin-left: auto;
  margin-right: auto;
  font-size: 14px;
  .header {
    padding: 10px;
    background-color: #f6f6f6;
    .divider {
      padding: 0 5px;
      color: #ccc;
    }
    .title {
      color: #999;
    }
  }
  main {
    padding: 10px;
    section {
      margin: 10px;
      h1 {
        padding-bottom: 8px;
        border-bottom: 1px solid #e5e5e5;
      }
      p {
        font-size: 15px;
        line-height: 2em;
        overflow: auto;
      }
    }
  }
}
</style>
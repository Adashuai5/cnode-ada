<template>
  <div class="pagination">
    <button @click="changeBtn">首页</button>
    <button @click="changeBtn">上一页</button>
    <button @click="changeBtn" v-if="judge">...</button>
    <button
      v-for="pageBtn in pageBtns"
      :key="pageBtn.id"
      @click="changeBtn(pageBtn)"
      :class="{currentPage:pageBtn === currentPage}"
    >{{pageBtn}}</button>
    <button @click="changeBtn">下一页</button>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "Pagination",
  data() {
    return {
      pageBtns: [1, 2, 3, 4, 5, "..."],
      currentPage: 1,
      judge: false
    };
  },
  methods: {
    changeBtn(page) {
      if (typeof page !== "number") {
        switch (page.target.innerText) {
          case "上一页":
            $("button.currentPage")
              .prev()
              .click();
            break;
          case "下一页":
            $("button.currentPage")
              .next()
              .click();
            break;
          case "首页":
            this.pageBtns = [1, 2, 3, 4, 5, "..."];
            this.changeBtn(1);
            break;
          default:
            break;
        }
        return;
      }
      this.currentPage = page;
      if (page === this.pageBtns[4]) {
        this.pageBtns.shift();
        this.pageBtns.splice(4, 0, this.pageBtns[3] + 1);
      } else if (page === this.pageBtns[0] && page !== 1) {
        this.pageBtns.unshift(this.pageBtns[0] - 1);
        this.pageBtns.splice(5, 1);
      }
      if (page > 4) {
        this.judge = true;
      } else {
        this.judge = false;
      }
      this.$emit("handlePage", this.currentPage);
    }
  }
};
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  margin: 5px;
  background-color: #fff;
  border-radius: 5px;
  text-align: center;
  .currentPage {
    color: #80bd1e;
  }
  button {
    background-color: #fff;
    border: 1px solid #ddd;
    outline: none;
    cursor: pointer;
    color: #333;
    height: 29px;
    padding: 5px 10px;
    &:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    &:last-child {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    &:not(:first-child) {
      border-left: none;
    }
    &:hover {
      background-color: #f5f5f5;
    }
  }
}
</style>
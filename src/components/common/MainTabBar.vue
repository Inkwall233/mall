<template>
    <tab-bar>
      <template v-slot:tab-item>
        <tab-bar-item path="/">
          <template v-slot:tab-img>
            <img src="~@/assets/img/home.svg" alt />
          </template>
          <template v-slot:tab-img-active>
            <img src="~@/assets/img/home-active.svg" alt />
          </template>
          <template v-slot:tab-text>
            <div>首页</div>
          </template>
        </tab-bar-item>
        <tab-bar-item path="/category">
          <template v-slot:tab-img>
            <img src="~@/assets/img/cate.svg" alt />
          </template>
          <template v-slot:tab-img-active>
            <img src="~@/assets/img/cate-active.svg" alt />
          </template>
          <template v-slot:tab-text>
            <div>分类</div>
          </template>
        </tab-bar-item>
        <tab-bar-item path="/cart">
          <template v-slot:tab-img>
            <img src="~@/assets/img/cart.svg" alt />
          </template>
          <template v-slot:tab-img-active>
            <img src="~@/assets/img/cart-active.svg" alt />
          </template>
          <template v-slot:tab-text>
            <div>购物车</div>
          </template>
        </tab-bar-item>
        <tab-bar-item path="/profile">
          <template v-slot:tab-img>
            <img src="~@/assets/img/admine.svg" alt />
          </template>
          <template v-slot:tab-img-active>
            <img src="~@/assets/img/admine-active.svg" alt />
          </template>
          <template v-slot:tab-text>
            <div>我的</div>
          </template>
        </tab-bar-item>
      </template>
    </tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar.vue";
import TabBarItem from "@/components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>
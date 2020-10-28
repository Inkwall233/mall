<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <!-- <router-view></router-view> -->
    <main-tabBar v-if="isDetail"></main-tabBar>
  </div>
</template>

<script>
import MainTabBar from '@/components/common/MainTabBar'

export default {
  name: "App",
  components: {
    MainTabBar,
  },
  computed: {
    // 判断组件是否在/detail页面
    isDetail() {
      if(this.$route.path.indexOf('/detail') ) {
        return true
      }
      else {
        return false
      }
    }
  }
};
</script>

<style>
@import "./assets/css/normalize.css";
@import "./assets/css/base.css";
</style>

<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <TabControl
      class="tab-control-1"
      :title="title"
      @itemclick="ctabClick($event)"
      v-show="isShowTab"
      ref="tabControl1"
    ></TabControl>
    <Scroll
      class="wrapper"
      ref="scroll"
      :probe-type="3"
      @scrollPosition="scrollPosition"
      @pullingUp="pullingUp"
    >
      <!-- 轮播图 -->
      <HomeSwiper :banner="banner" @swiperImgLoad="swiperImgLoad"></HomeSwiper>
      <!-- 推荐信息 -->
      <HomeCommend :recommend="recommend"></HomeCommend>
      <Feature></Feature>
      <TabControl
        class="tab-control"
        :title="title"
        @itemclick="ctabClick($event)"
        ref="tabControl2"
      ></TabControl>
      <GoodsList :list="showGoods" ></GoodsList>
    </Scroll>
    <BackTop @click.native="backClick" v-show="isShow"></BackTop>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import Scroll from "@/components/common/bscroll/Scroll";
import BackTop from "@/components/common/backTop/BackTop";

import { getHomeMultidata, getHomeGoods } from "@/network/home.js";
import { request } from "@/network/request.js";
import HomeSwiper from "./childCpns/HomeSwiper";
import HomeCommend from "./childCpns/HomeCommend";
import Feature from "./childCpns/Feature";
import { debounce } from "@/common/utils";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeCommend,
    Feature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      result: null,
      banner: null,

      recommend: null,
      title: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShow: false,
      isShowTab: false,
      tabOffsetTop: 0,
    };
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();
    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 100);
    // const refresh = this.debounce(this.$refs.scroll.scroll.refresh, 100);  //bug
    this.$bus.$on("itemImgOnload", () => {
      // 3.监听item的img是否加载完成
      // this.$refs.scroll.scroll.refresh();

      // 执行防抖函数
      refresh();
    });
    // 获取tabOffsetTop
    // 所有组件都有一个属性$el,用于获取组件中的元素
  },
  methods: {
    /**
     * 事件监听
     */
    // 父接受子
    ctabClick(index) {
      // console.log(index);
      switch (index) {
        case 0: {
          this.currentType = "pop";
          break;
        }
        case 1: {
          this.currentType = "new";
          break;
        }
        case 2: {
          this.currentType = "sell";
          break;
        }
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    // 监听子组件发送的scroll的position
    scrollPosition(position) {
      // console.log(position.y);
      // 回到顶部判断
      this.isShow = -position.y > 800;
      // console.log(-position.y);
      // 是否置顶
      if (this.tabOffsetTop < -position.y) {
        this.isShowTab = true;
      } else {
        this.isShowTab = false;
      }
    },
    // 监听scroll到底 --> 刷新
    pullingUp() {
      // 请求数据
      this.getHomeGoods(this.currentType);
      // 结束
      this.$refs.scroll.scroll.finishPullUp();
    },
    swiperImgLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      // console.log(this.tabOffsetTop);
    },

    /**
     * 网络请求
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.result = res.data;
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res.data.data);
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page++;
      });
    },
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  box-sizing: border-box;
  background-color: #ff5777;
  color: white;
  border-bottom: 1px solid #e5e5e5;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 10;
}
.tab-control-1 {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 10;
}
.wrapper {
  /* overflow: hidden; */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
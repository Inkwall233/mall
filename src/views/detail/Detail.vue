<template>
  <div id="detail">
    <!-- 导航 -->
    <DetailNavBar class="detail-navbar" :list="list" @titleClick="titleClick" ref="nav"></DetailNavBar>
    <backTop v-if="isShowBack" @click.native="clickBackTop"></backTop>
    <Scroll class="wrapper" :probeType="probeType" @scrollPosition="scrollPosition" ref="scroll">
      <template v-slot:default>
        <!-- 轮播图 -->
        <DetailSwiper :topImages="topImages"></DetailSwiper>
        <!-- 基本信息 -->
        <DetailBaseInfo :goods="goods"></DetailBaseInfo>
        <!-- 店铺信息 -->
        <DetailShopInfo
          :shopInfo="shopInfo"
          :detailImg="detailImg"
          @detailImgLoad="detailImgLoad"
          ref="shopInfo"
        ></DetailShopInfo>
        <!-- 商品参数 -->
        <DetailParams :itemParams="itemParams" ref="params"></DetailParams>
        <!-- 商品推荐 -->
        <DetailRecommend :list="recommendList" ref="recommend"></DetailRecommend>
      </template>
    </Scroll>
    <DetailBotBar @addCart="addCart" @payment="payment"></DetailBotBar>
  </div>
</template>

<script>
import {
  getDateilList,
  Goods,
  ShopInfo,
  getDetailRecommend,
} from "@/network/detail.js";
import { debounce } from "@/common/utils.js";

import Scroll from "@/components/common/bscroll/Scroll.vue";
import backTop from "@/components/common/backTop/BackTop.vue";

import DetailNavBar from "./childCpns/DetailNavBar.vue";
import DetailSwiper from "./childCpns/DetailSwiper.vue";
import DetailBaseInfo from "./childCpns/DetailBaseInfo.vue";
import DetailShopInfo from "./childCpns/DetailShopInfo.vue";
import DetailParams from "./childCpns/DetailParams.vue";
import DetailRecommend from "./childCpns/DetailRecommend.vue";
import DetailBotBar from "./childCpns/DetailBotBar.vue";


export default {
  name: "Detail",
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailParams,
    DetailRecommend,
    backTop,
    DetailBotBar,
  },
  data() {
    return {
      iid: null,
      list: ["商品", "详情", "参数", "推荐"],
      topImages: null,
      goods: {},
      shopInfo: {},
      detailImg: [],
      itemParams: {},
      recommendList: [],
      listOffsetTops: [],
      offsetTopY: [],
      probeType: 3,
      currentIndex: 0,
      isShowBack: false,
    };
  },
  created() {
    // 1.保存传入iid
    this.iid = this.$route.params.iid;
    // 根据iid请求数据
    getDateilList(this.iid).then((res) => {
      // console.log(res);
      // 2.获取轮播图数据
      let itemInfo = res.data.result.itemInfo;
      let columns = res.data.result.columns;
      let shopInfo = res.data.result.shopInfo;
      let rate = res.data.result.rate;
      this.topImages = itemInfo.topImages;
      // 3.获取商品基本信息
      this.goods = new Goods(itemInfo, columns, shopInfo, rate);
      // console.log(this.goods);
      this.shopInfo = new ShopInfo(shopInfo);
      // console.log(this.shopInfo);
      this.detailImg = res.data.result.detailInfo.detailImage;
      // console.log(this.detailImg);
      // 获取商品参数
      this.itemParams = res.data.result.itemParams.info;
      // console.log(this.itemParams);
    });
    // 获取推荐数据
    getDetailRecommend().then((res) => {
      this.recommendList = res.data.data.list;
      // console.log(res);
    });
  },
  mounted() {
    // 防抖  调用scroll的refresh
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("detailImgLoad", () => {
      refresh();
      // 获取元素的offsetTop
      // this.listOffsetTops = []
      // this.listOffsetTops.push(0);
      // this.listOffsetTops.push(this.$refs.shopInfo.$el.offsetTop);
      // this.listOffsetTops.push(this.$refs.params.$el.offsetTop);
      // this.listOffsetTops.push(this.$refs.recommend.$el.offsetTop);
      // console.log(this.listOffsetTops);
    });

    // 存入offsetTop
  },
  methods: {
    // 根据offset跳转指定位置
    titleClick(index) {
      // console.log(index);
      // this.$refs.scroll.scrollTo(0, -this.listOffsetTops[index]);
      this.$refs.scroll.scrollTo(0, -this.offsetTopY[index]);
    },
    // 监听图片加载完成
    detailImgLoad() {
      this.$refs.scroll.refresh();
      this.offsetTopY = [];
      this.offsetTopY.push(0);
      this.offsetTopY.push(this.$refs.shopInfo.$el.offsetTop);
      this.offsetTopY.push(this.$refs.params.$el.offsetTop);
      this.offsetTopY.push(this.$refs.recommend.$el.offsetTop);
      // console.log(this.offsetTopY);
    },
    // 监听滚动位置
    scrollPosition(position) {
      // console.log(position.y);
      const positionY = -position.y;
      let length = this.offsetTopY.length;
      for (let i = 0; i < length; i++) {
        // [0, 2, 4, 6];
        // 0,2  index = 0
        // 2,4  index = 1
        // 4,6  index = 2
        // 6,+  index = 3
        if (this.currentIndex !== i) {
          if (
            (i < length - 1 &&
              positionY > this.offsetTopY[i] &&
              positionY < this.offsetTopY[i + 1]) ||
            positionY > this.offsetTopY[length - 1]
          ) {
            this.currentIndex = i;
            this.$refs.nav.currentIndex = this.currentIndex;
          }
        }
      }
      // backtop是否显示
      if (positionY > 300) {
        this.isShowBack = true;
      } else {
        this.isShowBack = false;
      }
    },
    // 点击返回顶部
    clickBackTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    // 监听点击加入购物车
    addCart() {
      // console.log("加入购物车");
      const goods = {};
      goods["img"] = this.topImages[0];
      goods["price"] = this.goods.lowNowPrice;
      goods["iid"] = this.iid;
      goods["title"] = this.goods.title;
      // console.log(goods);
      // this.$store.commit("addCart",goods)
      this.$store.dispatch("addCart", goods).then((res) => {
        // 全局插件 弹窗toast
        this.$toast.show(res)
        // console.log(this.$toast);
      });
    },
    //立即购买
    payment(){
      this.$toast.show('支付成功',2000,true)
    }
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  height: 100vh;
}
.detail-navbar {
  position: relative;
  z-index: 10;
  background-color: #fff;
}
.wrapper {
  position: absolute;
  top: 44px;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
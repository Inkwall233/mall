<template>
  <div class="category">
    <!-- 导航 -->
    <NavBar class="navbar">
      <template v-slot:center>
        <div>分类</div>
      </template>
    </NavBar>

    <div class="category-wrap">
      <!-- 左侧边栏 -->
      <LeftBar
        class=""
        :categoryList="categoryList"
        @changeItem="tabChangeItem"
      ></LeftBar>
      <!-- 右分类列表 -->
      <div class="right-content">
        <Scroll class="wrapper" ref="scroll">
          <!-- 分类详细 -->
          <RightContent :CategoryListItem="CategoryListItem"></RightContent>
          <!-- tab -->
          <TabControl
            class="tab-control"
            :title="categoryDatailTabType"
            @itemclick="ctabClick($event)"
            ref="tabControl"
          ></TabControl>
          <!-- 具体商品信息 -->
          <CategoryGoods
            :list="showGoods"
            @cateImgLoad="cateImgLoad"
            ref=""
          ></CategoryGoods>
        </Scroll>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import Scroll from "@/components/common/bscroll/Scroll";
import TabControl from "@/components/content/tabControl/TabControl";

import LeftBar from "./childCpns/LeftBar.vue";
import RightContent from "./childCpns/RightContent.vue";
import CategoryGoods from "./childCpns/CategoryGoods.vue";
import {
  getCategoryList,
  getCategoryListItem,
  getCategoryListDetail,
} from "@/network/category.js";
export default {
  name: "Category",
  components: {
    NavBar,
    Scroll,
    TabControl,
    LeftBar,
    RightContent,
    CategoryGoods,
  },
  data() {
    return {
      currentIndex: 0,
      categoryList: [],
      maitKey: 0,
      miniWallkey: 0,
      CategoryListItem: [],

      allCategoryListDetail: {},
      // tabControl
      categoryDatailTabType: ["综合", "新品", "销量"],
      tabCurrentType: "pop",
      tabIndex: 0,
      tabGoods: {
        pop: { list: [] },
        new: { list: [] },
        sell: { list: [] },
      },
    };
  },
  created() {
    // 请求分类
    getCategoryList().then((res) => {
      // console.log(res);
      this.categoryList = res.data.data.category.list;
      // console.log(this.categoryList);
      this.maitKey = this.categoryList[0].maitKey;
      this.miniWallkey = this.categoryList[0].miniWallkey;
      // console.log(this.miniWallkey);
      // 请求分类数据
      getCategoryListItem(this.maitKey).then((res) => {
        // console.log(res);
        this.CategoryListItem = res.data.data.list;
      });
      // 请求分类详细数据
      this.getTabGoods(this.miniWallkey, "pop");
      this.getTabGoods(this.miniWallkey, "new");
      this.getTabGoods(this.miniWallkey, "sell");
    });
  },
  methods: {
    // 监听leftbar高光改变, 接收子组件传参
    tabChangeItem(index, maitKey, miniWallkey) {
      // console.log(index);
      // console.log(maitKey);
      /**减少请求次数---未处理  */
      // 点击请求分类详细数据
      getCategoryListItem(maitKey).then((res) => {
        console.log(res);
        this.CategoryListItem = res.data.data.list;
        this.miniWallkey = miniWallkey;
        // 请求tabcontrol下的商品数据
        this.getTabGoods(this.miniWallkey, "pop");
        this.getTabGoods(this.miniWallkey, "new");
        this.getTabGoods(this.miniWallkey, "sell");
      });
    },
    // 接收tabcontrol，高光切换
    ctabClick(index) {
      // console.log(index);
      switch (index) {
        case 0: {
          this.tabCurrentType = "pop";
          break
        }
        case 1: {
          this.tabCurrentType = "new";
          break
        }
        case 2: {
          this.tabCurrentType = "sell";
          break
        }
      }
    },
    // 监听图片已经加载完成
    cateImgLoad() {
      this.$refs.scroll.refresh();
    },

    /**
     * 网络请求
     */
    // 请求tabcontrol下面的详细数据
    getTabGoods(miniWallkey, tabCurrentType) {
      getCategoryListDetail(miniWallkey, tabCurrentType).then((res) => {
        // console.log(res.data);
        this.tabGoods[tabCurrentType].list=res.data
      });
    },
  },
  computed: {
    showGoods() {
      // console.log(this.tabGoods[this.tabCurrentType].list);
      return this.tabGoods[this.tabCurrentType].list;
    },
  },
};
</script>

<style scoped>

.navbar {
  color: white;
  background-color: #ff5777;
  z-index: 10;
}
.category-wrap {
  display: flex;
}
.right-content {
  position: relative;
  flex: 1;
  height: calc(100vh - 44px);
  overflow: hidden;
  background-color: #f6f6f6;
}
.wrapper {
  position: absolute;
  width: 100px;
  top: 0;
  right: 0;
  bottom: 49px;
  width: 100%;
  overflow: hidden;
}
</style>
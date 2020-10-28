<template>
  <div class="leftbar">
    <Scroll class="wrapper" ref="scroll" v-if="categoryList">
      <div
        class="tab-item"
        v-for="(item, index) in categoryList"
        :key="index"
        :class="{ active: index === currentIndex }"
        @click="changeItem(index, item.maitKey,item.miniWallkey)"
      >
        <p>{{ item.title }}</p>
      </div>
    </Scroll>
  </div>
</template>

<script>
import { getCategoryListItem, getCategoryListDetail } from "@/network/category.js";
import Scroll from "@/components/common/bscroll/Scroll";
export default {
  name: "LeftBar",
  components: {
    Scroll,
  },
  props: {
    categoryList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
      categorylData: [],
      datailData: []
    };
  },
  created() {},
  mounted() {
    this.$refs.scroll.refresh();
  },
  methods: {
    // 改变高亮
    changeItem(index, maitKey, miniWallkey) {
      this.$emit('changeItem',index, maitKey, miniWallkey)
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.leftbar {
  position: relative;
  width: 100px;
  height: calc(100vh - 44px);
  overflow: hidden;
  background-color: #f6f6f6;
}
.wrapper {
  position: absolute;
  width: 100px;
  top: 0;
  bottom: 49px;
}
.tab-item {
  font-size: 14px;
  color: #666666;
  height: 45px;
  line-height: 45px;
  text-align: center;
}
.active {
  color: #ff5577;
  font-weight: bold;
  background-color: #fff;
  border-left: 2px solid #ff8198;
}
</style>
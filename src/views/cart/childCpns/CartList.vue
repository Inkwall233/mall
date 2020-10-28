<template>
  <Scroll class="wrapper" ref="scroll">
    <div class="goods" v-for="(item, index) in $store.state.chartList" :key="index">
      <div class="goods-item">
        <Checkbtn class="check-btn" :isChecked="item.checked" @click.native="checkClick(item)"></Checkbtn>
        <div class="img-warp">
          <img :src="item.img" alt />
        </div>
        <div class="content">
          <div class="name ellipsis-2">{{item.title}}</div>
          <div class="price">
            <div class="price-all">{{item.price}}</div>
            <div class="good-decrease" @click="goodDecrease(item)">-</div>
            <div class="price-number">×{{item.number}}</div>
            <div class="good-increase" @click="goodIncrease(item)">+</div>
          </div>
        </div>
      </div>
    </div>
  </Scroll>
</template>

<script>
import { mapGetters } from "vuex";
import Scroll from "@/components/common/bscroll/Scroll.vue";
import Checkbtn from "@/components/content/checkbtn/Checkbtn.vue";
export default {
  name: "CartList",
  components: {
    Scroll,
    Checkbtn,
  },
  methods: {
    checkClick(item) {
      item.checked = !item.checked;
    },
    goodDecrease(item) {
      if (item.number > 1) {
        this.$store.commit("reduceNumber1", item);
      }
    },
    goodIncrease(item) {
       this.$store.commit("addNumber1", item);
    },
  },
  computed: {},
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>

<style scoped>
.wrapper {
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
  overflow: hidden;
}
.goods-item {
  display: flex;
  align-items: center;
  padding: 15px;
}
.check-btn {
  margin-right: 10px;
}
.img-warp {
  width: 100px;
  height: 100px;
  overflow: hidden;
}
.img-warp img {
  width: 100%;
}
.content {
  flex: 1;
  margin-left: 10px;
}
.name {
  width: 100%;
  font-size: 14px;
}
.price {
  margin-top: 5px;
  display: flex;
  align-items: center;
}
.price-all {
  width: 100px;
  font-size: 18px;
  color: #ff2255;
}

.good-decrease,
.price-number,
.good-increase {
  flex: 1;
  text-align: right;
  font-size: 14px;
}
</style>
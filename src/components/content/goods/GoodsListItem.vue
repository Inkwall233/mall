<template>
  <div class="goods-item" @click="goodItemClick(listItem)">
    <div class="img">
      <img v-lazy="listItem.show.img"  :key="listItem.show.img" @load="imgOnload" />
    </div>

    <div class="goods-info">
      <div class="info-title">{{listItem.title}}</div>
      <div class="info-price">
        <div class="info-price-p left">￥{{listItem.price}}</div>
        <div class="info-price-cfav right">★{{listItem.cfav}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    listItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    // 用bus事件总线，传递img加载完成
    imgOnload() {
      // console.log(e);
      this.$bus.$emit("itemImgOnload");
    },
    goodItemClick(listItem) {
      // console.log("11");
      // this.$router.push({path: `/detail/${listItem.iid}`})
      this.$router.push(`/detail/${listItem.iid}`);
    },
  },
  computed: {
  },
};
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
  margin-bottom: 10px;
  background-color: #fff;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.info-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.info-price {
  padding: 0 20px;
}
.info-price-p {
  color: red;
}
.info-price-cfav {
  color: sandybrown;
}
</style>
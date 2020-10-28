<template>
  <a href class="shop-info" @click.prevent>
    <div class="shop-header">
      <div class="heaer-logo">
        <img :src="shopInfo.shopLogo" alt />
      </div>
      <div class="header-info">
        <div class="header-entryshop">
          <span>进店</span>
          <span class="entryshop-icon">></span>
        </div>
        <div class="header-info-name">{{shopInfo.name}}</div>
        <div class="shop-level-sell">
          <img v-for="(index) in shopInfo.level" :key="index" src="~@/assets/img/common/star.png" />

          <div class="s-sell">
            <div class="info__divider"></div>
            在售商品 {{shopInfo.cGoods}}
          </div>
        </div>
        <div class="shop-label">
          <div class="label-cfans">{{shopInfo.cFans}}人关注</div>
          <div class="label-csells">销量{{shopInfo.cSells}}</div>
          <div class="label-fivestar" v-if="shopInfo.level === 5">五星好店</div>
        </div>
      </div>
    </div>
    <div class="detailImg">
      <div class="list" v-for="(item, index) in detailImg" :key="index">
        <div class="list-name">{{item.key}}</div>
        <div class="list-desc">{{item.desc}}</div>
        <div class="list-item" v-for="(cItem, index) in item.list" :key="index">
          <img :src="cItem"  @load="detailImgLoad" alt />
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
    detailImg: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    // 监听图片加载,发送父组件
    detailImgLoad(){
      this.$emit('detailImgLoad')
    }
  }
};
</script>

<style scoped>
.shop-info {
  display: block;
  padding: 15px;
  border-top: 10px solid #eeeeee;
}
.shop-header {
  display: flex;
  padding-bottom: 15px;
}
.heaer-logo {
  width: 60px;
  height: 60px;
  margin-right: 10px;
}
.heaer-logo img {
  width: 100%;
}
.header-info {
  flex: 1;
  position: relative;
}
.header-entryshop {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 14px;
  color: #666;
  height: 20px;
}
.header-info-name {
  color: #333;
  font-size: 14px;
}
.entryshop-icon {
  font-size: 13px;
  line-height: 18px;
  margin-left: 10px;
}
.shop-level-sell {
  display: flex;
  align-items: center;
  height: 20px;
}
.shop-level-sell img {
  width: 10px;
  height: 10px;
}
.s-sell {
  display: flex;
  font-size: 12px;
  color: #666666;
}
.info__divider {
  margin: 0 12px;
  width: 1px;
  background: #ccc;
  height: 10px;
}
.shop-label {
  display: flex;
  font-size: 12px;
  height: 20px;
}
div[class^="label-"] {
  line-height: 17px;
  padding: 0 3px;
  border-radius: 8px;
  border: 1px solid #d6d6d6;
  color: #f46;
  margin-right: 5px;
}
.list-desc {
  padding: 0 15px;
  font-size: 12px;
  color: #666666;
}
.detailImg {
  margin: 0 -15px;
  border-top: 10px solid #eeeeee;
}
.list-name {
  margin: 10px 0;
  height: 25px;
  line-height: 25px;
  text-indent: 15px;
  color: #303030;
  font-weight: 400;
  font-size: 15px;
}
.list-item img {
  width: 100%;
}
</style>
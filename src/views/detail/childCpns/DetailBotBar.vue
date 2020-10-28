<template>
  <div class="bottom-bar">
    <div class="footer-icon">
      <div class="icon-item">
        <div class="img">
          <img src="~@/assets/img/common/shop.svg" alt />
        </div>
        <div class="text">店铺</div>
      </div>
      <div class="icon-item">
        <div class="img">
          <img src="~@/assets/img/common/service.svg" alt />
        </div>
        <div class="text">客服</div>
      </div>
      <div class="icon-item">
        <div class="img">
          <img src="~@/assets/img/common/collect.svg" alt />
        </div>
        <div class="text">收藏</div>
      </div>
    </div>
    <div class="footer-btn">
      <div class="btn-pink" @click="addCart">
        <span>加入购物车</span>
      </div>
      <div class="btn-red" @click="payment">
        <span>立即购买</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBotBar",
  data() {
    return {};
  },
  methods: {
    addCart() {
      this.$emit('addCart')
    },
    payment() {
      this.$emit('payment')
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  width: 100vw;
  background-color: #fff;
}
.footer-icon {
  display: flex;
}
.icon-item {
  flex: 1;
  text-align: center;
  border-right: 1px solid #ededed;
  border-top: 1px solid #ededed;
}
.icon-item .img {
  margin-top: 5px;
  display: block;
  width: 60px;
}
.img img {
  width: 20px;
}
.text {
  font-size: 12px;
}
.footer-btn {
  display: flex;
  width: 100%;
  font-size: 14px;
  line-height: 49px;
  text-align: center;
}
.btn-pink {
  flex: 1;
  color: #ff5777;
  background-color: #ffe6e8;
}
.btn-red {
  flex: 1;
  color: #fff;
  background: -webkit-linear-gradient(left, #ff5777, #ff468f);
  background: linear-gradient(90deg, #ff5777, #ff468f);
}
</style>

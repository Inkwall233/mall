<template>
  <div class="tatal-price">
    <div class="check-total">
      <Checkbtn :isChecked="allChecked" @click.native="allCheckedClick" class="total-icon"></Checkbtn>
      <div class="total-text">全选</div>
    </div>
    <div class="totalprice">
      <span class="totalprice-text">合计￥</span>
      <span class="totalprice-price">{{calcMoney}}</span>
    </div>
    <div class="pay" @click="payment">结算({{calcChecked}})</div>
    <!--  @click.native="checkClick() -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Checkbtn from "@/components/content/checkbtn/Checkbtn.vue";
export default {
  name: "CartTotalPrice",
  components: {
    Checkbtn,
  },
  methods: {
    allCheckedClick() {
      let isAllChecked = this.allChecked;
      this.$store.state.chartList.forEach((item) => {
        item.checked = !isAllChecked;
      });
    },
    payment() {
      if (this.$store.state.chartList.length === 0) {
        this.$toast.show("购物车为空", 2000, true);
      } else {
        this.$toast.show("支付成功", 2000, true);
        // 清空购物车
        this.$store.commit("popChartList");
      }
    },
  },
  computed: {
    ...mapGetters(["calcCounter", "calcMoney", "calcChecked", "chartList"]),
    allChecked() {
      if (this.calcCounter === this.calcChecked) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.tatal-price {
  position: fixed;
  bottom: 49px;
  right: 0;
  left: 0;
  height: 49px;
  padding: 0 15px;
  background-color: #eee;
  display: flex;
  align-items: center;
}
.check-total {
  display: flex;
  align-items: center;
  width: 70px;
}
.total-text {
  font-size: 14px;
  margin-right: 10px;
}
.total-icon {
  margin-right: 5px;
}
.totalprice {
  flex: 1;
  font-size: 16px;
}
.totalprice-price {
  font-size: 18px;
  color: #ff5777;
}
.pay {
  width: 100px;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  text-align: center;
  color: #ffffff;
  background-color: rgb(247, 30, 30);
}
</style>
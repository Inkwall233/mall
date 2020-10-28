<template>
  <div class="cart">
    <NavBar class="navbar">
      <template v-slot:center>
        <div class="title">购物车({{calcCounter}})</div>
      </template>
    </NavBar>
    <!-- 商品目录 -->
    <CartList></CartList>
    <!-- 总价格 -->
    <CartTotalPrice></CartTotalPrice>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavBar from "@/components/common/navbar/NavBar.vue";
import CartList from "./childCpns/CartList.vue"
import CartTotalPrice from "./childCpns/CartTotalPrice.vue"
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartTotalPrice
  },
  computed: {
    ...mapGetters(["calcCounter"]),
  }
};
</script>

<style scoped>
.cart {
  height: 100vh;
}
.navbar {
  background-color: #ff5777;
}
.title {
  color: #fff;
}
</style>
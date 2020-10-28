<template>
  <div class="goods" >

      <GoodsListItem v-for="(item, index) in list" :key="index" :listItem="item"></GoodsListItem>

  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
 
 
};
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 2px;
  background-color: #efefef;
}
</style>
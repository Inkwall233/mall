<template>
  
    <div class="categoryitem-wrap">
      <div
        class="category-item"
        v-for="(item, index) in CategoryListItem"
        :key="index"
      >
        <a href.stop>
          <img :src="item.image" :alt="item.title" />
          <div class="category-item-title">{{ item.title }}</div>
        </a>
      </div>
    </div>
 
</template>

<script>
import GoodsList from "@/components/content/goods/GoodsList";
export default {
  name: "RightContent",
  components: {
    
    GoodsList,
  },
  props: {
    CategoryListItem: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      
    };
  },
  created() {},
  mounted() {
    
  },
};
</script>

<style scoped>

.categoryitem-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.category-item {
  width: 25%;
  text-align: center;
  margin-top: 10px;
}
.category-item img {
  width: 100%;
}
.category-item-title {
  padding: 5px 0;
}
</style>
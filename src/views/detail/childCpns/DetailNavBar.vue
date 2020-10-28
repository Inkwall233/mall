<template>
  <NavBar>
    <template v-slot:left>
      <div class="left" @click="$router.back()">
        <img src="~@/assets/img/common/back.svg" alt="">
      </div>
    </template>
    <template v-slot:center>
      <div class="center">
        <div v-for="(item, index) in list" :key="index" :class="{active: currentIndex===index}" @click="itemClick(index)">
          {{item}}
        </div>
      </div>
    </template>
  </NavBar>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  props: {
    list: {
      type: Array,
      default(){
        return []
      }
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('titleClick',index)
    },
  }
};
</script>

<style scoped>
.center {
  display: flex;
}
.center div {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.left img{
  margin-top: 11px;
}
</style>
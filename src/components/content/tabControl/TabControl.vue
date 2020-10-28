<template>
  <div class="tab-control">
    <div
      class="tabControlItem"
      v-for="(item,index) in title"
      :key="index"
      :class="{active: currentIndex===index}"
      @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      // this.$emit('tabClick',index)
      this.$emit('itemclick', index)
    },
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  background-color: #fff;
}
.tabControlItem {
  flex: 1;
  height: 40px;
  line-height: 40px;
}
span {
  padding: 5px;
}
.active span {
  color: var(--color-high-text);
  border-bottom: 1px solid var(--color-high-text);
}
</style>
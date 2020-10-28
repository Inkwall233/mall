<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="tab-img"></slot>
    </div>
    <div v-else>
      <slot name="tab-img-active"></slot>
    </div>
    <div :class="{active: isActive}" :style="activeStyle">
      <slot name="tab-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#d4237a",
    },
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      // return this.$route.path.indexOf(this.path) !== -1;
      return this.$route.path === this.path
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      if (this.$route.path !== this.path) {
        this.$router.push(this.path);
        return false;
      }
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  cursor: pointer;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  margin-top: 5px;
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-bottom: 2px;
}

</style>
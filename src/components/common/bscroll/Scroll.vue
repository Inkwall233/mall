<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "BScroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    }
  },
  // 在组件创建完成后调用
  mounted() {
    // 1.创建scroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      // eventPassthrough: vertical,
      pullUpLoad: true,
    })
    // 2.监听scroll的位置
    this.scroll.on('scroll',position => {
      this.$emit('scrollPosition',position)
    })
    this.scroll.on('pullingUp',() => {
      this.$emit("pullingUp")
    })
    // console.log(this.scroll);
  },
  methods: {
    scrollTo(x,y,time=500){
      this.scroll.scrollTo(x,y,time)
    },
    refresh(){
      this.scroll.refresh()
      // console.log(this.scroll);
    }
  }
}
</script>
<style>
</style>
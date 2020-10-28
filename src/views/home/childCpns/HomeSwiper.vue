<template>
  <div>
    <Swiper>
      <SwiperItem v-for="item in banner" :key="item.acm" >
        <a href="">
          <img :src="item.image" @load="swiperImgLoad" alt />
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper";
export default {
  name: "HomeSwiper",
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isLoad: false
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    swiperImgLoad() {
      if(!this.isLoad){
        this.$emit('swiperImgLoad')
        // 只执行一次
        this.isLoad = true
      }
      
      
    }

  }
};
</script>

<style>
</style>
<template>
  <div >
    <Swiper>
      <SwiperItem class="detail-swiper" v-for="(item, index) in topImages" :key="index">
        <a href="">
          <img :src="item"  alt />
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper";
export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  }
};
</script>

<style scoped>
.detail-swiper {
  height: 360px;
  overflow: hidden;
}
</style>
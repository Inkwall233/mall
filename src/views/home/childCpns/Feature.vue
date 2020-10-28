<template>
  <div class="feature">
    <a @click="$router.push('/404')">
      <img src="~@/assets/img/recommend.jpg" alt="">
    </a>
  </div>
</template>

<script>
export default {
  name: 'Feature',

}
</script>

<style scoped>
  .feature img {
    width: 100%;
  }
</style>
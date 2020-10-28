
<template>
  <div class="top">
    <img src="~@/assets/img/backTop/top.png" alt="">
  </div>
</template>

<script>
export default {
name: 'BackTop'
}
</script>

<style scoped>
.top {
  position: fixed;
  bottom: 60px;
  right: 20px;
  z-index: 10;
}
.top img {
  width: 43px;
  height: 43px;
}
</style>
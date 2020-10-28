<template>
  <div class="recomment">
    <div class="recommend-item" v-for="item in recommend" :key="item.sort">
      <a @click="$router.push('/404')">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'HomeCommend',
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recomment {
    width: 100%;
    display: flex;
    text-align: center;
    padding: 0px 0 20px;
    font-size: 14px;
    color: #666666;
    border-bottom: 8px solid #eeeeee;
  }
  .recommend-item {
    flex: 1;
    padding: 10px;
  }
  .recommend-item img {
    width: 90%;
    margin-bottom: 5px;
  }
  
</style>
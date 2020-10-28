<template>
  <div class="none">
    <h1>页面待开发</h1>
    <h2>{{counter}}s后返回</h2>
    <br>
    <button @click="back">立即返回</button>
    
  </div>
</template>

<script>
export default {
  name: "none404",
  data() {
    return {
      counter: 5,
      timer: null,
    };
  },
  activated(){
    this.counter = 5
    clearInterval(this.timer)
    this.timer = setInterval(() => {
      this.counter--;
      if (this.counter === 0) {
        clearInterval(this.timer);
        this.$router.back()
      }
    }, 1000);
  },
  created() {
    
  },
  methods: {
    back() {
      clearInterval(this.timer)
      this.$router.back()
    }
  }
};
</script>

<style scoped>
.none {
  text-align: center;
}
</style>
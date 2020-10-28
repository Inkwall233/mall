<template>
  <div class="toast" :class="{isPay: isPay}" :style="isPayStye" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "toast",
  data() {
    return {
      message: "",
      isShow: false,
      timer: null,
      isPay: false,
    };
  },
  methods: {
    show(message, durtime = 1000, ispay = false) {
      // console.log(message);
      this.isPay = ispay;
      this.message = message;
      this.isShow = true;
      // clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.message = "";
        this.isShow = false;
      }, durtime);
    },
  },
  computed: {
    // 复用支付弹窗，样式
    isPayStye() {
      return this.isPay
        ? {
            minWidth: "250px",
            minHeight: "170px",
            lineHeight: "170px",
            animation: "none",
            color: 'white',
            fontWight: 'bold'
          }
        : {};
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: #ff468f;
  font-size: 18px;
  z-index: 100;
  text-align: center;
  min-width: 100px;
  min-height: 40px;
  line-height: 40px;
  padding: 5px 10px;
  border-radius: 10px;

  animation: changeTop .5s ease-out .5s;
}

@keyframes changeTop {
  from {
    top: 50%;
    opacity: 1;
  }
  to {
    top: 80%;
    opacity: 0.2;
  }
}
.pay {
  min-width: 200px;
  min-height: 120px;
  line-height: 120px;
  text-align: center;
}
</style>
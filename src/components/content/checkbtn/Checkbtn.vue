<template>
  <div class="checkbtn" :class="{checked: isChecked}">
    <img src="~@/assets/img/checkbtn/checkbtn.svg" alt />
  </div>
</template>

<script>
export default {
  name: "Checkbtn",
  props:{
    isChecked: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped>
.checkbtn {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #999999;
}
.checked {
  background-color: #ff5777;
}
.checked img{
  width: 100%;
}
</style>
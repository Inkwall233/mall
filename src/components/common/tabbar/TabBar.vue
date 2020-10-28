<template>
  <div id="tab-bar">
      <slot name="tab-item"></slot>
    </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style>

  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: -2px;
    text-align: center;
  }
  
</style>
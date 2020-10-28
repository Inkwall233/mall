<template>
  <div class="itemParams">
    <ul v-for="(item, index) in itemParams.set" :key="index">
      <li>
        <span class="params-item-key">{{item.key}}</span>
        <span class="  params-item-value" >{{item.value}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DetailParams",
  props: {
    itemParams: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.itemParams {
  padding: 0 15px;
  margin-top: 15px;
}
.itemParams ul {
  list-style: none;
}
.itemParams li {
  border-bottom: 1px solid #f4f4f4;
  white-space: nowrap;
  font-size: 14px;
  padding: 3px 0;
}
.params-item-key {
  padding: 6px 0;
  display: inline-block;
  width: 100px;
  color: #777777;
  vertical-align: top;
}
.params-item-value {
  padding: 6px 0;
  display: inline-block;
  width: 240px;
  color: #eb4868;
  white-space: normal;
  vertical-align: top;
}
</style>
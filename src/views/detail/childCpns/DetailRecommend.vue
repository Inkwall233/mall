<template>
  <div>
    <ul>
      <li v-for="(listItem, index) in list" :key="index">
        <a @click.prevent>
          <div class="img">
            <img :src="listItem.image" :key="listItem.image" />
          </div>
          <div class="goods-info">
            <div class="info-title ellipsis">{{listItem.title}}</div>
            <div class="info-price">
              <div class="info-price-p left">￥{{listItem.price}}</div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DetailRecommend",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
  padding-bottom: 60px;
}
li {
  width: 32%;
  padding-bottom: 40px;
  position: relative;
}
.img img {
  width: 100%;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.info-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.info-price-p {
  color: red;
}
</style>
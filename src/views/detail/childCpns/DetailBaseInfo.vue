<template>
  <div class="base-info">
    <!-- 价格 -->
    <div class="price">
      <div class="price-now">
        <span class="now-price-tag">￥</span>
        <span class="now-price">{{goods.lowNowPrice}}</span>
      </div>
      <div class="price-old">
        <span class="old-price">{{goods.oldPrice}}</span>
        <span class="old-price-tag">{{goods.discountDesc}}</span>
      </div>
    </div>
    <!-- 商品名 -->
    <div class="goods-title-dec">
      <div class="title">
        <span class="ellipsis-2">{{goods.title}}</span>
      </div>
    </div>
    <div class="columns">
      <div class="item" v-for="(item,index) in goods.columns" :key="index">{{item}}</div>
    </div>
    <!-- 包邮 -->
    <div class="services" v-if="goods.services">
      <div class="s-item" v-for="(item, index) in  goods.services.slice(1,4)" :key="index">
        <span class="s-item-icon">
          <img src="~@/assets/img/common/true.webp" alt />
        </span>
        <span class="s-item-name">{{item.name}}</span>
      </div>
    </div>
    <!-- 评论信息 -->
    <div class="rate" v-if="goods.rate">
      <div class="rare-title">
        <span>买家评价</span>
      </div>
      <div class="rate-list">
        <div class="r-list-item" v-for="(item, index) in goods.rate" :key="index">
          <div class="list-item-user">
            <div class="list-item-user-img">
              <img :src="item.user.avatar" alt="">
            </div>
            <span>{{item.user.uname}}</span>
          </div>
          <div class="list-item-commond">
            {{item.content}}
          </div>
          <div class="list-item-create">
            {{item.created | showDate}}
          </div>
          
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from "@/common/utils.js"
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {
   
  },
  filters: {
     showDate(date) {
      const newDate = new Date(date * 1000)
      return formatDate(newDate,'yyyy/MM/dd')
    },
  }
};
</script>

<style scoped>
.base-info {
  padding-top: 10px;
}
.price {
  padding: 0 15px;
  display: flex;
}
.price-now {
  align-items: flex-start;
  color: #333;
}
.now-price-tag {
  font-size: 12px;
}
.now-price {
  font-size: 38px;
}
.price-old {
  display: flex;
  flex-flow: column nowrap;
  margin-left: 4px;
  font-size: 14px;
}
.old-price {
  display: block;
  padding: 3px;
  text-decoration: line-through;
  color: #999;
}
.old-price-tag {
  text-align: center;
  color: var(--color-high-text);
  background-color: #ffe8ee;
}
.goods-title-dec {
  padding: 0 15px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.goods-title-dec .title {
  /* padding-right: 15px; */
  font-size: 15px;
  color: #333;
}
.columns {
  padding: 0 15px;
  display: flex;
  margin: 10px 0;

  height: 15px;
  font-size: 12px;
  color: #999;
}
.columns .item {
  flex: 1;
}
.columns .item:first-child {
  text-align: left;
}
.columns .item:nth-child(2) {
  text-align: center;
}
.columns .item:nth-child(3) {
  text-align: right;
}
.services {
  border-top: 10px solid #eeeeee;
  display: flex;

  padding: 10px 15px;
}
.s-item {
  flex: 1;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  display: flex;
  align-items: center;
}
/* .s-item .s-item-icon {
} */
.s-item .s-item-icon img {
  width: 15px;
  visibility: inherit;
  display: inherit;
}
.s-item-name {
  font-size: 12px;
  margin-left: 2px;
  line-height: 15px;
}
.rate {
  padding: 0 15px 15px;
  border-top: 10px solid #eeeeee;
}
.rare-title {
  padding: 5px 0;
  font-size: 12px;
  color: #999999;
}
/* .rate-list {

} */
.list-item-user {
  display: flex;
  align-items: center;
}
.list-item-user-img {
  border-radius: 50%;
  overflow: hidden;
  width: 36px;
  height: 36px;
}
.list-item-user-img img{
  width: 100%;
  height: 100%;
}
.list-item-user span {
  margin-left: 10px;
  font-size: 14px;
}
.list-item-commond {
  font-size: 14px;
  color: #727272;
  padding-top: 10px ;
}
.list-item-create {
  margin-top: 10px;
  font-size: 12px;
  color: #999999;
}
</style>
import { request } from "./request.js";
export function getDateilList(iid) {
  return request({
    url: "detail",
    params: {
      iid,
    },
  });
}
// 请求推荐数据
export function getDetailRecommend(){
  return request({
    url: 'recommend'
  })
}
// 对请求数据的整合
export class Goods {
  //services 是shopInfo中的services
  constructor(itemInfo, columns, shopInfo, rate) {
    this.discountDesc = itemInfo.discountDesc;
    this.lowPrice = itemInfo.lowPrice;
    this.lowNowPrice = itemInfo.lowNowPrice;
    this.oldPrice = itemInfo.oldPrice;
    this.price = itemInfo.price;
    this.title = itemInfo.title;
    this.columns = columns;
    this.services = shopInfo.services;
    this.rate = rate.list;
  }
}
export class ShopInfo {
  constructor(shopInfo){
    this.shopLogo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.score = shopInfo.score;
    this.cFans = shopInfo.cFans;
    this.cGoods = shopInfo.cGoods;
    this.cSells = shopInfo.cSells;
    this.level = shopInfo.level
  }
}

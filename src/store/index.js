import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    chartList: [],
  },
  mutations: {
    // 增加属性number
    addNumber(state, payload) {
      Vue.set(payload, "number", 1);
    },
    // 增加属性checked
    addChecked(state, payload) {
      Vue.set(payload, "checked", true);
    },
    // 属性number++
    addNumber1(state, payload) {
      payload.number++;
    },
    // 属性number--
    reduceNumber1(state, payload) {
      payload.number--;
    },
    // 加入chartList
    addChartList(state, payload) {
      state.chartList.push(payload);
    },
    // 清空购物车
    popChartList() {
      let length = this.state.chartList.length;
      this.state.chartList.splice(0, length);
    },
  },
  actions: {
    addCart(context, payload) {
      return new Promise((reslove, reject) => {
        // 状态 只能加一次，如果是满足条件1，条件2不执行
        let hasAdd = false;
        // 1.已经在购物车存在
        context.state.chartList.forEach((item) => {
          // 判断购物车中是否已经存在，如果存在只需该商品个数加1
          if (payload.iid === item.iid) {
            context.commit("addNumber1", item);
            hasAdd = true;
            reslove("商品加1");
          }
        });
        // 2.没有购物车存在
        if (!hasAdd) {
          // goods["number"] = 1;
          context.commit("addNumber", payload);
          context.commit("addChecked", payload);
          context.commit("addChartList", payload);
          reslove("加入购物车成功");
        }
        // console.log(context.state.chartList);
      });
    },
  },
  getters: {
    calcCounter(state) {
      let counter = 0;
      state.chartList.forEach((item) => {
        counter += item.number;
      });
      return counter;
    },
    // 合计价钱
    calcMoney(state) {
      let money = 0;
      state.chartList.forEach((item) => {
        if (item.checked) {
          money += parseInt(item.price) * item.number;
        }
      });
      return money;
    },
    // 返回已选数量
    calcChecked(state) {
      let checkedNumb = 0;
      state.chartList.forEach((item) => {
        if (item.checked) {
          checkedNumb += item.number;
        }
      });
      return checkedNumb;
    },
  },
  modules: {},
});

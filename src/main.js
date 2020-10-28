import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import toast from "@/components/common/toast/index.js";
import VueLazylaod from "vue-lazyload";

import 'lib-flexible'

Vue.config.productionTip = false

Vue.use(toast);
Vue.use(VueLazylaod, {
  preload: 0.8,
  // loading,
  // error,
});
Vue.prototype.$bus = new Vue();
// const bus = new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


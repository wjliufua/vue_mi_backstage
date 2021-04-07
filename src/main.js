import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入element组件
import './plugins/element.js'
// 引入公共样式
import './assets/common.css'

import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:7000/api/private/v1/'

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

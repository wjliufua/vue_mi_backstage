import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入element组件
import './plugins/element.js'
// 引入公共样式
import './assets/common.css'
// 引入公共样式
import './assets/font.css'

import TreeTable from 'vue-table-with-tree-grid'

import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:7000/api/private/v1/'
// axios.defaults.headers.token = window.sessionStorage.getItem('token')
// axios.defaults.headers.common['token'] = token
// axios.defaults.headers.common['token'] = window.sessionStorage.getItem('token')
// axios.defaults.headers.common.token = window.sessionStorage.getItem('token')

axios.interceptors.request.use(config => {
  // console.log(window.sessionStorage.getItem('token'))
  config.headers.token = window.sessionStorage.getItem('token')
  return config
})

// axios.interceptors.request.use(
//   function(config) {
//     let user = JSON.parse(window.sessionStorage.getItem('token'))
//     if (user) {
//       token = user.token
//     }
//     config.headers.common['token'] = token
//     //console.dir(config);
//     return config
//   },
//   function(error) {
//     // Do something with request error
//     console.info('error: ')
//     console.info(error)
//     return Promise.reject(error)
//   }
// )
// axios.interceptors.request.use(
//   function(config) {
//     // Do something before request is sent
//     const token = window.localStorage.getItem('token')
//     if (token) {
//       config.headers.accessToken = token // 将token放到请求头发送给服务器
//       return config
//       // 这里经常搭配token使用，将token值配置到tokenkey中，将tokenkey放在请求头中
//       // config.headers['accessToken'] = Token;
//     }
//   },
//   function(error) {
//     // Do something with request error
//     return Promise.reject(error)
//   }
// )

Vue.component('tree-table', TreeTable)

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

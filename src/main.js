// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'											//路由
import store from './store'												//vuex全局管理变量
import $ from 'jquery'													//全局引入jq
import Axios from 'axios'												//ajax请求
import './mock/mockServer.js' 							//生产环境删掉即刻
Vue.config.productionTip = false
Vue.prototype.$http=Axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
 render:h=> h(App),
})


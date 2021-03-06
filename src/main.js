import Vue from 'vue'
import App from './App'
import request from './utils/request'

Vue.config.productionTip = false

//定义全局数据方式1，痛过Vue原型实现
Vue.prototype.baseurl="baseurl:www"
//引入封装的request
Vue.prototype.request=request

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()

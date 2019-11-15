/*
 * @Author: your name
 * @Date: 2019-11-09 09:45:43
 * @LastEditTime: 2019-11-14 20:59:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css'; 
import VDistpicker from 'v-distpicker';
import axios from "axios"

axios.defaults.baseURL="/api/"


Vue.component('v-distpicker', VDistpicker);
Vue.use(MintUI);
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})

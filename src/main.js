import Vue from 'vue';
import App from './App.vue';

import './style/common.scss';
Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
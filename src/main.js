// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueResource from 'vue-resource'
import YDUI from 'vue-ydui';
import MintUi from 'mint-ui';
import 'vue-ydui/dist/ydui.rem.css';
import 'mint-ui/lib/style.css';
  import http from './utils/axios'
  import api from './utils/api'
Vue.use(YDUI);
Vue.use(MintUi);
Vue.use(VueResource)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

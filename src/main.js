
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
  import VueWechatTitle from 'vue-wechat-title';

 import'../src/assets/scss/my.scss'


import http from './utils/axios'
import api from './utils/api'
import VueWechatTitle from 'vue-wechat-title';
import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);

Vue.use(VueWechatTitle);
Vue.use(MintUi);
Vue.use(VueResource)
Vue.config.productionTip = false



new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  mounted(){
  }
})

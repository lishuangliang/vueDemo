// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//import iView from 'iview'
//import 'iview/dist/styles/iview.css'
//import '../my-theme/index.less';
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './store/index'

import VueLazyload from 'vue-lazyload';
import errorImg from '@/assets/images/error.jpg';
import loadingImg from '@/assets/images/confused.jpg';

Vue.use(VueAxios, axios);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: errorImg,
  loading: loadingImg,
  attempt: 1
});


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

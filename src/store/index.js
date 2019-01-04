import Vue from 'vue';
import Vuex from 'vuex'

import app from './modules/app';
import product from './modules/product';
import order from  './modules/order';

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    //app全局模块
    app,
    //商品模块
    product,
    //订单模块
    order
  }
})

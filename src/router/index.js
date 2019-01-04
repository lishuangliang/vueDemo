import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const layout = ()=> import('@/views/layout');
import transition from '@/views/transition';
import goodsList from '@/views/goodsList';
import test from '@/views/test';

Vue.use(Router);

const router = new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title : '首页'
      }
    },
    {
      path : '/layout',
      name : 'layout',
      component : layout
    },
    {
      path : '/transition',
      name : 'transition',
      component : transition
    },
    {
      path : '/goodsList',
      name : 'goodsList',
      component : goodsList
    },
    {
      path : '/test',
      name : 'test',
      component : test
    },
    {
      path : '/staticSiteHome/',
      name : 'staticSiteHome',
      component : ()=> import('@/views/staticSite/index/index')
    },
    {
      path : '/productDetail',
      name : 'productDetail',
      component : ()=> import('@/views/staticSite/productDetail/productDetail')
    },
    {
      path : '/aboutUs',
      name : 'aboutUs',
      component : ()=> import('@/views/staticSite/aboutUs/aboutUs')
    },
    {
      path : '/inject',
      name : 'inject',
      component : ()=> import('@/views/inject')
    },
    {
      path : '/list/:page',
      name : 'list',
      meta : {
        keepAlive : true,
        title : '资讯列表'
      },
      component : ()=> import('@/views/cNode/list.vue')
    },
    {
      path : '/newsDetail/:id',
      name : 'newsDetail',
      meta : {
        title : '资讯详情'
      },
      component : ()=> import('@/views/cNode/newsDetail.vue')
    }
  ]
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || document.title;
    //console.log(to, from, document.title);
    next();
});


export default router

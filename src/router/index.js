import Vue from 'vue';
import Router from 'vue-router';
import ElementUI from 'element-ui';
const _import = require('./_import_' + process.env.NODE_ENV);
import Full from '@/containers/Full'
import Full2 from '@/containers/Full2'


import Buttons from '@/views/components/Buttons'
// Views - Login
import register from '@/views/login/register'
// Views - Views
import wz from '@/views/wz'
// Views - Pages
import Page404 from '@/views/errorPages/Page404'
import Page500 from '@/views/errorPages/Page500'

import { Select, Option} from 'element-ui'
Vue.use(Select)
Vue.use(Option)

/* login */
const Login = _import('login/index');
Vue.use(Router);

export const constantRouterMap = [
    { path: '/login', component: Login},
    {path:'/register',component:_import('login/register')},
    {path: '/pages',redirect: '/pages/p404', name: 'Pages',
          component: {
            render (c) { return c('router-view') }
              // Full,
          },
          children: [{path: '404',  name: 'Page404', component: _import('errorPages/Page404') },
                     {path: '500',name: 'Page500',component: _import('errorPages/Page404')},
                    ]
    }

]

export default new Router({
  mode: 'hash', 
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});

export const asyncRouterMap = [

 {
    path: '/',
    redirect: '/dashboard',
    name: '首页',
    component: Full,
    hidden:false,
    children: [
     {path: '/',name: '主页',icon:'speedometer',component: _import('Dashboard')},
      {path:'/wz',name:'网络图',component: _import('wz')},
      {path: '/table', name: '交易数据分析',icon:'ios-paper',component: _import('Table'),meta: { role: ['admin'] }},
    ]
  },

   {
    path: '/home1',
    redirect: '/home1/introduction',
    name: '首页2',
    component: Full2,
    hidden:false,
    children: [
     {path: '/home1/dashboard',name: 'Dashboard2',icon:'speedometer',component: _import('Dashboard2')},
     {path: '/home1/introduction',name: '介绍2',icon:'thumbsup',component: _import('Introduction')},
    
    ]
  },

  { path: '*', redirect: '/pages/404', hidden: true }
  
];

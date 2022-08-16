/* import Vue from 'vue'
// 引入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Home from '../views/Home.vue'
import News from '../views/News.vue'
// import User from '../views/User.vue'
const routes = [
  {
    path: '/', // 页面的路径：/+字母
    component: Home
  },
  {
    path: '/news', // 页面的路径：/+字母
    name: 'News',
    component: News,
    alias: '/news11', // 别名
  },
  {
    // 动态路由的匹配
    path: '/user/:user/:id', // 页面的路径：/+字母
    name: 'User',
    component: () => import('../views/User.vue')
  },
  { // 嵌套路由
    path: '/zhinan',
    component: () => import('../views/Zhinan.vue'),
    redirect: '/zhinan/anzhuang',
    children: [
      {
        path: 'anzhuang', // 访问：xx/zhinan/anzhuang
        component: () => import('../views/Anzhuang.vue')
      },
      {
        path: 'base',
        component: () => import('../views/Base.vue')
      },
    ]
  },
  // 不存在的路径 -- 重定向到首页
  {
    path: '/*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router */
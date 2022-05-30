import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "@/components/Layout/index.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home', // 更改页面默认的子路由方式一
    children: [
      // 更改页面默认的子路由方式二
      // {
      //   path: '',
      //   redirect: '/home'
      // },
      {
        path: 'home',
        alias: 'index',
        name: 'home', // 做重定向是为了加默认的选中样式
        component: () => import('../views/Home.vue')
      },
      {
        path: 'searchList',
        name: 'searchList',
        component: () => import('../views/SearchList.vue')
      },
      {
        path: 'tjMarket',
        name: 'tjMarket',
        component: () => import('../views/TjMarket.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '*',
    component: () => import('../views/Error.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: "current",
  routes
})

export default router

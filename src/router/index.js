import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "@/layout"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: '/index',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Layout,
    // redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home', // 做重定向是为了加默认的选中样式
        component: () => import('../views/Home.vue')
      },
      {
        path: '/searchList',
        name: 'searchList',
        component: () => import('../views/SearchList.vue')
      },
      {
        path: '/tjMarket',
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
  linkExactActiveClass: "actived",
  routes
})

export default router

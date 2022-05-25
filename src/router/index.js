import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') 路由懒加载
// {
//   path: '/about',
//   name: 'About',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
  
// }
const routes = [
  {
    path: '/',
    name: 'FangKong',
    component: () => import(/* webpackChunkName: "about" */ '../views/FangKong.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

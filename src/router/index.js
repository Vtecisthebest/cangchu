import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/home',
    component: () => import('@/views/home/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

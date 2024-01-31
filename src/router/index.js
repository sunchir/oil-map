import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
  path: '/main',
  name: 'index',
  component: () => import('../views/index.vue')
}]
const router = new VueRouter({
  mode: "history",
  routes
})

export default router
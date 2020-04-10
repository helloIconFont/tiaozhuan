import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/login'
import Main from '@/components/main'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/login'

}, {
  name: 'Login',
  path: '/login',
  component: Login
}, {
  name: 'Main',
  path: '/main',
  component: Main
}

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

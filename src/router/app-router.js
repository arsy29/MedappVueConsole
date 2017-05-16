import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Dashboard from '@/components/dashboard/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})

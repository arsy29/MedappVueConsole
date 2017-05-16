import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Dashboard from '@/components/dashboard/dashboard'

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

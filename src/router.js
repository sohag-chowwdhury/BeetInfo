import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import premium from '@/components/premium'
import imprint from '@/components/imprint'
import info from '@/components/info'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/premium',
      name: 'premium',
      component: premium
    },
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/imprint',
      name: 'imprint',
      component: imprint
    },
  ]
})

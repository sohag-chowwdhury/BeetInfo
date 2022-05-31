import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import router from '@/router'
import './registerServiceWorker'

import { BImg, BContainer, BRow, BCol } from 'bootstrap-vue'
Vue.component('b-img', BImg)
Vue.component('b-container', BContainer)
Vue.component('b-row', BRow)
Vue.component('b-col', BCol)

import { ToastPlugin } from 'bootstrap-vue'
Vue.use(ToastPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueI18n)
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

Vue.filter('chain', function (value) {
  if (!value) return ''
  else if (value === 56 || value === 97) {
    value = 'BSC'
  } else if (value === 212984383488152) {
    value = 'ARB'
  } else if (value === 137 || value === 80001) {
    value = 'MATIC'
  } else if (value === 128 || value === 256) {
    value = 'HECO'
  } else if (value === 100) {
    value = 'XDAI'
  } else {
    value = 'ETH'
  }
  return value
})
/*
Vue.filter('chainCurrency', function (value) {
  if (!value) return ''
  else if (value === 56 || value === 97) {
    value = 'BNB'
  } else if (value === 128 || value === 256) {
    value = 'HC'
  } else if (value === 100) {
    value = 'XDAI'
  } else {
    value = 'ETH'
  }
  return value
})
*/

Vue.filter('contract', function (value) {
  if (!value) return ''
  else if (value === 56) {
    value = ''
  } else if (value === 97) {
    value = '0x010c9F97bFf82897a37208D925E44cE9A1BAd6b2'
  } else if (value === 128 || value === 256) {
    value = ''
  } else if (value === 100) {
    value = ''
  } else {
    value = '0x9B2eA0343982bc5dbe2303a68B1F7E3eA3A7640c'
  }
  return value
})

// Ready translated locale messages
const messages = {
  en: {
    hello: 'Hi',
    g: {
      hello: 'hello world'
    }
  },
  de: {
    hello: 'Hi',
    message: {
      hello: 'こんにちは、世界'
    }
  }
}

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})

new Vue({
  created () {
      AOS.init()
  },
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
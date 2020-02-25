import Vue from 'vue'
import Router from 'vue-router'
import onekeyindex from '@/components/onekeyindex'
// import footbar from '../components/footbar'
// import sidebar from '../components/sidebar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'onekeyindex',
      component: onekeyindex
    }
  ]
})

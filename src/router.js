import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { transitionName: 'slide' }
    },
    {
      path: '/home2',
      name: 'home2',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: Home2,
      component: () => import(/* webpackChunkName: "about" */ './views/Home2.vue'),
      meta: { transitionName: 'slide' }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: { transitionName: 'slide' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue'),
      meta: { transitionName: 'slide' }
    },
    {
      path: '/products',
      name: 'products',
      component: () => import(/* webpackChunkName: "products" */ './views/Products.vue'),
      meta: { transitionName: 'slide' }
    }
  ]
})

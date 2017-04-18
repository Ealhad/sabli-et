import Vue from 'vue'
import VueRouter from 'vue-router'

import App from 'components/App'
import Controller from 'components/Controller'
import Visualizer from 'components/Visualizer'

import store from './store/main.js'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Controller,
  name: 'Contrôle',
}, {
  path: '/view',
  component: Visualizer,
  name: 'Visualisation',
}, ]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  name: 'vue',
  router,
  store,
  render: h => h(App)
})

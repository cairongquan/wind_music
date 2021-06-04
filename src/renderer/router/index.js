import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { //主页
      path: '/',
      name: 'home',
      component: require('@/renderer/views/home/home.vue').default
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Admin from "./views/Admin.vue"
import Image from "./views/Image.vue"
import Test from "./views/Test.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
    , 
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin
    },{
      path: '/image',
      name: 'Image',
      component: Image
    },{
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})

/* eslint-disable no-unused-vars */
import { createApp } from 'vue';

import { createRouter, createWebHistory } from 'vue-router';

// const loadComponent = (view) => {
//   return () => import(`../views/${view}.vue`);
// }
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/index.vue'),
  },
  {
    path: '/About_us',
    name: 'About',
    component: () => import(/* webpackChunkName: "vuex" */ './views/About.vue'),      
  },

  {
    path: '/Investment_Plans',
    name: 'Investment',
    component: () => import(/* webpackChunkName: "vuex" */ './views/Investment.vue'),      
  },


  {
    path: '/Sign_up',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "vuex" */ './views/signUp.vue'),      

  },
]



const router = createRouter({
  history : createWebHistory(),
  routes,
  linkActiveClass: "active",
})


export default router

/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from 'vue-router';

import { authGuard } from "./auth/authGuard";

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
    name: 'Register',
    component: () => import(/* webpackChunkName: "vuex" */ './views/Register.vue'),      
   
  },

  {
    path: '/User_profile',
    name: 'User',
    component: () => import(/* webpackChunkName: "vuex" */ './views/User.vue'),      
    beforeEnter: authGuard 
  },
]



const router = createRouter({
  history : createWebHistory(),
  routes,
  linkActiveClass: "active",
})


export default router

import { createApp } from 'vue';

import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/index.vue'),
  },
  {
    path: '/AboutPage',
    name: 'AboutPage',
    component: () => import('./views/AboutPage.vue'),
  },
]

// const router = new VueRouter ({
//  linkActiveClass: "active",
//   routes,
//   mode: "history",
// });

const router = createRouter({
  history : createWebHistory(),
  routes : routes
})


export default router

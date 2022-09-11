import {createApp} from 'vue';
import App from './App.vue';

import bootstrap from 'bootstrap';
import router from './router';

import * as mdb from 'mdb-ui-kit'; // lib

import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
// Import Bootstrap and BootstrapVue CSS files (order is important)


import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
// Vue.use(bootstrap)

// Vue.config.productionTip = false

// new Vue({
//   router,
//   render: (h) => h(App),
// }).$mount('#app')
createApp(App).use(router).use(VueLoading).mount('#app')
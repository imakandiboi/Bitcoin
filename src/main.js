import {createApp} from 'vue';
import App from './App.vue';
import { createAuth0 } from '@auth0/auth0-vue';
import bootstrap from 'bootstrap';
import router from './router';
import { domain, client_id } from './auth_config.json';

// Import the plugin here
import { Auth0Plugin } from './auth';
import * as mdb from 'mdb-ui-kit'; // lib

import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'


// Import Bootstrap and BootstrapVue CSS files (order is important)

// Vue.use(bootstrap)

// Vue.config.productionTip = false

// new Vue({
//   router,
//   render: (h) => h(App),
// }).$mount('#app')
// createApp(App).use(router).mount('#app')

createApp(App).use(router).use(createAuth0({domain,client_id,redirect_uri: window.location.origin,})).mount("#app");
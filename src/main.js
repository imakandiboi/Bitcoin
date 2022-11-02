import {createApp} from 'vue';
import App from './App.vue';
import { createAuth0 } from '@auth0/auth0-vue';
import bootstrap from 'bootstrap';
import router from './router';
import { domain, client_id } from './auth_config.json';

// Import the plugin here
import * as mdb from 'mdb-ui-kit'; // lib

import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'



createApp(App).use(router).use(createAuth0({domain,client_id,redirect_uri: window.location.origin,})).mount("#app");
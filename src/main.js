import {createApp} from 'vue';
import App from './App.vue';
import { createAuth0 } from '@auth0/auth0-vue';
import bootstrap from 'bootstrap';
import router from './router';
import { domain, client_id } from './auth_config.json';
// GSAP import
import gsap from "gsap";
// GSAP other plugins:
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'



createApp(App).use(router).use(createAuth0({domain,client_id,redirect_uri: window.location.origin,})).mount("#app");
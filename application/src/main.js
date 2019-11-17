import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios';
import VueAxios from 'vue-axios'
import moment from 'moment'
import App from './App.vue'
import Home from './assets/Home/Home.vue'
import News from './assets/News/News.vue'
import Idea from './assets/Idea/Idea.vue'
import Orders from './assets/Orders/Orders.vue'
import Calculator from './assets/Сalculator/Сalculator.vue'
import JavaScript from './assets/JavaScript/JavaScript.vue'
import Tablitsa from './assets/Tablitsa/Tablitsa.vue'
import Bitcoin from './assets/Bitcoin/Bitcoin.vue'

Vue.use(VueRouter, VueAxios, axios, moment);

const routes = [
  {path: '/', component: Home},
  { path: '/news', component: News },
  { path: '/idea', component: Idea },
  { path: '/orders', component: Orders },
  { path: '/calculator', component: Calculator },
  { path: '/javaScript', component: JavaScript },
  { path: '/tablitsa', component: Tablitsa },
  { path: '/bitcoin', component: Bitcoin }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  render: h => h(App)
})

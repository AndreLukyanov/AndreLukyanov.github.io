import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './assets/Home/Home.vue'
import News from './assets/News/News.vue'
import Idea from './assets/Idea/Idea.vue'
import Orders from './assets/Orders/Orders.vue'
import Calculator from './assets/Сalculator/Сalculator.vue'
import JavaScript from './assets/JavaScript/JavaScript.vue'
import Tablet from './assets/Tablet/Tablet.vue'

Vue.use(VueRouter);

const routes = [
  {path: '/', component: Home},
  { path: '/news', component: News },
  { path: '/idea', component: Idea },
  { path: '/orders', component: Orders },
  { path: '/calculator', component: Calculator },
  { path: '/javaScript', component: JavaScript },
  { path: '/tablet', component: Tablet }
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

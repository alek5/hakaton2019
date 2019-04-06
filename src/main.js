import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Blog from './components/Blog'
import Donat from './components/Donat'
import FAQ from './components/FAQ'
import firebase from './firebase'
import VueFire from 'vuefire'


Vue.use(VueRouter);
Vue.use(VueFire);
/*
firebase.initializeApp({
  projectId: 'saratovair-d566b', 
  databaseURL: 'https://saratovair-d566b.firebaseio.com'
 })
 export const db = firebase.database()
*/
let router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/blog', component: Blog },
    { path: '/faq', component: FAQ },
    { path: '/donat', component: Donat }
  ],
  mode: 'history'
})

new Vue({
  el: '#app',
  router: router,
//  render: h => h(App)
})


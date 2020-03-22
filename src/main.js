import Vue from 'vue'
import router from './router'
import firebase from 'firebase'
import App from './App.vue'

import Bootstrap from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Bootstrap)

Vue.config.productionTip = false

// Your web app's Firebase configuration
// この設定情報はFirebaseのコンソールでプロジェクトの設定から取得して貼り付けてください。
var firebaseConfig = {
  apiKey: "AIzaSyBs3EkI7xTbHdOpHlrgvpg_7uMapxcBPp0",
  authDomain: "githubpages-todo-fb.firebaseapp.com",
  databaseURL: "https://githubpages-todo-fb.firebaseio.com",
  projectId: "githubpages-todo-fb",
  storageBucket: "githubpages-todo-fb.appspot.com",
  messagingSenderId: "866981490178",
  appId: "1:866981490178:web:45d3c3aea8327edb36011b",
  measurementId: "G-H5ES6WY7W9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

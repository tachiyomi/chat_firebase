<template>
  <div id="app">
    <label>名前</label>
    <input placeholder="User name" type="text" v-model="userName" />

    <label>メッセージ</label>
    <input placeholder="Massage" type="text" v-model="message" />
    <button @click="sendMessage">送信</button>
    <ul>
      <li v-for="(response, key) in filteredlist" v-bind:key="key">
        {{ response.name }}
        <span style="margin-left:100px;">{{ response.message}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'app',
  data() {
    return {
      database: null,
      responses: null,
      responselist: [],
      userName: '',
      message: ''
    };
  },
  created: function() {
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

    this.database = firebase.database();
    this.responses = this.database.ref('responses');

    var _this = this;
    this.responses.on('value', function(snapshot){
      _this.responselist = snapshot.val();
    });
  },
  computed:{
    filteredlist: function(){
      return this.responselist;
    }
  },
  methods: {
    sendMessage: function() {
      this.responses.push({
        name: this.userName,
        message: this.message,
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

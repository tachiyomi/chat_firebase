<template>
  <div id="app">
    <div class="container my-2 py-3">
      <table class="form-inline">
        <tbody>
        <tr>
          <th scope="row">Name</th>
          <td><input class="form-control" placeholder="Input user name" type="text" v-model="userName" /></td>
        </tr>
        <tr>
          <th scope="row">Text</th>
          <td><input class="form-control" placeholder="Input message" type="text" v-model="text" /></td>

          <td><button type="button" class="btn btn-outline-light" @click="sendMessage">Send</button></td>
        </tr>
        </tbody>
      </table>

      <div v-for="(response, key) in filteredlist" v-bind:key="key">
        <Response :name=response.name :text=response.text></Response>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import Response from './components/Response.vue'

export default {
  name: 'app',
  data() {
    return {
      database: null,
      responses: null,
      responselist: [],
      userName: '',
      text: ''
    };
  },
  components: {
    Response
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
      if(!this.userName || !this.text) return;
      this.responses.push({
        name: this.userName,
        text: this.text,
      })
    }
  }
}
</script>

<style>
@font-face {
	font-family: "Banana Slip";
	src:url("Banana-Slip.otf") format("opentype");
	font-weight: normal;
}

*{
  margin: auto;
}

html{
  background: #4d4646;
  margin: auto;
}

#app {
  font: 18px/120% 'Banana Slip','Avenir', Helvetica, Arial, sans-serif;
  background: #5b5656;
  color: #f5eaea;
}

table{
  background-color: #4d4646;
  padding: 5px;
  border: solid 1px #212529;
}

table th, table td {
  vertical-align: middle;
  padding: 5px;
}
</style>

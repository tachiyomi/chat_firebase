<template>
<div id="app">
  <div class="container my-2">
    <p class="m-0">Welcome to chat room made by tachiyomi !</p>
    <p class="m-0 mb-1">Please send a message !</p>
    <table class="form-inline">
      <tbody>
      <tr>
        <th scope="row">Name</th>
        <td><input class="form-control" placeholder="Input user name" type="text" v-model="userName" /></td>
      </tr>
      <tr>
        <th scope="row">Text</th>
        <td><input class="form-control" placeholder="Input message" type="text" v-model="text" /></td>
        <td><button type="button" class="btn btn-outline-dark" @click="sendMessage">Send</button></td>
      </tr>
      </tbody>
    </table>
    <div class="responses">
      <div v-for="(response, key) in filteredlist" v-bind:key="key">
        <Response :name=response.name :text=response.text :UserIsLogined=loginUser @remove="remove(key)"/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import firebase from 'firebase'
import Response from './Response.vue'

export default {
  name: 'Chatroom',
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
    },
    remove(key){
      this.responses.child(key).remove();
    }
  }
}
</script>

<style scoped>
#app{
  background-color: #F5F4D5;
  display: block;
  vertical-align: middle;
  font-size:0;
  text-align: center;
}

.container{
  font-size:20px;
  display:inline-block;
}

p{
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #39183D;
}

table{
  background-color: #B39980;
  padding: 5px 100px;
  border: solid 1px #39183D;
  border-radius: 6px;
  color: #FFFFFF;
  display:inline-block;
  text-align: center;
}

table th, table td {
  padding: 5px;
}

.responses{
  padding-left: 10px;
  font-weight: bold;
}
</style>

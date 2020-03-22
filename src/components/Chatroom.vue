<template>
<div id="app">
  <div class="container-fluid">
    <p class="m-0 py-1">Welcome to chat room made by tachiyomi!</p>
    <p class="m-0 py-1">Please send a message!</p>

    <div class="table-responsive mb-1">
      <table class="form-inline">
        <tbody>
        <tr>
          <th scope="row">
            <label class="control-label">Name</label>
          </th>
          <td><input class="form-control" placeholder="Input user name" type="text" v-model="userName" /></td>
          <td/>
        </tr>
        <tr>
          <th scope="row">
            <label class="control-label">Text</label>
          </th>
          <td>
            <input class="form-control" placeholder="Input message" type="text" v-model="text" />
          </td>
          <td>
            <button type="button" class="btn btn-outline-dark ml-2" @click="sendMessage">Send</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <div class="responses">
      <div v-for="(response, key) in filteredlist" v-bind:key="key">
        <Response :name=response.name :text=response.text :loginUser=loginUser @remove="remove(key)"/>
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
      text: '',
      loginUser: false
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

    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
          this.loginUser=false
      } else {
          this.loginUser=true
      }
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
        text: this.text
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
  text-align: center;
}

p{
  font-weight: bold;
  color: #39183D;
}

table{
  background-color: #B39980;
  padding: 0% 5%;
  border: solid 1px #39183D;
  border-radius: 6px;
  color: #FFFFFF;
  display:inline-block;
}

table td{
  padding: 2%;
}

.responses{
  display:inline-block;
}
</style>

<template>
  <div id="app">
    <div class="container my-2">
      <p class="m-0 mb-1">This is a page for the administrator(Tachiyomi) .</p>
      <table class="signin form-inline">
        <tbody>
        <tr>
          <th scope="row"><h2>Sign in</h2></th>
        </tr>
        <tr>
          <th scope="row">UserName</th>
          <td><input class="form-control" placeholder="Email" type="email" v-model="email" /></td>
        </tr>
        <tr>
          <th scope="row">Password</th>
          <td><input class="form-control" placeholder="Password" type="password" v-model="password" /></td>

          <td><button type="button" class="btn btn-outline-dark" @click="signIn">Signin</button></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Signin',
  data() {
    return {
      email: '123@gmail.com',
      password: '123456',
      loginUser: false
    };
  },
  updated: function() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
          this.loginUser=false
      } else {
          this.loginUser=true
      }
    });
  },
  methods: {
    signIn: function(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          console.log(user)
        },
        error => {
          alert(error.message)
        }
      );
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
#app{
  background-color: #F5F4D5;
  font-size:0;
  text-align: center;
}

.container{
  font-size:20px;
  display:inline-block;
}

p{
  font-size: 24px;
  font-weight: bold;
  color: #39183D;
}

table h2{
  font-weight: bold;
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
  vertical-align: middle;
  padding: 5px;
}
</style>

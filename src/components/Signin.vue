<template>
  <div id="app">
    <div class="container-fluid">
      <p v-if="loginUser" class="m-0 my-2">You have already been logined .</p>
      <p v-else class="m-0 py-2">This is a page for the administrator(Tachiyomi).</p>

      <div class="table-responsive mb-1">
        <table class="form-inline">
          <tbody>
          <tr>
            <th scope="row"><h2>Signin</h2></th>
          </tr>
          <tr>
            <th scope="row">
              <label class="control-label">Email</label>
            </th>
            <td><input class="form-control" placeholder="Email" type="email" v-model="email" /></td>
          </tr>
          <tr>
            <th scope="row">
              <label class="control-label">Password</label>
            </th>
            <td><input class="form-control" placeholder="Password" type="password" v-model="password" /></td>

            <td><button type="button" class="btn btn-outline-dark ml-2" @click="signIn">Signin</button></td>
          </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Signin',
  data() {
    return {
      email: '',
      password: '',
      loginUser: false
    };
  },
  created: function() {
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
        .then(function() {
          alert('Welcome Tachiyomi ⸜(* ॑꒳ ॑* )⸝')
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
  text-align: center;
}

p{
  font-weight: bold;
  color: #39183D;
}

table h2{
  font-weight: bold;
}

table{
  background-color: #B39980;
  padding: 0% 10%;
  border: solid 1px #39183D;
  border-radius: 6px;
  color: #FFFFFF;
  display:inline-block;
}

table td {
  padding: 2%;
}
</style>

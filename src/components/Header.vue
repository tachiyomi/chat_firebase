<template>
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">

        <a type="button" class="navbar-brand underLine" @click="$router.push('/')">Tachiyomi</a>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#menu" aria-expanded="false">
          <i class="fas fa-bars"></i>
        </button>

        <div id="menu" class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a type="button" class="nav-link underLine" @click="$router.push('/')">Home</a>
            </li>
            <li class="nav-item">
              <a type="button" class="nav-link underLine" @click="$router.push('/todolist')">LIST I wanna do<i v-if="loginUser" class="fas fa-tools"></i></a>
            </li>
            <li class="nav-item">
              <a type="button" class="nav-link underLine" @click="$router.push('/chatroom')">CHAT<i v-if="loginUser" class="fas fa-tools"></i></a>
            </li>
          </ul>

          <ul class="navbar-nav">
            <li class="nav-item">
              <a v-if="loginUser" type="button" class="nav-link underLine" @click="logout">LOGOUT</a>
              <a v-else type="button" class="nav-link" @click="$router.push('/signin')"><i class="fas fa-wrench"></i></a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  </header>
</template>

<script>
import firebase from 'firebase'

export default {
    name: "Header",
    data(){
      return{
        loginUser:false
      }
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
      logout() {
        firebase.auth().signOut()
        this.$router.push('/')
      }
    }
}
</script>

<style scoped>
header{
  background-color: #D7EDA6;
  border-bottom: solid 1px #39183D;
}

a, button{
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

a:link, a:visited, a:hover, a:active {
  color: #39183D;
}

a.underLine {
  font-weight: bold;
  position: relative;
  display: inline-block;
  transition: .3s;
}
a.underLine::after {
  position: absolute;
  bottom: 14%;
  left: 50%;
  content: '';
  width: 0;
  height: 2px;
  background-color: #39183D;
  transition: .5s;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
a.underLine:hover::after {
  width: 100%;
}

.container-fluid button{
  border: solid 1px #39183D;
  background-color: #E8F5CB;
}
</style>

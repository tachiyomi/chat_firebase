<template>
<div id="app">
  <div class="container-fluid">
    <h1>やりたいことリスト</h1>

    <div class="todos">
      <div class="m-1" v-for="(todo, key) in filteredlist" v-bind:key="key">
          <span v-if="todo.isCompleted"><i class="fas fa-check-circle"></i></span>
          <span v-else></span>

          <span v-bind:class="{isCompleted: todo.isCompleted}">
            {{todo.name}}<span class="dates"> @{{todo.timestamp}}</span>
          </span>
          <button v-if="loginUser && !todo.isCompleted" type="button" class="btn btn-sm btn-outline-primary ml-3" @click="complete(key)">Did It</button>
      </div>
    </div>

    <div v-if="loginUser" class="table-responsive mb-1">
      <table class="form-inline">
        <tbody>
        <tr>
          <th scope="row">
            <label class="control-label">new todo</label>
          </th>
          <td><input class="form-control" placeholder="Input todo's name" type="text" v-model="todoName" /></td>
          <td>
            <button type="button" class="btn btn-outline-dark ml-2" @click="addTodo">Add</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script>
import firebase from 'firebase'
import dayjs from 'dayjs'

dayjs.locale('ja');

export default {
    name: "Todolist",
    data() {
      return{
        database: null,
        todos: null,
        todolist: [],
        todoName: '',
        loginUser: false
      }
    },
    created: function() {
      this.database = firebase.database();
      this.todos = this.database.ref('todos');

      var _this = this;
      this.todos.on('value', function(snapshot){
        _this.todolist = snapshot.val();
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
        return this.todolist;
      }
    },
    methods: {
      addTodo: function() {
        if(!this.todoName) return;
        this.todos.push({
          name: this.todoName,
          isCompleted: false,
          timestamp: dayjs().format('YYYY-MM-DD')
        })
      },
      complete(key){
        this.todos.child(key).update({'isCompleted':true});
      }
    }
}
</script>

<style scoped>
#app{
  background-color: #F5F4D5;
  text-align: left;
}

h1 {
  position: relative;
  padding: 0.25em 0;
  margin: 0%;
}
h1:after {
  content: "";
  display: block;
  height: 4px;
  background: -webkit-linear-gradient(to right, rgb(230, 90, 90), transparent);
  background: linear-gradient(to right, rgb(230, 90, 90), transparent);
}

.isCompleted{
  color: #bbbbbb;
}

.dates{
  font-size: 60%;
}

table{
  margin: 1%;
  padding: 0% 1%;
  border: solid 1px #39183D;
  display:inline-block;
}

table td{
  padding: 2%;
}

.todos{
  margin-left: 2.5%;
  font-size: 120%;
  display:inline-block;
}
</style>

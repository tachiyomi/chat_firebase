import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Chatroom from '@/components/Chatroom'
import Todolist from '@/components/Todolist'
import Signin from '@/components/Signin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/chatroom',
      name: 'Chatroom',
      component: Chatroom
    },
      {
        path: '/todolist',
        name: 'Todolist',
        component: Todolist
      },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ]
})

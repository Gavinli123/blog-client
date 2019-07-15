import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/Login/template.vue'
import Create from '@/pages/Create/template.vue'
import Detail from '@/pages/Detail/template.vue'
import Edit from '@/pages/Edit/template.vue'
import Index from '@/pages/Index/template.vue'
import My from '@/pages/My/template.vue'
import Register from '@/pages/Register/template.vue'
import User from '@/pages/User/template.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/create',
    name: 'create',
    component: Create
  }, {
    path: '/Detail',
    name: 'detail',
    component: Detail
  }, {
    path: '/edit',
    name: 'edit',
    component: Edit
  }, {
    path: '/index',
    name: 'index',
    component: Index
  }, {
    path: '/my',
    name: 'my',
    component: My
  }, {
    path: '/register',
    name: 'register',
    component: Register
  }, {
    path: '/user',
    name: 'user',
    component: User
  }
  ]
})

import Vue from 'vue'

import VueRouter from 'vue-router'
// 使用路由插件
Vue.use(VueRouter)


// 引入路由模块
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import User from '../views/User.vue'


const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', component: Login, name: 'login' },
        { path: '/register', component: Register, name: 'register' },
        { path: '/user', component: User, name: 'user' }
    ]
})

export default router
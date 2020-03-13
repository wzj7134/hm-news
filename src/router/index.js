import Vue from 'vue'

import VueRouter from 'vue-router'

import Login from '../views/Login'
import Register from '../views/Register'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/login', component: Login },
        { path: '/register', component: Register }
    ]
})

export default router
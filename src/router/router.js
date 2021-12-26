import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '../pages/HelloWorld'
import Find from '../pages/Find'
import Reviews from '../pages/Reviews'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import Registration from '../pages/Registration'

Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        {
            path: '',
            component: HelloWorld
        },
        {
            path: '/find-sitter',
            component: Find
        },
        {
            path: '/reviews',
            component: Reviews
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/profile',
            component: Profile
        },
        {
            path: '/registration',
            component: Registration
        }
    ],
    mode: 'history'
})

export default router;

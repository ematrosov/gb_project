import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../components/Main'
import Find from '../pages/Find'
import Reviews from '../pages/Reviews'
import About from '../pages/About'
import Sitter from '../pages/Sitter'
import Become from '../pages/Become'



Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        {
            path: '',
            component: Main
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
            path: '/become-sitter',
            component: Become
        },
        {
            path: '/find-sitter/:id',
            name: 'find-sitter',
            component: Sitter
        },
        {
            path: '/about',
            component: About
        }
    ],
    mode: 'history'
})


export default router;



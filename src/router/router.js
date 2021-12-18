import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '../pages/HelloWorld'
import Find from '../pages/Find'
import Reviews from '../pages/Reviews'
import Become from '../pages/Become'

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
            path: '/become-sitter',
            component: Become
        }
    ],
    mode: 'history'
})

export default router;
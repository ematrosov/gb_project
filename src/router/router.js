import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '../pages/HelloWorld'
import Find from '../pages/Find'

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
        }
    ],
    mode: 'history'
})

export default router;
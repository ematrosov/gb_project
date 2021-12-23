import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../components/Main'
//import HelloWorld from '../pages/HelloWorld'
import Find from '../pages/Find'
import Reviews from '../pages/Reviews'

import About from '../pages/About'
import Become from '../pages/Become'



Vue.use(VueRouter);

console.log('вошла в роутер')

let router = new VueRouter({
    routes: [
        {
            path: '',
            component: Main
        },
        //{

        //path: '',
        //component: HelloWorld
        //},
        {


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

            path: '/about',
            component: About


        }
    ],
    mode: 'history'
})


export default router;



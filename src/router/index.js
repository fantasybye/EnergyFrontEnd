import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/containers/Home'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            component: Home
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        }
    ]
})
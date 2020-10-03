import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/containers/Home';
import Park from '@/containers/Park';

Vue.use(Router);

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
        },
        {
          path: '/park',
          name: 'Park',
          component: Park
        }
    ]
})
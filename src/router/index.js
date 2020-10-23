import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/containers/Home';
import Park from '@/containers/Park';
// import JieGuoLineChart from "@/components/home/JieGuoLineChart";
// import ZhanBiPieChart from "@/components/home/ZhanBiPieChart";
import Modal from "@/components/park/TuoPuModal";
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
        },
        {
            path: '/test',
            name: 'Test',
            component: Modal
        }
    ]
})
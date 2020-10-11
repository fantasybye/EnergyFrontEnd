import Vue from 'vue';
import Vuex from 'vuex';
import homeData0 from "@/store/home/homeData0";
import homeData1 from "@/store/home/homeData1";
import homeData2 from "@/store/home/homeData2";
import homeData3 from "@/store/home/homeData3";
import homeData4 from "@/store/home/homeData4";
import parkData0 from "@/store/park/parkData0";
import parkData1 from "@/store/park/parkData1";
import parkData2 from "@/store/park/parkData2";
import parkData3 from "@/store/park/parkData3";
import parkData4 from "@/store/park/parkData4";
import newParkData0 from "@/store/park/newParkData0";


Vue.use(Vuex);

const state = {
    home: [homeData0,homeData1,homeData2,homeData3,homeData4],
    park: [parkData0,parkData1,parkData2,parkData3,parkData4,newParkData0]
};

export default new Vuex.Store({
    state
});
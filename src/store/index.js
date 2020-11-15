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
import addParkData0 from "@/store/park/addParkData0";
import stopParkData0 from "@/store/park/stopParkData0";
import modalData0 from "@/store/park/modal/modalData0";
import modalData1 from "@/store/park/modal/modalData1";
import newParkData0 from "@/store/newPark/newParkData0";
import newParkData1 from "@/store/newPark/newParkData1";
import newParkData2 from "@/store/newPark/newParkData2";

Vue.use(Vuex);

const state = {
    home: [homeData0,homeData1,homeData2,homeData3,homeData4],
    park: [parkData0,parkData1,parkData2,parkData3,parkData4,addParkData0,stopParkData0],
    modal: [modalData0, modalData1],
    newPark:[newParkData0, newParkData1, newParkData2]
};

export default new Vuex.Store({
    state
});
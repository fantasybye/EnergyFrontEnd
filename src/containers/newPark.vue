<template>
  <div class="park-wrapper">
    <div class="park-title">
      <p class="park-title-text">{{ parkData.name }}</p>
    </div>
    <div class="park-header" :class="classObject"/>
    <div class="tuo-pu tuo-pu-up">
      <PanelTitle name=" 面向数据中心的典型能源站"/>
      <div class="panel-body tuo-pu-body">
        <div class="img-wrapper">
          <img :src="require(`../assets/park/new/tuo-pu1.png`)" alt="">
        </div>
      </div>
    </div>
    <div class="tuo-pu tuo-pu-down">
      <PanelTitle name=" 通用型典型能源站"/>
      <div class="panel-body tuo-pu-body">
        <div class="img-wrapper">
          <img :src="require(`../assets/park/new/tuo-pu2.png`)" alt="">
        </div>
      </div>
    </div>
    <div class="bottom-panel ping-gu">
      <PanelTitle name=" 评估参数"/>
      <div class="panel-body bottom-body">
        <CirclePanel :text="['总投资额', '2.71亿元']" id="1"/>
      </div>
    </div>
    <div class="bottom-panel fei-yong">
      <PanelTitle name=" 设备投资费用"/>
      <div class="panel-body bottom-body">
      </div>
    </div>
    <div class="neng-hao-fen-xi">
      <PanelTitle name=" 园区能耗分析" />
      <div class="panel-body neng-hao-body">
        <neng-hao-bar-chart :bar-data="parkData.nengHaoData.barData" :width="620" :height="411"/>
        <neng-hao-pie-chart :pie-data="parkData.nengHaoData.pieData"/>
      </div>
    </div>
    <div class="fu-he-te-xing">
      <PanelTitle name=" 负荷特性" />
      <div class="panel-body fu-he-body">
        <div class="fu-he-te-xing-chart" v-for="lineData in parkData.fuHeLineData" :key="lineData.id">
          <fu-he-line-chart  :line-data="lineData" :width="1076" :height="300"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PanelTitle from "@/components/park/PanelTitle";
import FuHeLineChart from "@/components/park/line/FuHeLineChart";
import NengHaoPieChart from "@/components/park/NengHaoPieChart";
import NengHaoBarChart from "@/components/park/bar/NengHaoBarChart";
import CirclePanel from "@/components/park/CirclePanel";

export default {
  name: "newPark",
  components:{
    PanelTitle,
    FuHeLineChart,
    NengHaoPieChart,
    NengHaoBarChart,
    CirclePanel
  },
  data(){
    return{
      parkData: this.$store.state.park[1],
      classObject:{
        background1: true
      }
    }
  }
}
</script>

<style scoped>
.park-wrapper {
  width: 6508px;
  height: 1940px;
  padding: 0;
  margin: 0;
  position: fixed;
  top: 0;
  bottom:0;
  left: 0;
  right: 0;
  background: url("../assets/park/new/background.png");
}
.park-title {
  display: inline-block;
  width: 6508px;
  height: 101px;
  text-align: center;
}
.park-title-text {
  display: inline-block;
  background: linear-gradient(180deg, #52FFEA 0%, #20A0FF 100%);
  -webkit-background-clip: text;
  margin-top: 64px;
  color: transparent;
  font-size: 64px;
  font-family: PingFangSC-Semibold, PingFang SC, serif;
  font-weight: 700;
  z-index: 2;
  position: relative;
}
.park-header {
  margin-top: -23px;
  width: 6508px;
  height: 60px;
}
.background1{
  background: url("../assets/park/title/title1.png");
}
.tuo-pu{
  position: absolute;
  left: 197px;
  display: inline-block;
  width: 1101px;
  height: 843px;
  background: rgba(7, 28, 54, 0.5);
}
.tuo-pu .img-wrapper{
  width: 886px;
  height: 710px;
  margin: 0 107px;
  padding-top: 20px;
}
.tuo-pu-up{
  top: 156px;
}
.tuo-pu-down{
  top: 1045px
}
.tuo-pu-body{
  height: 755px;
}
.bottom-panel{
  position: absolute;
  display: inline-block;
  top: 1460px;
  width: 1834px;
  height: 424px;
  background: rgba(7, 28, 54, 0.5);
}
.ping-gu{
  left: 1371px;
}
.fei-yong{
  left: 3284px;
}
.bottom-body{
  height: 336px;
}
.neng-hao-fen-xi {
  position: absolute;
  left: 5194px;
  top: 156px;
  display: inline-block;
  width: 1100px;
  height: 499px;
  background: rgba(7, 28, 54, 0.5);
}
.fu-he-te-xing{
  position: absolute;
  left: 5194px;
  top: 710px;
  display: inline-block;
  width: 1100px;
  height: 1168px;
  background: rgba(7, 28, 54, 0.5);
}
.panel-body {
  border: 6px solid rgba(33, 160, 253, 0.1);
  border-top: none;
}
.neng-hao-body{
  height: 411px;
}
.fu-he-body{
  height: 1080px;
}
.fu-he-te-xing-chart{
  display: inline-block;
  width: 1076px;
  height: 300px;
  margin: 40px 0 0 14px;
}
</style>
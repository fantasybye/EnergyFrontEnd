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
    <div class="cloud-view">
      <div class="zhan cloud-text">燃气门站</div>
      <div class="zhan-line"><ZhanLine /></div>
      <div class="bian1">
        <div class="bian-img" />
        <div class="cloud-text">新东变</div>
      </div>
      <div class="bian2">
        <div class="bian-img" />
        <div class="cloud-text">越江变</div>
      </div>
      <div class="bian-line"><BianLine /></div>
      <div class="point-wrapper-1">
        <div class="cloud-text point1">中国移动5G数据中心</div>
        <CloudPoint id="1" color="#CB3D27"/>
      </div>
      <div class="point-wrapper-2">
        <div class="cloud-text point2">中心北斗卫星遥感产业园</div>
        <CloudPoint id="2" color="#CB3D27"/>
      </div>
      <div class="point-wrapper-3">
        <div class="cloud-text point3">梓萧数据</div>
        <CloudPoint id="3" color="#CB3D27"/>
      </div>
      <div class="point-wrapper-4">
        <CloudPoint id="4" color="#86F4FF"/>
        <div class="cloud-text point4">腾讯云数据中心</div>
      </div>
      <div class="point-wrapper-5">
        <CloudPoint id="5" color="#86F4FF"/>
        <div class="cloud-text point5">电信云数据中心</div>
      </div>
      <div class="point-wrapper-6">
        <CloudPoint id="6" color="#CB3D27"/>
        <div class="cloud-text point6">诺德云电机</div>
      </div>
    </div>
    <div class="bottom-panel ping-gu">
      <PanelTitle name=" 评估参数"/>
      <div class="panel-body bottom-body">
        <div class="circle-panel-wrapper" v-for="item in textArray" :key="item.id">
          <CirclePanel :text="item.text" :id="item.id"/>
        </div>
      </div>
    </div>
    <div class="bottom-panel fei-yong">
      <PanelTitle name=" 设备投资费用"/>
      <div class="panel-body bottom-body list-item-panel">
        <div class="list-item-wrapper" v-for="item in feiYongData" :key="item.id">
          <ListItem :text="item.text" :title="item.title"/>
        </div>
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
import CirclePanel from "@/components/park/circlepanel/CirclePanel";
import ListItem from "@/components/cloudview/ListItem";
import CloudPoint from "@/components/park/animation/CloudPoint";
import ZhanLine from "@/components/cloudview/ZhanLine";
import BianLine from "@/components/cloudview/BianLine";

export default {
  name: "newPark",
  components:{
    PanelTitle,
    FuHeLineChart,
    NengHaoPieChart,
    NengHaoBarChart,
    CirclePanel,
    ListItem,
    CloudPoint,
    ZhanLine,
    BianLine
  },
  data(){
    return{
      parkData: this.$store.state.park[1],
      classObject:{
        background1: true
      },
      textArray:[
        {
          id:1,
          text:['总投资额', '2.71亿元']
        },
        {
          id:2,
          text: ['投资回收期', '7.75年']
        },
        {
          id:3,
          text: ['碳排放', '1012吨/年']
        }
      ],
      feiYongData:[
        {
          id:1,
          title:'光伏及储能',
          text:'1380万元'
        },
        {
          id:2,
          title:'冷水机组',
          text:'8420万元'
        },
        {
          id:3,
          title:'热泵机组',
          text:'2000万元'
        },
        {
          id:4,
          title:'燃气锅炉',
          text:'2250万元'
        },
        {
          id:5,
          title:'变电站',
          text:'1.2亿元'
        },
        {
          id:6,
          title:'其他',
          text:'1050万元'
        }
      ]
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
.cloud-view{
  position: absolute;
  left: 1293px;
  top: 154px;
  width: 3902px;
  height: 1292px;
}
.cloud-text{
  font-family: PingFangSC-Medium, PingFang SC, serif;
  font-size: 60px;
  font-weight: 600;
  color: #FFF;
}
.zhan{
  position: absolute;
  top: 0;
  text-align: center;
  font-size: 44px;
  line-height: 100px;
  right: 308px;
  width: 337px;
  height: 100px;
  background: linear-gradient(90deg, rgba(32, 160, 255, 0.2) 0%, rgba(32, 159, 248, 0.1) 100%);
  border-radius: 2px;
}
.zhan-line{
  position: absolute;
  top: 50px;
  left: 95px;
  width: 3162px;
  height: 611px;
}
.bian1{
  position: absolute;
  top: 204px;
  right: 57px;
}
.bian2{
  position: absolute;
  top: 997px;
  left: 30px;
}
.bian-img{
  width: 210px;
  height: 133px;
  background: url("../assets/park/new/bian.png");
}
.bian-line{
  width: 3542px;
  height: 795px;
  position: absolute;
  left: 135px;
  top: 274px;
}
.point-wrapper-1{
  position: absolute;
  left: 907px;
  top: 443px;
}
.point-wrapper-2{
  position: absolute;
  left: 1556px;
  top: 278px;
}
.point-wrapper-3{
  position: absolute;
  left: 2323px;
  top: 156px;
}
.point-wrapper-4{
  position: absolute;
  left: 1187px;
  top: 826px;
}
.point-wrapper-5{
  position: absolute;
  left: 1893px;
  top: 677px;
}
.point-wrapper-6{
  position: absolute;
  left: 2603px;
  top: 576px;
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
.circle-panel-wrapper{
  display: inline-block;
  width: 460px;
  height: 220px;
  margin: 50px 0 50px 100px;
}
.list-item-panel{
  padding-left: 20px;
}
.list-item-wrapper{
  display: inline-block;
  width: 230px;
  height: 175px;
  margin: 60px 0 0 60px;
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
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
          <img :src="require(`../assets/park/new/tuo-pu${this.id}-1.png`)" alt="">
        </div>
      </div>
    </div>
    <div class="tuo-pu tuo-pu-down">
      <PanelTitle name=" 通用型典型能源站"/>
      <div class="panel-body tuo-pu-body">
        <div class="img-wrapper">
          <img :src="require(`../assets/park/new/tuo-pu${this.id}-2.png`)" alt="">
        </div>
      </div>
    </div>
    <div class="cloud-view-title">
      <PanelTitle :fstyle="{fontSize: '60px'}" :name="this.name"/>
    </div>
    <div class="cloud-view">
      <div class="zhan-img" />
      <div class="zhan-line"><ZhanLine :has-branch="hasBranch" /></div>
      <div class="zhan-line">
        <ZhanFlow id="1"/>
      </div>
      <div class="nyz-view" v-for="i in nyzPos[this.id]" :key="`nyz-wra${i.id}`">
        <NengYuanZhan :id="i.id" :left="i.left" :color="i.color" :top="i.top" :bottom="i.bottom"/>
      </div>
      <div class="nyzx-view" v-for="i in nyzxPos" :key="`nyzx-wra${i.id}`">
        <NengYuanZhongXin :id="i.id" :left="i.left" :top="i.top"/>
      </div>
      <div class="cloud-text-view" v-for="i in cloudText" :key="`cloud-text-wra${i.id}`">
        <CloudText :id="i.id" :left="i.left" :top="i.top" :text="i.text"/>
      </div>
      <div class="nyzx-img-view" v-for="i in nyzxImg" :key="`nyzx-img${i.id}`">
        <CloudImg :id="i.id" :left="i.left" :top="i.top" :type="i.type"/>
      </div>
      <div class="bian1">
        <div class="bian-img1" />
      </div>
      <div class="bian2">
        <div class="bian-img2" />
      </div>
      <div class="zhan-point line-point" />
      <div class="bian-point1 line-point" />
      <div class="bian-point2 line-point" />
      <div class="bian-line"><BianLine /></div>
<!--      <div v-for="i in 3" :key="`bian${i}`">-->
        <div class="bian-line">
          <BianFlow id="1" />
        </div>
<!--      </div>-->
    </div>
    <div class="cloud-view-legend">
      <div class="circle-legend green">
        <span>面向数据中心型能源站</span>
      </div>
      <div class="circle-legend blue">
         <span>通用型能源站</span>
      </div>
    </div>
    <div class="bottom-panel ping-gu">
      <PanelTitle name=" 评估参数"/>
      <div class="panel-body bottom-body">
        <div class="circle-panel-wrapper" v-for="item in textData" :key="item.id">
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
import ListItem from "@/components/park/animation/ListItem";
// import CloudPoint from "@/components/park/animation/CloudPoint";
import ZhanLine from "@/components/park/animation/ZhanLine";
import ZhanFlow from "@/components/park/animation/ZhanFlow";
import BianLine from "@/components/park/animation/BianLine";
import BianFlow from "@/components/park/animation/BianFlow";
import NengYuanZhan from "@/components/park/cloudview/NengYuanZhan";
import NengYuanZhongXin from "@/components/park/cloudview/NengYuanZhongXin";
import CloudText from "@/components/park/cloudview/CloudText";
import CloudImg from "@/components/park/animation/CloudImg";

export default {
  name: "newPark",
  components:{
    PanelTitle,
    FuHeLineChart,
    NengHaoPieChart,
    NengHaoBarChart,
    CirclePanel,
    ListItem,
    // CloudPoint,
    ZhanLine,
    ZhanFlow,
    BianLine,
    BianFlow,
    NengYuanZhan,
    NengYuanZhongXin,
    CloudText,
    CloudImg
  },
  data(){
    return{
      id:0,
      parkData: this.$store.state.park[1],
      classObject:{
        background1: true
      },
      name:'',
      textData:[],
      feiYongData:[],
      nyzPos:[
        [
          {
            id:15,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:590,
            top:538
          },
        {
          id:0,
          color:'rgba(11, 219, 221, 1)',
          bottom:'rgba(11, 219, 221, 0.52)',
          left:693,
          top:710
        },
          {
            id:16,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:750,
            top:847
          },
        {
          id:1,
          color:'rgba(11, 219, 221, 1)',
          bottom:'rgba(11, 219, 221, 0.52)',
          left:820,
          top:1035
        },
          {
            id:17,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:896,
            top:1221
          },
          {
            id:18,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:931,
            top:473
          },
        {
          id:2,
          color:'rgba(38, 145, 255, 1)',//rgba(38, 145, 255, 1)
          bottom:'rgba(38, 145, 255, 0.52)',
          left:1128,
          top:879
        },
        {
          id:3,
          color:'rgba(11, 219, 221, 1)',
          bottom:'rgba(11, 219, 221, 0.52)',
          left:1224,
          top:609
        },
        {
          id:4,
          color:'rgba(38, 145, 255, 1)',
          bottom:'rgba(38, 145, 255, 0.52)',
          left:1297,
          top:718
        },
          {
            id:19,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:1430,
            top:1104
          },
        {
          id:5,
          color:'rgba(11, 219, 221, 1)',
          bottom:'rgba(11, 219, 221, 0.52)',
          left:1520,
          top:556
        },
        {
          id:6,
          color:'rgba(11, 219, 221, 1)',
          bottom:'rgba(11, 219, 221, 0.52)',
          left:1630,
          top:1050
        },
        {
          id:7,
          color:'rgba(11, 219, 221, 1)',
          bottom:'rgba(11, 219, 221, 0.52)',
          left:1767,
          top:429
        },
        {
          id:8,
          color:'rgba(38, 145, 255, 1)',
          bottom:'rgba(38, 145, 255, 0.52)',
          left:1803,
          top:853
        },
          {
            id:20,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:1828,
            top:987
          },
        {
          id:9,
          color:'rgba(11, 219, 221, 1)',
          bottom:'rgba(11, 219, 221, 0.52)',
          left:2048,
          top:911
        },
        {
          id:10,
          color:'rgba(11, 219, 221, 1)',
          bottom:'rgba(11, 219, 221, 0.52)',
          left:2687,
          top:269
        },
          {
            id:21,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:2738,
            top:396
          },
          {
            id:22,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:2861,
            top:549
          },
        {
          id:11,
          color:'rgba(11, 219, 221, 1)',
          bottom:'rgba(11, 219, 221, 0.52)',
          left:2848,
          top:377
        },
        {
          id:12,
          color:'rgba(11, 219, 221, 1)',
          bottom:'rgba(11, 219, 221, 0.52)',
          left:2988,
          top:519
        },
        {
          id:13,
          color:'rgba(38, 145, 255, 1)',
          bottom:'rgba(38, 145, 255, 0.52)',
          left:3036,
          top:306
        },
        {
          id:14,
          color:'rgba(38, 145, 255, 1)',
          bottom:'rgba(38, 145, 255, 0.52)',
          left:3232,
          top:463
        },
      ],
        [
          {
            id:15,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:590,
            top:538
          },
          {
            id:0,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:693,
            top:710
          },
          {
            id:16,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:750,
            top:847
          },
          {
            id:1,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:820,
            top:1035
          },
          {
            id:17,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:896,
            top:1221
          },
          {
            id:18,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:931,
            top:473
          },
          {
            id:2,
            color:'rgba(38, 145, 255, 1)',//rgba(38, 145, 255, 1)
            bottom:'rgba(38, 145, 255, 0.52)',
            left:1128,
            top:879
          },
          {
            id:3,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:1224,
            top:609
          },
          {
            id:4,
            color:'rgba(38, 145, 255, 1)',
            bottom:'rgba(38, 145, 255, 0.52)',
            left:1297,
            top:718
          },
          {
            id:19,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:1430,
            top:1104
          },
          {
            id:5,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:1520,
            top:556
          },
          {
            id:6,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:1630,
            top:1050
          },
          {
            id:7,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:1767,
            top:429
          },
          {
            id:8,
            color:'rgba(38, 145, 255, 1)',
            bottom:'rgba(38, 145, 255, 0.52)',
            left:1803,
            top:853
          },
          {
            id:20,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:1828,
            top:987
          },
          {
            id:9,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:2048,
            top:911
          },
          {
            id:10,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:2687,
            top:269
          },
          {
            id:21,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:2738,
            top:396
          },
          {
            id:22,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:2861,
            top:549
          },
          {
            id:11,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:2848,
            top:377
          },
          {
            id:12,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:2988,
            top:519
          },
          {
            id:13,
            color:'rgba(38, 145, 255, 1)',
            bottom:'rgba(38, 145, 255, 0.52)',
            left:3036,
            top:306
          },
          {
            id:14,
            color:'rgba(38, 145, 255, 1)',
            bottom:'rgba(38, 145, 255, 0.52)',
            left:3232,
            top:463
          },
        ],
        [
          {
            id:0,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:693,
            top:710
          },
          {
            id:1,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:820,
            top:1035
          },
          {
            id:2,
            color:'rgba(38, 145, 255, 1)',//rgba(38, 145, 255, 1)
            bottom:'rgba(38, 145, 255, 0.52)',
            left:1128,
            top:879
          },
          {
            id:3,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:1224,
            top:609
          },
          {
            id:4,
            color:'rgba(38, 145, 255, 1)',
            bottom:'rgba(38, 145, 255, 0.52)',
            left:1297,
            top:718
          },
          {
            id:5,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:1520,
            top:556
          },
          {
            id:6,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:1630,
            top:1050
          },
          {
            id:7,
            color:'rgba(38, 145, 255, 1)',
            bottom:'rgba(38, 145, 255, 0.52)',
            left:1739,
            top:616
          },
          {
            id:8,
            color:'rgba(38, 145, 255, 1)',
            bottom:'rgba(38, 145, 255, 0.52)',
            left:1803,
            top:853
          },
          {
            id:9,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:2048,
            top:911
          },
          {
            id:10,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:2687,
            top:269
          },
          {
            id:11,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:2848,
            top:377
          },
          {
            id:12,
            color:'rgba(11, 219, 221, 1)',
            bottom:'rgba(11, 219, 221, 0.52)',
            left:2988,
            top:519
          },
          {
            id:13,
            color:'rgba(38, 145, 255, 1)',
            bottom:'rgba(38, 145, 255, 0.52)',
            left:3036,
            top:306
          },
          {
            id:14,
            color:'rgba(38, 145, 255, 1)',
            bottom:'rgba(38, 145, 255, 0.52)',
            left:3232,
            top:463
          },
        ]
      ],
      nyzxPos:[
        {
          id:0,
          left:1115,
          top:500
        },
        {
          id:1,
          left:1354,
          top:828
        },
        {
          id:2,
          left:1676,
          top:411
        },
        {
          id:3,
          left:1879,
          top:690
        },
        {
          id:4,
          left:2583,
          top:267
        },
        {
          id:5,
          left:2718,
          top:483
        }
      ],
      cloudText:[
        {
          id:0,
          left:1193,
          top:470,
          text:'中国移动5G数据中心',
        },
        {
          id:1,
          left:1753,
          top:380,
          text:'中心北斗卫星遥感产业园',
        },
        {
          id:2,
          left:2657,
          top:235,
          text:'梓萧数据',
        },
        {
          id:3,
          left:1435,
          top:795,
          text:'腾讯云数据中心',
        },
        {
          id:4,
          left:1967,
          top:660,
          text:'电信云数据中心',
        },
        {
          id:5,
          left:2801,
          top:453,
          text:'诺德云电机',
        },
      ],
      hasBranch: true,
      nyzxImg:[
        {
          id:0,
          left:1109,
          top:699,
          type:1
        },
        {
          id:1,
          left:1671,
          top:613,
          type:1
        },
        {
          id:2,
          left:2578,
          top:467,
          type:1
        },
        {
          id:3,
          left:1347,
          top:1019,
          type:2
        },
        {
          id:4,
          left:1869,
          top:889,
          type:2
        },
        {
          id:5,
          left:2712,
          top:664,
          type:1
        },
      ]
    }
  },
  created() {
    this.fetchData();
  },
  methods:{
    fetchData(){
      switch (this.$route.query.id){
        case '0':
          this.id = 0;
          this.textData = this.$store.state.newPark[0].textArray;
          this.feiYongData = this.$store.state.newPark[0].feiYongArray;
          this.name = this.$store.state.newPark[0].name;
          this.hasBranch = true;
          break;
        case '1':
          this.id = 1;
          this.textData = this.$store.state.newPark[1].textArray;
          this.feiYongData = this.$store.state.newPark[1].feiYongArray;
          this.name = this.$store.state.newPark[1].name;
          this.hasBranch = false;
          break;
        case '2':
          this.id = 2;
          this.textData = this.$store.state.newPark[2].textArray;
          this.feiYongData = this.$store.state.newPark[2].feiYongArray;
          this.name = this.$store.state.newPark[2].name;
          this.hasBranch = true;
          break;
        default:
          this.textData = this.$store.state.newPark[0].textArray;
          this.feiYongData = this.$store.state.newPark[0].feiYongArray;
          this.name = this.$store.state.newPark[0].name;
          this.hasBranch = true;
          break;
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
.cloud-view-title{
  position: absolute;
  left: 1358px;
  top: 154px;
  width: 1425px;
  height: 99px;
}
.cloud-view{
  position: absolute;
  left: 1293px;
  top: 52px;
  width: 3902px;
  height: 1292px;
}
.nyz-view{
  width: 3902px;
  height: 1292px;
  position: absolute;
  left: 0;
  top: 0;
}
.nyzx-view{
  width: 3902px;
  height: 1292px;
  position: absolute;
  left: 0;
  top: 0;
}
.cloud-text-view{
  width: 3902px;
  height: 1292px;
  position: absolute;
  left: 0;
  top: 0;
}
.nyzx-img-view{
  width: 3902px;
  height: 1292px;
  position: absolute;
  left: 0;
  top: 0;
}
.zhan-img{
  position: absolute;
  top: 191px;
  left: 3164px;
  width: 245px;
  height: 124px;
  background: url("../assets/park/new/zhan.png");
}
.zhan-line{
  position: absolute;
  top: 279px;
  left: 234px;
  width: 2906px;
  height: 930px;
}
.bian1{
  position: absolute;
  top: 401px;
  left: 3454px;
}
.bian2{
  position: absolute;
  top: 1173px;
  left: 10px;
}
.bian-img1{
  width: 210px;
  height: 133px;
  background: url("../assets/park/new/bian1.png");
}
.bian-img2{
  width: 210px;
  height: 133px;
  background: url("../assets/park/new/bian2.png");
}
.line-point{
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #FFF000;
}
.bian-point1{
  left: 210px;
  top: 1192px;
}
.bian-point2{
  left: 3417px;
  top: 475px;
}
.zhan-point{
  background: #A128FF;
  left: 3127px;
  top: 264px;
}
.bian-line{
  width: 3206px;
  height: 717px;
  position: absolute;
  left: 221px;
  top: 492px;
}
.cloud-view-legend{
  position: absolute;
  left: 4635px;
  top: 1297px;
  height: 120px;
  width: 550px;
}
.cloud-view-legend .green{
  background: #0BDBDD;
}
.cloud-view-legend .blue{
  background: #2691FF;
}
.circle-legend{
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-bottom: 40px;
}
.circle-legend span{
  display: inline-block;
  line-height: 41px;
  height: 41px;
  width: 550px;
  text-indent: 51px;
  font-size: 41px;
  font-family: PingFang SC,serif;
  font-weight: bold;
  color: #FFFFFF;
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
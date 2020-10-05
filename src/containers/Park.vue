<template>
  <div class="park-wrapper">
    <div class="park-title">
      <p class="park-title-text">{{ parkData.name }}</p>
    </div>
    <div class="park-header " :class="classObject"/>
    <div class="neng-hao-fen-xi">
      <div class="panel-title"><span class="panel-title-text">园区能耗分析</span></div>
      <div class="panel-body neng-hao-body">
        <neng-hao-bar-chart :bar-data="parkData.nengHaoData.barData"/>
        <div :id="`yong-dian-zhu-xiang-pie${id}`" class="yong-dian-zhu-xiang-pie"/>
      </div>
    </div>
    <div class="fu-he-te-xing">
      <div class="panel-title"><span class="panel-title-text">负荷特性</span></div>
      <div class="panel-body fu-he-body">
        <div class="fu-he-te-xing-chart" v-for="lineData in parkData.fuHeLineData" :key="lineData.id">
          <fu-he-line-chart  :line-data="lineData" />
        </div>
      </div>
    </div>
    <div class="she-bei-tuo-pu">
      <div class="panel-title"><span class="panel-title-text">设备连接拓扑对比</span></div>
      <div class="panel-body she-bei-body">
        <div class="she-bei-fang-an fang-an-top">
          <p class="fang-an-text">方案一</p>
          <div class="img-wrapper">
            <img src="../assets/park/shebeifangan/fangan1.png" alt="">
          </div>
        </div>
        <div class="she-bei-fang-an">
          <p class="fang-an-text">方案二</p>
          <div class="img-wrapper">
            <img src="../assets/park/shebeifangan/fangan2.png" alt="">
          </div>
        </div>
        <div class="she-bei-fang-an">
          <p class="fang-an-text">方案三</p>
          <div class="img-wrapper">
            <img src="../assets/park/shebeifangan/fangan3.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="brief">
      <p class="brief-text" v-for="text in parkData.brief" :key="text">{{ text }}</p>
      <div class="brief-img"><img :src="require(`../assets/park/brief/brief${this.id}.jpg`)" alt=""></div>
    </div>
    <p class="fang-an-dui-bi-text">方案对比</p>
    <div class="fang-an-dui-bi">

    </div>
    <div class="yun-xing-qu-xian">
      <div class="panel-title"><span class="panel-title-text">系统设备运行曲线对比</span></div>
      <div class="panel-body yun-xing-body">
        <div class="an-niu-panel">

        </div>
        <div class="zong-jie-panel">
          <p class="zong-jie-title">系统运行情况总结</p>
          <div class="tu-li">
            <span class="rectan blue" />
            <span class="tu-li-label" >方案1(经济性最优)</span>
            <span class="rectan orange" />
            <span class="tu-li-label" >方案2(环保性最优)</span>
            <span class="rectan green" />
            <span class="tu-li-label" >方案3(经济环保均衡)</span>
          </div>
          <div class="zong-jie-chart">

          </div>
        </div>
      </div>
    </div>
    <div class="huan-bao-table">
      <p class="huan-bao-text">环保性对比</p>
    </div>
    <div class="huan-bao-chart">
      <p class="huan-bao-text">环保性对比</p>
    </div>
  </div>
</template>

<script>
import FuHeLineChart from "@/components/park/FuHeLineChart";
import NengHaoBarChart from "@/components/park/NengHaoBarChart";

export default {
  components:{
    FuHeLineChart,
    NengHaoBarChart
  },
  name: "Park",
  data() {
    return {
      id: 999,
      parkData:{},
      classObject:{
        background0:true,
        background1:false,
        background2:false,
        background3:false,
        background4:false
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData(){
      switch (this.$route.query.id){
        case '0':
          this.id=0;
          this.classObject.background0=true;
          this.classObject.background1=false;
          this.classObject.background2=false;
          this.classObject.background3=false;
          this.classObject.background4=false;
          this.parkData = this.$store.state.park[0];
          break;
        case '1':
          this.id=1;
          this.classObject.background0=false;
          this.classObject.background1=true;
          this.classObject.background2=false;
          this.classObject.background3=false;
          this.classObject.background4=false;
          this.parkData = this.$store.state.park[1];
          break;
        case '2':
          this.id=2;
          this.classObject.background0=false;
          this.classObject.background1=false;
          this.classObject.background2=true;
          this.classObject.background3=false;
          this.classObject.background4=false;
          this.parkData = this.$store.state.park[2];
          break;
        case '3':
          this.id=3;
          this.classObject.background0=false;
          this.classObject.background1=false;
          this.classObject.background2=false;
          this.classObject.background3=true;
          this.classObject.background4=false;
          this.parkData = this.$store.state.park[3];
          break;
        case '4':
          this.id=4;
          this.classObject.background0=false;
          this.classObject.background1=false;
          this.classObject.background2=false;
          this.classObject.background3=false;
          this.classObject.background4=true;
          this.parkData = this.$store.state.park[4];
          break;
        default: this.parkData = this.$store.state.park[0];
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
  background: url("../assets/home/background.png");
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
}
.park-header {
  margin-top: -23px;
  width: 6508px;
  height: 60px;
}
.background0{
  background: url("../assets/park/title0.png");
}
.background1{
  background: url("../assets/park/title1.png");
}
.background2{
  background: url("../assets/park/title2.png");
}
.background3{
  background: url("../assets/park/title3.png");
}
.background4{
  background: url("../assets/park/title4.png");
}
.panel-title {
  height: 88px;
  background: linear-gradient(90deg, rgba(32, 160, 255, 0.2) 0%, rgba(32, 159, 248, 0.1) 100%);
  border-left: 8px solid #09FBFF;
  border-image: -webkit-linear-gradient(#09FBFF, #1899FF) 0 100;
  border-image: -moz-linear-gradient(#09FBFF, #1899FF) 0 100;
  border-image: linear-gradient(#09FBFF, #1899FF) 0 100;
  border-radius: 2px;

}
.panel-title-text{
  display: inline-block;
  height: 88px;
  margin-left: 37px;
  font-size: 28px;
  font-family: PingFangSC-Medium, PingFang SC, serif;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 88px;
  letter-spacing: 1px;
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
.she-bei-body{
  height: 1620px;
}
.neng-hao-fen-xi {
  position: absolute;
  left: 105px;
  top: 156px;
  display: inline-block;
  width: 952px;
  height: 499px;
  background: rgba(255, 255, 255, 0.05);
}
.fu-he-te-xing{
  position: absolute;
  left: 105px;
  top: 695px;
  display: inline-block;
  width: 952px;
  height: 1168px;
  background: rgba(255, 255, 255, 0.05);
}
.fu-he-te-xing-chart{
  display: inline-block;
  width: 926px;
  height: 300px;
  margin: 40px 0 0 14px;
}
.she-bei-tuo-pu{
  position: absolute;
  left: 1118px;
  top: 156px;
  display: inline-block;
  width: 1160px;
  height: 1708px;
  background: rgba(255, 255, 255, 0.05);
}
.she-bei-fang-an{
  display: inline-block;
  background: rgba(255, 255, 255, 0.03);
  width: 1080px;
  height: 486px;
  margin: 31px 34px 0;
}
.she-bei-fang-an .img-wrapper{
  width: 860px;
  height: 350px;
  margin: 0 110px;
}
.she-bei-fang-an img{
  width: 100%;
  height: 100%;
}
.fang-an-top{
  margin-top: 48px;
}
.fang-an-text{
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-indent: 32px;
  margin-bottom: 0;
  font-size: 24px;
  font-family: PingFangSC-Semibold, PingFang SC, serif;
  font-weight: 600;
  color: #FFFFFF;
}
.brief{
  width: 1834px;
  height: 1242px;
  display: inline-block;
  position: absolute;
  left: 2338px;
  top: 215px;
}
.brief-text{
  font-size: 16px;
  width: 100%;
  font-family: PingFangSC-Semibold, PingFang SC, serif;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.65);
  line-height: 35px;
  margin-bottom: 8px;
}
.brief-img{
  width: 1830px;
  position: absolute;
  top: 372px;
  bottom: 0;
}
.brief-img img{
  width: 100%;
  height: 100%;
}
.fang-an-dui-bi-text{
  position: absolute;
  left: 2336px;
  top: 1490px;
  width: 251px;
  height: 40px;
  font-size: 28px;
  font-family: PingFangSC-Medium, PingFang SC, serif;
  font-weight: 500;
  color: #6DE5FF;
  line-height: 40px;
  letter-spacing: 1px;
}
.fang-an-dui-bi{
  position: absolute;
  left: 2338px;
  top: 1548px;
  display: inline-block;
  width: 1831px;
  height: 313px;
  background: rgba(255, 255, 255, 0.05);
  border: 6px solid rgba(33, 160, 253, 0.1);
}
.yun-xing-qu-xian{
  position: absolute;
  left: 4225px;
  top: 156px;
  display: inline-block;
  width: 2178px;
  height: 1323px;
  background: rgba(255, 255, 255, 0.05);
}
.yun-xing-body{
  height: 1234px;
}
.an-niu-panel{
  width: 2106px;
  height: 731px;
  margin: 36px 30px;
  display: inline-block;
  background: rgba(134, 244, 255, 0.05);
}
.zong-jie-panel{
  width: 2106px;
  height: 374px;
  background: rgba(134, 244, 255, 0.05);
  display: inline-block;
  margin: 4px 30px;
}
.zong-jie-title{
  width: 300px;
  height: 33px;
  font-size: 24px;
  font-family: PingFangSC-Semibold, PingFang SC, serif;
  font-weight: 600;
  color: #FFFFFF;
  line-height: 33px;
  position: absolute;
  left: 68px;
  top: 927px;
}
.zong-jie-chart{
  width: 2010px;
  height: 264px;
  margin: 110px 48px 0;
}
.huan-bao-table{
  position: absolute;
  left: 4225px;
  top: 1548px;
  display: inline-block;
  width: 1066px;
  height: 313px;
  background: rgba(255, 255, 255, 0.05);
  border: 6px solid rgba(33, 160, 253, 0.1);
}
.huan-bao-text{
  position: absolute;
  left: 36px;
  top: 28px;
  width: 209px;
  height: 33px;
  font-size: 24px;
  font-family: PingFangSC-Regular, PingFang SC, serif;
  font-weight: 400;
  color: #86F4FF;
  line-height: 33px;
}
.huan-bao-chart{
  position: absolute;
  left: 5357px;
  top: 1548px;
  display: inline-block;
  width: 1046px;
  height: 313px;
  background: rgba(255, 255, 255, 0.05);
  border: 6px solid rgba(33, 160, 253, 0.1);
}
.rectan{
  display: inline-block;
  width: 30px;
  height: 10px;
  margin: 0 12px 0 32px;
}
.blue{
  background: linear-gradient(180deg, #52FFEA 0%, #20A0FF 100%);
}
.orange{
  background: linear-gradient(180deg, #FFD984 0%, #FF775B 100%);
}
.green{
  background: linear-gradient(153deg, #FFFC5A 0%, #74ED52 100%);
}
.tu-li{
  display: inline-block;
  position: absolute;
  left: 1457px;
  top: 964px;
}
.tu-li-label{
  display: inline-block;
  width: 150px;
  height: 16px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC, serif;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.65);
  line-height: 16px;
}

</style>
<template>
<!--  <div class="home-panel-wrapper" v-on:click="jump(name)">-->
  <div class="home-panel-wrapper">
    <div class="header">
      <p>{{ name }}</p>
    </div>
    <div class="body">
      <div>
        <div class="has-bar-text-wrapper" v-if="hasBar">
          <p class="home-panel-para">
            <span class="home-panel-label">主要产业: </span>
            <span class="home-panel-text-body">{{ textItems[0] }}</span>
          </p>
          <p class="home-panel-para">
            <span class="home-panel-label">产业特点: </span>
            <span class="home-panel-text-body">{{ textItems[1] }}</span>
          </p>
        </div>
        <div class="no-bar-text-wrapper" v-if="!hasBar">
          <p class="has-bar-header home-panel-label">负荷特征: </p>
          <ul>
            <li v-for="item in textItems" :key="item">
              <div class="has-bar-text">
                <span class="home-panel-rhombus"/>
                <p class="home-panel-text-body has-bar-text-body">{{ item }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="home-panel-line-chart" :class="{ 'has-bar' : hasBar}" >
        <line-chart :lineData="lineChartData"/>
      </div>
      <div class="home-panel-bar-chart" v-if="hasBar">
        <bar-chart :bar-data="barChartData"/>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from "@/components/home/LineChart";
import BarChart from "@/components/home/BarChart";
export default {
  name: "HomePanel",
  components:{
    LineChart,
    BarChart
  },
  computed: {
    hasBar: function (){
      return this.barChartData.hasData
    }
  },
  methods: {
    // jump:function (name) {
    //   this.$router.push({ name: 'Park', params: { name: name }})
    // }
  },
  props:{
    name: {
      type: String,
      required: true
    },
    barChartData:{
      type: Object,
      required: true
    },
    lineChartData:{
      type: Object,
      required: true
    },
    textItems:{
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  .home-panel-wrapper{
    width: 1000px;
    height: 1704px;
    /*background: rgba(255, 255, 255, 0.05);*/
    /*border: 6px solid rgba(33, 160, 253, 0.1);*/
  }
  .home-panel-wrapper .header{
    width: 1000px;
    height: 88px;
    background: linear-gradient(180deg, rgba(9,251,255,0.8) 0%, rgba(24,153,255,0.8) 100%);
    text-align: center;
  }
  .home-panel-wrapper .body{
    width: 1000px;
    height: 1616px;
    background: rgba(255, 255, 255, 0.05);
    border: 6px solid rgba(33, 160, 253, 0.1);
  }
  .home-panel-wrapper .header p{
    display: flex;
    align-items: center;
    justify-content: center;
    /*width: 202px;*/
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 48px;
    font-family: PingFangSC-Semibold, PingFang SC, serif;
    font-weight: 600;
    margin: auto;
    color: #FFFFFF;
    letter-spacing: 1px;
  }
  .has-bar-text-wrapper {
    height: 280px;
  }
  .no-bar-text-wrapper {
    height: 780px;
  }
  .home-panel-para {
    width: 840px;
    margin: 40px 80px;
    font-size: 28px;
    font-family: PingFangSC-Semibold, PingFang SC, serif;
    letter-spacing: 1px;
    line-height: 40px;
  }
  .home-panel-label {
    font-weight: 600;
    color: #6DE5FF;
  }
  .home-panel-rhombus {
    display: inline-block;
    width: 16px;
    height: 16px;
    background: #6DE5FF;
    transform: rotate(45deg);
  }
  .home-panel-text-body {
    font-weight: 400;
    color: rgba(255, 255, 255, 0.65);
  }
  .has-bar-header{
    width: 840px;
    height: 63px;
    font-size: 28px;
    margin:100px 80px 23px;
    font-family: PingFangSC-Semibold, PingFang SC, serif;
    font-weight: 600;
    color: #6DE5FF;
    line-height: 40px;
  }
  .has-bar-text{
    padding-left: 25px;
    width: 840px;
    line-height: 40px;
    font-size: 28px;
    letter-spacing: 1px;
    font-family: PingFangSC-Semibold, PingFang SC, serif;
    margin: 48px 82px 0;
    font-weight: 400;
  }
  .has-bar-text-body{
    /*display: inline-block;*/
    padding-left: 50px;
    margin-top: -38px;
  }
  .home-panel-line-chart{
    width: 840px;
    height: 520px;
    margin: 82px 80px 60px;
  }
  .home-panel-bar-chart{
    width: 840px;
    height: 520px;
    margin: 0 80px;
  }
</style>
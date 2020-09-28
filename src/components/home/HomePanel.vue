<template>
  <div class="home-panel-wrapper">
    <div class="header">
      <p>{{ name }}</p>
    </div>
    <div class="body">
      <div class="text-wrapper">
        <div v-if="hasBar">
          <p class="">
            <span class="home-panel-label">主要产业:</span>
            <span class="home-panel-text-body">{{ textItems[0] }}</span>
          </p>
          <p class="">
            <span class="home-panel-label">产业特点:</span>
            <span class="home-panel-text-body">{{ textItems[1] }}</span>
          </p>
        </div>
        <div v-if="!hasBar">
          <p class="has-bar-header home-panel-label">负荷特征:</p>
          <ul>
            <li v-for="item in textItems" :key="item">
              <p>
                <span class="home-panel-rhombus"/>
                <span class="home-panel-text-body">{{ item }}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div id="lineChartDiv" class="home-panel-line-chart" :class="{ 'has-bar' : hasBar}" />
      <div id="barChartDiv" :class="{}" v-if="hasBar"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePanel",
  computed: {
    hasBar: function (){
      return this.barChartData.hasData
    }
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
  .has-bar{

  }
  .home-panel-label {
    font-size: 28px;
    font-family: PingFangSC-Semibold, PingFang SC, serif;
    font-weight: 600;
    color: #6DE5FF;
  }
  .home-panel-rhombus {
    display: inline-block;
    width: 23px;
    height: 23px;
    line-height: 40px;
    background: #6DE5FF;
    transform: rotate(45deg);
  }
  .home-panel-text-body {
    font-size: 28px;
    line-height: 40px;
    font-weight: 400;
    font-family: PingFangSC-Regular, PingFang SC, serif;
    color: rgba(255, 255, 255, 0.65);
  }
</style>
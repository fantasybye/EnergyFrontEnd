<template>
    <div class="radar-wrapper">
      <div class="fangAnRadar" :id="`fangAnRadar${radarData.id}`"/>
      <p class="text-wrapper">方案一</p>
      <p class="text-wrapper">方案二</p>
      <p class="text-wrapper">方案三</p>
    </div>
</template>

<script>
export default {
  name: "FangAnRadar",
  props: {
    radarData: {
      type: Object,
      required: true
    }
  },
  mounted(){
    this.drawLine();
  },
  methods:{
    drawLine(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById(`fangAnRadar${this.radarData.id}`))
      // 绘制图表
      myChart.setOption(this.radarData.option);
    }
  }
}
</script>

<style scoped>
.radar-wrapper{
  width: 837px;
  height: 234px;
  display: inline-block;
}
.fangAnRadar{
  width: 837px;
  height: 187px;
  display: inline-block;
}
.text-wrapper{
  width: 279px;
  height: 22px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC， serif;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.65);
  line-height: 22px;
  text-align: center;
  display: inline-block;
  margin-top: -20px;
}
</style>
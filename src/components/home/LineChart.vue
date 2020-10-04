<template>
  <div :id="`myLineChart${lineData.id}`" class="myLineChart" />
<!--  :style="`width:'${width}px', height:'${height}px'`"-->
</template>

<script>
export default {
  name: "LineChart",
  props:{
    lineData:{
      type:Object,
      required: true
    },
    // width:{
    //   type:Number,
    //   required: true
    // },
    // height:{
    //   type:Number,
    //   required: true
    // }
  },
  mounted(){
    this.drawLine();
  },
  methods:{
    drawLine(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById(`myLineChart${this.lineData.id}`))
      // 绘制图表
      myChart.setOption(this.lineData.option);
    }
  }
}
</script>

<style scoped>
  .myLineChart{
    width: 840px;
    height: 520px;
    background: rgba(134, 244, 255, 0.05);
  }
</style>
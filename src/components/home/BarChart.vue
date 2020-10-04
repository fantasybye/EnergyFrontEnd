<template>
  <div :id="`myBatChart${barData.id}`" class="myBarChart" />
</template>

<script>
export default {
  name: "BarChart",
  props:{
    barData:{
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
      let myChart = this.$echarts.init(document.getElementById(`myBatChart${this.barData.id}`))
      // 绘制图表
      myChart.setOption(this.barData.option);
    }
  }
}
</script>

<style scoped>
  .myBarChart{
    width: 840px;
    height: 520px;
    background: rgba(134, 244, 255, 0.05);
  }
</style>
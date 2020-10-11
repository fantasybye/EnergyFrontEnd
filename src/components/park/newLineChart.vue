<template>
  <div :id="`newLineChart${lineData.id}`" class="newLineChart" />
  <!--  :style="`width:'${width}px', height:'${height}px'`"-->
</template>

<script>
export default {
  name: "newLineChart",
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
      let newChart = this.$echarts.init(document.getElementById(`newLineChart${this.lineData.id}`))
      // 绘制图表
      newChart.setOption(this.lineData.option);
    }
  }
}
</script>

<style scoped>
.newLineChart{
  width: 1408px;
  height: 610px;
}
</style>
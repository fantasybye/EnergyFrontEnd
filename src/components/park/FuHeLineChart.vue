<template>
  <div :id="`myLineChart${lineData.id}`" class="myLineChart" />
</template>

<script>
export default {
  name: "FuHeLineChart",
  props: {
    lineData: {
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
      let myChart = this.$echarts.init(document.getElementById(`myLineChart${this.lineData.id}`))
      // 绘制图表
      myChart.setOption(this.lineData.option);
    }
  }
}
</script>

<style scoped>
.myLineChart{
  width: 926px;
  height: 300px;
}
</style>
<template>
  <div :id="`yunXingLineChart${lineData.id}`" class="yunXingLineChart" />
</template>

<script>
export default {
  name: "YunXingLineChart",
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
      let myChart = this.$echarts.init(document.getElementById(`yunXingLineChart${this.lineData.id}`))
      // 绘制图表
      myChart.setOption(this.lineData.option);
    }
  }
}
</script>

<style scoped>
.yunXingLineChart{
  width: 586px;
  height: 295px;
  display: inline-block;
}
</style>
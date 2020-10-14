<template>
  <div :id="`fuHeLineChart${lineData.id}`" class="fuHeLineChart" />
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
      let myChart = this.$echarts.init(document.getElementById(`fuHeLineChart${this.lineData.id}`))
      // 绘制图表
      myChart.setOption(this.lineData.option);
    }
  }
}
</script>

<style scoped>
.fuHeLineChart{
  width: 926px;
  height: 300px;
}
</style>
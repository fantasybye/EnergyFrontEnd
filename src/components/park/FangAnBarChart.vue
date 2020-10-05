<template>
  <div :id="`fangAnBarChart${barData.id}`" class="fangAnBarChart" />
</template>

<script>
export default {
  name: "FangAnBarChart",
  props: {
    barData: {
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
      let myChart = this.$echarts.init(document.getElementById(`fangAnBarChart${this.barData.id}`))
      // 绘制图表
      myChart.setOption(this.barData.option);
    }
  }
}
</script>

<style scoped>
.fangAnBarChart{
  width: 490px;
  height: 301px;
  display: inline-block;
}
</style>
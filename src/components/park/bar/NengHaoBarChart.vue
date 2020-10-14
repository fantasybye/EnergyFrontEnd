<template>
  <div :id="`nengHaoBarChart${barData.id}`" class="nengHaoBarChart" />
</template>

<script>
export default {
  name: "NengHaoBarChart",
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
      let myChart = this.$echarts.init(document.getElementById(`nengHaoBarChart${this.barData.id}`))
      // 绘制图表
      myChart.setOption(this.barData.option);
    }
  }
}
</script>

<style scoped>
.nengHaoBarChart{
  width: 484px;
  height: 411px;
  display: inline-block;
}
</style>
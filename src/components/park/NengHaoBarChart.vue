<template>
  <div :id="`myBatChart${barData.id}`" class="myBarChart" />
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
      let myChart = this.$echarts.init(document.getElementById(`myBatChart${this.barData.id}`))
      // 绘制图表
      myChart.setOption(this.barData.option);
    }
  }
}
</script>

<style scoped>
.myBarChart{
  width: 484px;
  height: 411px;
}
</style>
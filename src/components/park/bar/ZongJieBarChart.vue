<template>
  <div :id="`zongJieBarChart${barData.id}`" class="zongJieBarChart" />
</template>

<script>
export default {
  name: "ZongJieBarChart",
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
      let myChart = this.$echarts.init(document.getElementById(`zongJieBarChart${this.barData.id}`))
      // 绘制图表
      myChart.setOption(this.barData.option);
    }
  }
}
</script>

<style scoped>
.zongJieBarChart{
  width: 666px;
  height: 258px;
  display: inline-block;
}
</style>
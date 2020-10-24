<template>
  <div :id="`ModalDoubleBar${barData.id}`" class="ModalDoubleBar" />
</template>

<script>
import echarts from "echarts";

export default {
  name: "ModalDoubleBar",
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
      let myChart = this.$echarts.init(document.getElementById(`ModalDoubleBar${this.barData.id}`))
      // 绘制图表
      myChart.setOption(
          {
            title: {
              text:this.barData.name,
              textStyle:{
                color:"#6DE5FF",
                fontSize: 40,
                fontWeight: 'normal',
              },
              textAlign:'center',
              left: '50%',
              top: 40,
            },
            grid:{
              y:144,
              y2:80,
              x: 120,
              x2: 50
            },
            tooltip: {
              trigger: 'axis'
            },
            xAxis: {
              type: 'category',
              boundaryGap: true,
              data: ['方案一', '方案二', '方案三'],
              axisLabel:{
                interval: 0,
                fontSize: 30
              },
              axisLine:{
                show:false
              },
              axisTick: {
                show:false
              },
              offset: 18
            },
            yAxis: {
              type: 'value',
              boundaryGap: false,
              axisLabel:{
                fontSize: 28
              },
              axisLine:{
                show:false
              },
              axisTick: {
                show:false
              },
              splitLine :{    //网格线
                lineStyle:{
                  type:'dashed',    //设置网格线类型 dotted:虚线   solid:实线
                  color:'rgba(255, 255, 255, 0.15)'
                },
                show:true //隐藏或显示
              },
              offset: 12
            },
            textStyle: {
              color: "rgba(255, 255, 255, 0.85)",
              fontFamily: "PingFangSC-Semibold",
              fontSize:30
            },
            series: [
              {
                type: 'bar',
                data: this.barData.value,
                itemStyle: {        // 系列级个性化折线样式
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#52FFEA'
                  }, {
                    offset: 1,
                    color: '#20A0FF'
                  }]),//线条渐变色
                },
                barWidth: 60,
                label:{
                  show: true,
                  position: 'top'
                }
              }
            ]
          }
      );
    }
  }
}
</script>

<style scoped>
.ModalDoubleBar{
  width: 840px;
  height: 540px;
}
</style>
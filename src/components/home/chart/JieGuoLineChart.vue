<template>
  <div :id="`jieGuoLineChart${lineData.id}`" class="jieGuoLineChart" />
<!--  :style="`width:'${width}px', height:'${height}px'`"-->
</template>

<script>
import echarts from "echarts";

export default {
  name: "JieGuoLineChart",
  data() {
    return {
      lineData:{
        id:0,
        option: {
          color:["#52FFEA", "#FAD961", "#BE3CE9",  "#6DD400"],
          title: {
            text:"逐时能耗曲线",
            textStyle:{
              color:"#6DE5FF",
              fontSize: 24,
              fontWeight: 'normal',
            },
            textAlign:'center',
            left: '50%',
            top: 50,
          },
          grid:{
            y:125,
            x:125,
            x2:65,
            y2:140
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            bottom: 30,
            itemGap: 80,
            textStyle:{
              color:"rgba(255, 255, 255, 0.65)",
              fontSize: 16,
              fontWeight: 'normal',
            },
            icon: 'circle',
            data: [ '原始方案', '方案一', '方案二', '方案三']
          },
          xAxis: {
            name: 'h',
            nameTextStyle:{
              padding: [55, 0, 0, 0],
              fontSize: 14,
              color:'rgba(255, 255, 255, 0.65)'
            },
            type: 'category',
            boundaryGap: true,
            data: [0, 5, 10, 15, 20, 25],
            axisLine:{
              show:false
            },
            axisTick: {
              show:false
            },
            offset: 16
          },
          yAxis: {
            type: 'value',
            name: 'kwh',
            nameTextStyle:{
              padding: [0, 35, 12, 0],
              fontSize: 14,
              color:'rgba(255, 255, 255, 0.65)'
            },
            boundaryGap: false,
            max:1000,
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
            color: "rgba(255, 255, 255, 0.65)",
            fontFamily: "PingFangSC-Semibold",
            fontSize:14
          },
          series: [
            {
              name: '原始方案',
              type: 'line',
              data: [560, 654, 620, 795, 501, 640],
              lineStyle: {        // 系列级个性化折线样式
                width: 3,
                type: 'solid',
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#52FFEA'
                }, {
                  offset: 1,
                  color: '#20A0FF'
                }]),//线条渐变色
              }
            },
            {
              name: '方案一',
              type: 'line',
              data: [190, 354, 790, 195, 401, 340],
              lineStyle: {        // 系列级个性化折线样式
                width: 3,
                type: 'solid',
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#FFD984'
                }, {
                  offset: 1,
                  color: '#FFC34A'
                }]),//线条渐变色
              }
            },
            {
              name: '方案二',
              type: 'line',
              data: [410, 380, 633, 437, 929, 407],
              lineStyle: {        // 系列级个性化折线样式
                width: 3,
                type: 'solid',
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#BE3CE9'
                }, {
                  offset: 1,
                  color: '#4D51DA'
                }]),//线条渐变色
              }
            },
            {
              name: '方案三',
              type: 'line',
              data: [210, 302, 393, 137, 389, 197],
              lineStyle: {        // 系列级个性化折线样式
                width: 3,
                type: 'solid',
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#6DD400'
                }, {
                  offset: 1,
                  color: '#F7B500'
                }]),//线条渐变色
              }
            }
          ]
        }
      }
    }
  },
  mounted(){
    this.drawLine();
  },
  methods:{
    drawLine(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById(`jieGuoLineChart${this.lineData.id}`))
      // 绘制图表
      myChart.setOption(this.lineData.option);
    }
  }
}
</script>

<style scoped>
  .jieGuoLineChart{
    width: 1788px;
    height: 620px;
  }
</style>
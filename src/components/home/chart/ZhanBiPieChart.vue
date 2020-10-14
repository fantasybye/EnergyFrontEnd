<template>
  <div :id="`zhanBiPieChart${pieData.id}`" class="zhanBiPieChart" />
</template>

<script>
export default {
  name: "ZhanBiPieChart",
  data(){
    return {
      pieData:{
        id:0,
        option: {
          color:['#6638F0', '#ABE41B', '#5CC9F5'],
          title: [{
            text:"用电逐项能耗占比",
            textStyle:{
              color:"#FFF",
              fontSize: 24,
              fontWeight: 'bold',
            },
            textAlign:'left',
            left: 30,
            top: 30,
          },{
            subtext: '原方案',
            left: 268,
            top: 105,
            subtextStyle:{
              color:"#86F4FF",
              fontSize: 24,
              fontWeight: 'normal',
            },
            textAlign: 'center'
          },{
            subtext: '改造方案一',
            left: 648,
            top: 105,
            subtextStyle:{
              color:"#86F4FF",
              fontSize: 24,
              fontWeight: 'normal',
            },
            textAlign: 'center'
          },{
            subtext: '改造方案二',
            left: 1052,
            top: 105,
            subtextStyle:{
              color:"#86F4FF",
              fontSize: 24,
              fontWeight: 'normal',
            },
            textAlign: 'center'
          },{
            subtext: '改造方案三',
            left: 1456,
            top: 105,
            subtextStyle:{
              color:"#86F4FF",
              fontSize: 24,
              fontWeight: 'normal',
            },
            textAlign: 'center'
          }],
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            icon: 'circle',
            left: 610,
            bottom: 30,
            data: ['办公设备','照明插座','制冷机组'],
            itemGap: 80,
            itemWidth: 16,
            itemHeight: 16,
            textStyle:{
              color:"rgba(255, 255, 255, 0.65)",
              fontSize: 16,
              fontWeight: 'normal',
              padding:[0,0,0,12]
            }
          },
          series: [
            {
              name:'原方案',
              type: 'pie',
              radius: [70, 90],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  formatter:'{d}%',
                  fontSize: '28',
                  fontWeight: '600',
                  verticalAlign: 'middle',
                  align: 'center'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                {value: 6095, name: '办公设备'},
                {value: 8721, name: '照明插座'},
                {value: 7508, name: '制冷机组'},
              ],
              center: [268, 268]
            },{
              name:'改造方案一',
              type: 'pie',
              radius: [70, 90],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  formatter:'{d}%',
                  fontSize: '28',
                  fontWeight: '600',
                  verticalAlign: 'middle',
                  align: 'center'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                {value: 4266095, name: '办公设备'},
                {value: 9558721, name: '照明插座'},
                {value: 9767508, name: '制冷机组'},
              ],
              center: [648, 268]
            },{
              name:'改造方案二',
              type: 'pie',
              radius: [70, 90],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  formatter:'{d}%',
                  fontSize: '28',
                  fontWeight: '600',
                  verticalAlign: 'middle',
                  align: 'center'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                {value: 266095, name: '办公设备'},
                {value: 558721, name: '照明插座'},
                {value: 767508, name: '制冷机组'},
              ],
              center: [1052, 268]
            },{
              name:'改造方案三',
              type: 'pie',
              radius: [70, 90],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  formatter:'{d}%',
                  fontSize: '28',
                  fontWeight: '600',
                  verticalAlign: 'middle',
                  align: 'center'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                {value: 66095, name: '办公设备'},
                {value: 58721, name: '照明插座'},
                {value: 67508, name: '制冷机组'},
              ],
              center: [1456, 268]
            },
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
      let index =0;
      let myChart = this.$echarts.init(document.getElementById(`zhanBiPieChart${this.pieData.id}`))
      // 绘制图表
      myChart.setOption(this.pieData.option);
      for(let i = 0; i < 4; i++) {
        myChart.dispatchAction({type: 'highlight', seriesIndex: i, dataIndex: 0});
      }
        // 当鼠标移入时，如果不是第一项，则把当前项置为选中，如果是第一项，则设置第一项为当前项
      myChart.on('mouseover', function (e) {
        myChart.dispatchAction({type: 'downplay', seriesIndex: e.seriesIndex, dataIndex: 0});
        if (e.dataIndex !== index) {
          myChart.dispatchAction({type: 'downplay', seriesIndex: e.seriesIndex, dataIndex: index});
        }
        if (e.dataIndex === 0) {
          myChart.dispatchAction({type: 'highlight', seriesIndex: e.seriesIndex, dataIndex: e.dataIndex});
        }
      });

      //当鼠标离开时，把当前项置为选中
      myChart.on('mouseout', function (e) {
        index = e.dataIndex;
        myChart.dispatchAction({type: 'highlight', seriesIndex: e.seriesIndex, dataIndex: e.dataIndex});
      });

    }
  }
}
</script>

<style scoped>
.zhanBiPieChart{
  width: 1704px;
  height: 455px;
  background: rgba(255, 255, 255, 0.03);
  /*background: #000c17;*/
}
</style>
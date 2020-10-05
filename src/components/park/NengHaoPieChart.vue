<template>
  <div :id="`nengHaoPieChart${pieData.id}`" class="nengHaoPieChart" />
</template>

<script>
export default {
  name: "NengHaoPieChart",
  props: {
    pieData: {
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
      let index =0;
      let myChart = this.$echarts.init(document.getElementById(`nengHaoPieChart${this.pieData.id}`))
      // 绘制图表
      myChart.setOption(this.pieData.option);
      myChart.dispatchAction({type: 'highlight',seriesIndex: 0,dataIndex: 0});
      // 当鼠标移入时，如果不是第一项，则把当前项置为选中，如果是第一项，则设置第一项为当前项
      myChart.on('mouseover',function(e){
        myChart.dispatchAction({type: 'downplay',seriesIndex: 0,dataIndex:0});
        if(e.dataIndex !== index){
          myChart.dispatchAction({type: 'downplay', seriesIndex: 0, dataIndex: index  });
        }
        if(e.dataIndex === 0){
          myChart.dispatchAction({type: 'highlight',seriesIndex: 0,dataIndex:e.dataIndex});
        }
      });

      //当鼠标离开时，把当前项置为选中
      myChart.on('mouseout',function(e){
        index = e.dataIndex;
        myChart.dispatchAction({type: 'highlight',seriesIndex: 0,dataIndex: e.dataIndex});
      });
    }
  }
}
</script>

<style scoped>
.nengHaoPieChart{
  width: 452px;
  height: 411px;
  display: inline-block;
}
</style>
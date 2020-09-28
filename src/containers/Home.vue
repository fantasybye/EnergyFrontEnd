<template>
  <div id="home-wrapper">
    <ul class="home-panel-ul">
      <li class="home-panel-li" v-for="prop in propsData" v-bind:key="prop.id">
        <home-panel
            :name = "prop.value"
            :text-items="prop.text"
            :line-chart-data="prop.lineChartData"
            :bar-chart-data="prop.barChartData"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import HomePanel from "@/components/home/HomePanel";
export default {
name: "Home",
  components: {HomePanel},
  data:function () {
    return {
      propsData: [{
        id: 1,
        value: "化工园区",
        text:[
          "工业一直被称为国民经济的主导产业。中国的工业主要以有基础工业部门为主。包括能源工业，钢铁工业，机械工业，高新工业等。",
          "重工业与轻工业交错密集，对于供冷和供热需求较大，由于具有工作轮班制，供能需求存在一定规律性，且节假日与工作日负荷曲线具有差异性。"
        ],
        barChartData:{
          hasData:true
        },
        lineChartData:{}
      }, {
        id: 2,
        value: "文化创意园区",
        text:[
          "广播影视、动漫、音像、传媒、视觉艺术、表演艺术、工艺与设计、雕塑、环境艺术、广告装潢、服装设计、软件和计算机服务等。",
          "知识智慧密集型新兴领域，具有高知识性、高附加值、强融合性。"
        ],
        barChartData:{
          hasData:true
        },
        lineChartData:{}
      }, {
        id: 3,
        value: "农业园区",
        text:[
          "绿色杂粮生产、草本瓜果生产、净菜设施生产、鲜切花生产、珍稀花木种植、畜禽生态养殖和现代农业物流等。",
          "技术现代化、功能多样化、效益最大化、体制合理化、环境园林化。"
        ],
        barChartData:{
          hasData:true
        },
        lineChartData:{}
      }, {
        id: 4,
        value:"学校",
        text:[
          "学校日常活动具有计划性,因而短时间尺度上负荷需求集中、明确。",
          "学校年内具有明确的寒暑假周期特性,因而长时间尺度上学校负荷具有明显的阶段性和间歇性。",
          "学校冬季有采暖需求, 夏季有供冷需求，还具有饮用热水需求。",
          "住宿中小学以及大学还具有生活热水需求。此外,学校食堂有一定的炊事用能需求。",
          "环境控制需求。学校部分负荷具有相对较高的环境控制需求,比如图书馆和体育馆都具有一定光线和温控需求,也具有一定的调控和响应能力。"
        ],
        barChartData:{
          hasData:false
        },
        lineChartData:{}
      }, {
        id: 5,
        value: "医养健康园区",
        text:[
          "含有I类负荷,电能质量要求高,供能品质要求高。",
          "用能密度高,24小时不间断供能。",
          "北方地区医院的负荷需求具有季节差异性。由于气候原因,冬季有采暖需求、夏季有供冷需求",
          "一般具有饮用热水、生活热水需求",
          "环境控制需求。住院部、化验室、手术室等场所对环境温度和光线有精细调控需求",
          "餐饮用能需求。一般具有餐饮用气、用电等负荷需求。",
          "除常规用能需求外,还需提供消毒蒸汽。"
        ],
        barChartData:{
          hasData:false
        },
        lineChartData:{}
      }]
    }
  }
}
</script>

<style scoped>
  #home-wrapper{
    width: 6508px;
    height: 1940px;
    padding: 0;
    margin: 0;
    background: url("../assets/home/background.png");
  }
  .home-panel-ul{
    margin-left: 552px;
    padding-top: 103px;
    height: 1940px;
  }

  .home-panel-li{
    float: left;
    margin-right: 101px;
  }
</style>
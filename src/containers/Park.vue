<template>
  <div class="park-wrapper">
    <div class="park-title">
      <p class="park-title-text">{{ parkData.name }}</p>
    </div>
    <div class="park-header"></div>
    <div class="neng-hao-fen-xi">
      <panel-title></panel-title>
    </div>
    <div class="fu-he-te-xing">

    </div>
    <div class="she-bei-tuo-pu">

    </div>
    <div class="brief">

    </div>
    <div class="fang-an-dui-bi">
      <div class="no-title-dui-bi">

      </div>
      <div class="huan-bao-table">

      </div>
      <div class="huan-bao-chart">

      </div>
    </div>
    <div class="yun-xing-qu-xian">

    </div>

  </div>
</template>

<script>
import PanelTitle from "@/components/park/PanelTitle";
export default {
  components:{
    PanelTitle
  },
  name: "Park",
  data() {
    return {
      id: 999,
      parkData:{}
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData(){
      switch (this.$route.params.name){
        case "化工园区": this.id = 0;this.parkData = this.$store.state.park[0];break;
        case "文化创意园区": this.id = 1;this.parkData = this.$store.state.park[1];break;
        case "农业园区": this.id = 2;this.parkData = this.$store.state.park[2];break;
        case "学校": this.id = 3;this.parkData = this.$store.state.park[3];break;
        case "医养健康园区": this.id = 4;this.parkData = this.$store.state.park[4];break;
        default: this.id = 999;
      }
    }
  }
}
</script>

<style scoped>
.park-wrapper {
  width: 6508px;
  height: 1940px;
  padding: 0;
  margin: 0;
  background: url("../assets/home/background.png");
}
.park-title {
  display: inline-block;
  width: 6508px;
  height: 101px;
  text-align: center;
}
.park-title-text {
  background: linear-gradient(180deg, #52FFEA 0%, #20A0FF 100%);
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: -23px;
  font-size: 60px;
  font-family: PingFangSC-Semibold, PingFang SC, serif;
  font-weight: 600;
}
.park-header {
  width: 6508px;
  height: 55px;
  background: #FFFFFF;
}
</style>
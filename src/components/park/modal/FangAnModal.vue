<template>
  <div class="modal-main">
    <div class="modal-text">
      <div class="modal-text-title"><div>方案对比</div></div>
    </div>
    <div class="modal-bar-wrapper">
      <div class="chart-wrapper" v-for="item in data.single" :key="item.id">
        <ModalSingleBar :bar-data="item"/>
      </div>
    </div>
    <div class="modal-bar-wrapper">
      <div class="chart-wrapper" v-for="item in data.double" :key="item.id">
        <ModalDoubleBar :bar-data="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import ModalSingleBar from "@/components/park/modal/ModalSingleBar";
import ModalDoubleBar from "@/components/park/modal/ModalDoubleBar";

export default {
  name: "FangAnModal",
  components: {
    ModalDoubleBar,
    ModalSingleBar
  },
  props:["data"]
}
</script>

<style scoped>
.modal-main{
  position: absolute;
  /*left: 50%;*/
  /*margin-left: -915px;*/
  left: 2338px;
  top: 50%;
  margin-top: -740px;
  width: 1830px;
  height: 1467px;
  background: #121832;
  box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  z-index: 2;
}
.modal-text{
  width: 1830px;
  margin-bottom: 110px;
  padding-top: 65px;
}
.modal-text-title{
  text-align: center;
}
.modal-text-title div{
  display: inline-block;
  margin: 0 auto;
  padding-top: 8px;
  /*width: 288px;*/
  text-indent: 20px;
  height: 78px;
  font-size: 64px;
  font-family: PingFangSC-Semibold, PingFang SC,serif;
  font-weight: 600;
  color: #FFFFFF;
  line-height: 78px;
  border-bottom: 10px  solid #09FBFF;
  border-image: -webkit-linear-gradient(#09FBFF, #1899FF) 100 0;
  border-image: -moz-linear-gradient(#09FBFF, #1899FF) 100 0;
  border-image: linear-gradient(#09FBFF, #1899FF) 100 0;
}
.modal-bar-wrapper{
  width: 1680px;
  height: 540px;
  margin:0 75px 60px;
  background: rgba(255, 255, 255, 0.05);
}
.modal-bar-wrapper .chart-wrapper{
  display: inline-block;
}
</style>
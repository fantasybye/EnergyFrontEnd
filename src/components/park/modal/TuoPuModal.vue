<template>
  <div class="modal-main">
    <div class="modal-text">
      <div class="modal-text-title"><div>{{ name }}</div></div>
    </div>
    <div class="modal-img-wrapper">
      <img :src="require(`../../../assets/park/modal/modal${imgNo}.png`)" alt=""/>
    </div>
    <div class="modal-label-wrapper">
      <div v-for="item in this.labelData" :key="item.name">
        <ModalLabel :data="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import ModalLabel from "@/components/park/ModalLabel";
export default {
  name: "TuoPuModel",
  components:{
    ModalLabel
  },

  props: [
      "name",
      "imgNo",
    "labelData",
  ]
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
  z-index: 4;
}
.modal-text{
  width: 1830px;
  /*height: 676px;*/
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
.modal-img-wrapper{
  width: 1700px;
  height: 655px;
  margin: 114px auto 143px;
}
.modal-img-wrapper img{
  width: 100%;
  height: 100%;
}
.modal-label-wrapper{
  width: 1830px;
  padding-left: 12px;
}

</style>
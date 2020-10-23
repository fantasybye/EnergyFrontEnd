<template>
  <div class="modal-main">
    <div class="modal-text">
      <div class="modal-text-title"><div>经济性最优方案（方案一）</div></div>
      <div class="modal-img-wrapper">
        <img :src="require(`../../assets/park/modal/modal0-0.png`)" alt=""/>
      </div>
      <div class="modal-label-wrapper">
        <div v-for="item in this.labelData" :key="item.name">
          <ModalLabel :data="item"/>
        </div>
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
  data(){
    return {
      labelData:[
        {
          name:"投资费用",
          value:"5766",
          unit:"万元"
        },
        {
          name:"投资费用",
          value:"5766",
          unit:"万元"
        },
        {
          name:"投资费用",
          value:"5766",
          unit:"万元"
        },
      ]
    }
  }
}
</script>

<style scoped>
.modal-main{
  position: fixed;
  left: 20%;
  width: 1408px;
  height: 1129px;
  background: #121832;
  box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.5);
  border-radius: 12px;
}
.modal-text{
  width: 1408px;
  height: 520px;
  padding-top: 50px;
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
  height: 62px;
  font-size: 44px;
  font-family: PingFangSC-Semibold, PingFang SC,serif;
  font-weight: 600;
  color: #FFFFFF;
  line-height: 62px;
  border-bottom: 8px  solid #09FBFF;
  border-image: -webkit-linear-gradient(#09FBFF, #1899FF) 100 0;
  border-image: -moz-linear-gradient(#09FBFF, #1899FF) 100 0;
  border-image: linear-gradient(#09FBFF, #1899FF) 100 0;
}
.modal-img-wrapper{
  width: 1308px;
  height: 505px;
  margin: 88px auto 110px;
}
.modal-img-wrapper img{
  width: 100%;
  height: 100%;
}
.modal-label-wrapper{
  width: 1408px;
  padding-left: 12px;
}

</style>
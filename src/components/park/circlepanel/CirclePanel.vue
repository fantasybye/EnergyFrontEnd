<template>
  <div class="circle-panel">
    <p>{{ text[0] }}</p>
    <div class="poly" />
    <circle-canvas :text="text[1]" :id="id"/>
  </div>
</template>

<script>
import CircleCanvas from "./CircleCanvas";

export default {
  name: "CirclePanel",
  components:{
    CircleCanvas
  },
  props:['text', 'id']
}
</script>

<style scoped>
.circle-panel{
  position: absolute;
  display: inline-block;
  width: 460px;
  height: 220px;
}
.poly{
  position: absolute;
  left: 201px;
  top: 60px;
  display: inline-block;
  width: 45px;
  height: 50px;
  background: linear-gradient(45deg, transparent 51%, #86F4FF 51%, #86F4FF 56%, transparent 56%);
}
.circle-panel p{
  display: inline-block;
  position: absolute;
  left: 2px;
  top: 12px;
  width: 200px;
  height: 53px;
  /*text-indent: 10px;*/
  font-size: 38px;
  font-family: PingFangSC-Medium, PingFang SC,serif;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 53px;
  border-bottom: 4px solid #86F4FF;
}
</style>
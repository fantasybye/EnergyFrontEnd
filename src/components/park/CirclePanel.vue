<template>
  <div class="circle-panel">
    <p>{{ text[0] }}</p>
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
  display: inline-block;
  width: 450px;
  height: 220px;
}
.circle-panel p{
  display: inline-block;
  width: 230px;
  height: 53px;
  font-size: 38px;
  font-family: PingFangSC-Medium, PingFang SC,serif;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 53px;
  border-bottom: 4px solid #86F4FF;
}
</style>
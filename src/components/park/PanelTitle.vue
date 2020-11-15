<template>
  <div class="panel-title"><span class="panel-title-text" :style="fstyle">&nbsp;{{ name }}</span></div>
</template>

<script>
export default {
  name: "PanelTitle",
  props:['name','fstyle']
}
</script>

<style scoped>
.panel-title {
  height: 88px;
  background: linear-gradient(90deg, rgba(32, 160, 255, 0.2) 0%, rgba(32, 159, 248, 0.1) 100%);
  border-left: 8px solid #09FBFF;
  border-image: -webkit-linear-gradient(#09FBFF, #1899FF) 0 100;
  border-image: -moz-linear-gradient(#09FBFF, #1899FF) 0 100;
  border-image: linear-gradient(#09FBFF, #1899FF) 0 100;
  border-radius: 2px;

}
.panel-title-text{
  display: inline-block;
  height: 88px;
  margin-left: 37px;
  font-size: 36px;
  font-family: PingFangSC-Medium, PingFang SC, serif;
  font-weight: 600;
  color: #FFFFFF;
  line-height: 88px;
  letter-spacing: 1px;
}
</style>
<template>
  <div class="cloud-text" :style="{left: `${this.left}px`, top: `${this.top}px`}">
    {{ this.text }}
  </div>
</template>

<script>
export default {
name: "CloudText",
  props:['id','left','top','text']
}
</script>

<style scoped>
.cloud-text{
  position: absolute;
  font-family: PingFangSC-Medium, PingFang SC, serif;
  font-size: 60px;
  font-weight: 600;
  text-align: center;
  color: #FFF;
}
</style>
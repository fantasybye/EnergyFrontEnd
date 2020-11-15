<template>
  <div class="cloud-img"  :style="{left: `${this.left}px`, top: `${this.top}px`}">
    <img :src="require(`../../../assets/park/new/nyzx${this.type}.png`)" alt=""/>
  </div>
</template>

<script>
export default {
name: "CloudImg",
  props:['id','left','top','type']
}
</script>

<style scoped>
.cloud-img{
  position: absolute;
  width: 104px;
  height: 61px;
}
img {
  width: 100%;
  height: 100%;
}
</style>
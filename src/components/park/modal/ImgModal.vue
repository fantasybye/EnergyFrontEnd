<template>
  <div class="img-modal-main" >
    <img :src="require(`../../../assets/park/modal/img/modal${modalNo}.jpg`)" alt=""/>
  </div>
</template>

<script>
export default {
  name: "ImgModal",
  props:['modalNo']
}
</script>

<style scoped>
.img-modal-main{
  width: 6504px;
  height: 1940px;
}
.img-modal-main img{
  width: 100%;
  height: 100%;
}
</style>
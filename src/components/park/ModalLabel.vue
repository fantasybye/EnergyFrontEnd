<template>
  <div class="modal-label">
    <div class="modal-label-name">{{data.name}}</div>
    <div class="modal-label-value">
      <span class="modal-weight">{{data.value}}</span>
      <span class="modal-unit">{{data.unit}}</span>
    </div>
  </div>
</template>

<script>
export default {
name: "ModalLabel",
  props:["data"]
}
</script>

<style scoped>
.modal-label{
  float: left;
  margin-left: 104px;
  width: 468px;
  height: 260px;
  background: linear-gradient(180deg, rgba(82,255,234,0.2) 0%, rgba(32,160,255,0.2) 100%);
  border-radius: 12px;
}
.modal-label-name{
  /*width: 112px;*/
  height: 50px;
  margin-top: 50px;
  font-size: 40px;
  font-family: PingFangSC-Medium, PingFang SC, serif;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.65);
  line-height: 50px;
  text-align: center;
}
.modal-label-value{
  /*width: 198px;*/
  margin-top: 20px;
  height: 84px;
  font-size: 60px;
  font-family: PingFangSC-Medium, PingFang SC, serif;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 84px;
  text-align: center;
}
.modal-weight{
  font-size: 75px;
}
.modal-unit{
  font-size: 40px;
}
</style>
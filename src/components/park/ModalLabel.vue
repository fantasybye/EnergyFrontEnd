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
  margin-left: 80px;
  width: 360px;
  height: 198px;
  background: linear-gradient(180deg, rgba(82,255,234,0.2) 0%, rgba(32,160,255,0.2) 100%);
  border-radius: 12px;
}
.modal-label-name{
  /*width: 112px;*/
  height: 40px;
  margin-top: 30px;
  font-size: 28px;
  font-family: PingFangSC-Medium, PingFang SC, serif;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.65);
  line-height: 40px;
  text-align: center;
}
.modal-label-value{
  /*width: 198px;*/
  margin-top: 12px;
  height: 84px;
  font-size: 60px;
  font-family: PingFangSC-Medium, PingFang SC, serif;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 84px;
  text-align: center;
}
.modal-weight{
  font-size: 60px;
}
.modal-unit{
  font-size: 28px;
}
</style>
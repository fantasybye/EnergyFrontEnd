<template>
  <div class="list-item">
    <div class="title">
      <div class="square"/>
      <div class="title-text">{{title}}</div>
    </div>
    <div class="text">{{text}}</div>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props:['title','text']
}
</script>

<style scoped>
.list-item{
  width: 270px;
  height: 175px;
  font-family: PingFangSC-Medium, PingFang SC, serif;
  line-height: 53px;
}
.square{
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-bottom: 7px;
  background: linear-gradient(180deg, #09FBFF 0%, #1899FF 100%);
}
.title-text{
  display: inline-block;
  height: 53px;
  font-size: 38px;
  font-weight: 500;
  margin: 10px 0 0 10px;
  color: #fff;
}
.text{
  margin: 66px 0 0 25px;
  font-size: 40px;
  font-weight: 600;
  color: #86F4FF;
}
</style>
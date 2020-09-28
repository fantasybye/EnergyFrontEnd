<template>
  <div class="home-panel-wrapper">
    <div class="header">
      <p>{{ name }}</p>
    </div>
    <div class="body">

    </div>
  </div>
</template>

<script>
export default {
  name: "HomePanel",
  props:{
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .home-panel-wrapper{
    width: 1000px;
    height: 1704px;
    /*background: rgba(255, 255, 255, 0.05);*/
    /*border: 6px solid rgba(33, 160, 253, 0.1);*/
  }
  .home-panel-wrapper .header{
    width: 1000px;
    height: 88px;
    background: linear-gradient(180deg, rgba(9,251,255,0.8) 0%, rgba(24,153,255,0.8) 100%);
    text-align: center;
  }
  .home-panel-wrapper .body{
    width: 1000px;
    height: 1616px;
    background: rgba(255, 255, 255, 0.05);
    border: 6px solid rgba(33, 160, 253, 0.1);
  }
  .home-panel-wrapper .header p{
    display: flex;
    align-items: center;
    justify-content: center;
    /*width: 202px;*/
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 48px;
    font-family: PingFangSC-Semibold, PingFang SC,serif;
    font-weight: 600;
    margin: auto;
    color: #FFFFFF;
    letter-spacing: 1px;
  }
</style>
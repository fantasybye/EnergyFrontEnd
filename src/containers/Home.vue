<template>
  <div id="home-wrapper">
    <home-panel v-for="name in names" v-bind:name = "name.value" v-bind:key="name.id"/>
  </div>
</template>

<script>
import HomePanel from "@/components/home/HomePanel";
export default {
name: "Home",
  components: {HomePanel},
  data:function () {
    return {
      names: [{
        id: 1,
        value:"化工园区"
      }, {
        id: 2,
        value: "文化创意园区"
      }, {
        id: 3,
        value: "农业园区"
      }, {
        id: 4,
        value:"学校"
      }, {
        id: 5,
        value: "医养健康园区"
      }]
    }
  }
}
</script>

<style scoped>
  #home-wrapper{
    width: 6508px;
    height: 1940px;
    padding: 0;
    margin: 0;
    background: url("../assets/home/background.png");
  }
</style>
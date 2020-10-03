<template>
  <div id="home-wrapper">
    <ul class="home-panel-ul">
      <li class="home-panel-li" v-for="prop in propsData" v-bind:key="prop.id">
        <home-panel
            :name = "prop.value"
            :text-items="prop.text"
            :line-chart-data="prop.lineChartData"
            :bar-chart-data="prop.barChartData"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import HomePanel from "@/components/home/HomePanel";
export default {
name: "Home",
  components: {HomePanel},
  data:function () {
    return {
      propsData: this.$store.state.home
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
  .home-panel-ul{
    margin-left: 552px;
    padding-top: 103px;
    height: 1940px;
  }

  .home-panel-li{
    float: left;
    margin-right: 101px;
  }
</style>
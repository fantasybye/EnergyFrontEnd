<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--    <a-button type="primary">Button</a-button>-->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
a {
  text-decoration: none;
}
* {
  padding: 0;
  margin: 0;
}
body, html{
  width: 100%;
  height: 100%;
}
/*body{*/
/*  transform: scale(0.51);*/
/*  transform-origin: left top 0;*/
/*}*/
</style>

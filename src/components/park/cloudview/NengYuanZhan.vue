<template>
<!--    <canvas class="nyz-top" :id="`nyz-top${this.id}`"></canvas>-->
<!--    <canvas class="nyz-line" :id="`nyz-line${this.id}`"></canvas>-->
<!--    <canvas class="nyz-bottom" :id="`nyz-bottom${this.id}`"></canvas>-->
  <div  class="neng-yuan-zhan" :style="{left: `${this.left}px`, top: `${this.top+10}px`}">
    <canvas
        :id="`nyz${this.id}`"
        width="100"
        height="175"
    ></canvas>
    <div class="area-box">
      <span class="pulse delay-01"></span>
      <span class="pulse delay-02"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "NengYuanZhan",
  props:['id','color','left','top','bottom'],
  methods:{
    draw(){
      let canvas = document.getElementById(`nyz${this.id}`);
      let ctx = canvas.getContext('2d');
      ctx.globalAlpha=0.8
      this.drawBottom(ctx);
      this.drawLine(ctx);
      this.drawTop(ctx);
    },
    drawBottom(ctx){
      ctx.beginPath();
      ctx.moveTo(50,125);
      ctx.lineTo(100,165);
      ctx.lineTo(0,165);
      ctx.fillStyle=this.bottom;//'rgba(11, 219, 221, 0.52)';
      ctx.fill();
      ctx.beginPath();
      ctx.closePath()
    },
    drawLine(ctx){
      ctx.beginPath();
      ctx.moveTo(50,22);
      ctx.lineTo(50,150);
      ctx.lineWidth = 4;
      ctx.strokeStyle=this.color;
      ctx.stroke();
      ctx.closePath()
    },
    drawTop(ctx){
      ctx.beginPath();
      ctx.arc(50,11,11,0,2*Math.PI);
      ctx.fillStyle=this.color;
      ctx.shadowBlur=10;
      ctx.shadowColor=this.color;
      ctx.fill();
      ctx.closePath()
    }
  },
  mounted() {
    this.draw();
  }
}
</script>

<style scoped>
.neng-yuan-zhan{
  position: absolute;
  width: 100px;
  height: 175px;
}

.area-box .pulse {
  position: absolute;
  top: -65px;
  left: -25px;
  height: 150px;
  width: 150px;
  border: 12px solid #b7b7b7;
  -webkit-border-radius: 80px;
  -moz-border-radius: 80px;
  border-radius: 80px;
  -webkit-box-shadow: 0 0 4px #82878f,0 0 10px #82878f inset;
  -moz-box-shadow: 0 0 4px #82878f,0 0 10px #82878f inset;
  box-shadow: 0 0 4px #82878f,0 0 10px #82878f inset;
  opacity: .82;
  filter: alpha(opacity=0);
  -webkit-animation: warn 2s ease-out both;
  -moz-animation: warn 2s ease-out both;
  -o-animation: warn 2s ease-out both;
  animation: warn 2s ease-out both;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  -o-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  background: 0 0;
}

.area-box .delay-01 {
  -webkit-animation-delay: 0s;
  -moz-animation-delay: 0s;
  -o-animation-delay: 0s;
  animation-delay: 0s;
}

.area-box .delay-02 {
  -webkit-animation-delay: .4s;
  -moz-animation-delay: .4s;
  -o-animation-delay: .4s;
  animation-delay: .4s;
}
@-webkit-keyframes warn {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}

@-moz-keyframes warn {
  0% {
    -moz-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }

  100% {
    -moz-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}

@-o-keyframes warn {
  0% {
    -o-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }

  100% {
    -o-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}

@keyframes warn {
  0% {
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }

  100% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}

</style>
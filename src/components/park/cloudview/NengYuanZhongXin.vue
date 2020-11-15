<template>
  <div class="nyzx" :style="{left: `${this.left}px`, top: `${this.top}px`}">
    <canvas :id="`nyzx${this.id}`" width="100" height="320"></canvas>
    <div class="area-box">
      <span class="pulse delay-01"></span>
      <span class="pulse delay-02"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "NengYuanZhongXin",
  props:['id','left','top'],
  methods:{
    draw(){
      let canvas = document.getElementById(`nyzx${this.id}`);
      let ctx = canvas.getContext('2d');
      this.drawBottom(ctx);
      this.drawLine(ctx);
      this.drawTop(ctx);
    },
    drawBottom(ctx){
      ctx.beginPath();
      let step = 1/10;
      ctx.moveTo(50, 296);
      for(let i = 0; i < 2 * Math.PI+step; i += step) {
        ctx.lineTo(50 + 50 * Math.cos(i), 296 + 24 * Math.sin(i));
      }
      ctx.fillStyle='rgba(66, 218, 225, 0.52)';//'rgba(11, 219, 221, 0.52)';
      ctx.fill();
      ctx.beginPath();
      ctx.closePath()
    },
    drawLine(ctx){
      ctx.beginPath();
      ctx.moveTo(50,30);
      ctx.lineTo(50,296);
      ctx.lineWidth = 8;
      ctx.strokeStyle='rgba(255, 255, 255, 0.52)';
      ctx.stroke();
      ctx.closePath()
    },
    drawTop(ctx){
      ctx.beginPath();
      ctx.arc(50,15,15,0,2*Math.PI);
      ctx.fillStyle='#FFF';
      ctx.shadowBlur=10;
      ctx.shadowColor='#FFF';
      ctx.fill();
      ctx.closePath()
    }
  },
  mounted() {
    this.draw()
  }
}
</script>

<style scoped>
.nyzx{
  position: absolute;
  width: 100px;
  height: 320px;
}

.area-box .pulse {
  position: absolute;
  top: -60px;
  left: -25px;
  height: 150px;
  width: 150px;
  border: 12px solid #fff;
  -webkit-border-radius: 88px;
  -moz-border-radius: 88px;
  border-radius: 88px;
  -webkit-box-shadow: 0 0 4px #fff,0 0 10px #fff inset;
  -moz-box-shadow: 0 0 4px #fff,0 0 10px #fff inset;
  box-shadow: 0 0 4px #fff,0 0 10px #fff inset;
  opacity: .12;
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
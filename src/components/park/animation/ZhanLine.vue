<template>
  <canvas id="ZhanLine" width="2906" height="930"></canvas>
</template>

<script>
export default {
  name: "ZhanLine",
  props:['hasBranch'],
  methods:{
    draw(){
      let canvas = document.getElementById('ZhanLine');
      let ctx = canvas.getContext('2d');
      this.lineMove(ctx, [[2906,0],[0,569]])
      if(this.hasBranch) {
        setTimeout(() => {
          this.lineMove(ctx, [[885, 390], [915, 430]])
          this.lineMove(ctx, [[1063, 359], [1345, 700]])
          this.lineMove(ctx, [[1425, 289], [1476, 347]])
          this.lineMove(ctx, [[1606, 252], [1906, 580]])
          this.lineMove(ctx, [[2298, 118], [2370, 193]])
          this.lineMove(ctx, [[2577, 64], [2829, 336]])
          setTimeout(() => {
            this.lineMove(ctx, [[1354, 720], [1206, 760]])
            this.lineMove(ctx, [[1900, 580], [1724, 628]])
            this.lineMove(ctx, [[2839, 340], [2564, 410]])
          }, 600)
        }, 3000)
      }
    },
    drawLine(ctx, x1,y1, x2,y2){
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineWidth = 10;
      ctx.strokeStyle = '#A128FF';
      ctx.lineJoin='round';
      ctx.lineCap='round';
      // ctx.shadowColor ='#FFF';
      // ctx.shadowBlur = 5;
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    },
    lineMove(ctx, points) {
      const speed = 20;
      if(typeof (points) === "undefined"||points.length < 2) {
        return;
      }
      const [[x1, y1],[x2, y2]] = points;
      let dx = x2 - x1;
      let dy = y2 - y1;
      if(Math.abs(dx) < 1 && Math.abs(dy) < 1){
        points = points.slice(1);
        this.lineMove(points);
        return;
      }
      let x = x1,y=y1;
      if(dx === 0) {
        x=x2;
        y+=(speed*dy)/Math.abs(dy);
      }else if(dy === 0){
        y=y2;
        x+=(speed*dx)/Math.abs(dx);
      }else if(Math.abs(dx) >= 1) {
        let rate = dy/dx;
        x+=(speed*dx)/Math.abs(dx);
        y+=(speed*rate*dx)/Math.abs(dx);
      }
      this.drawLine(ctx, x1, y1, x, y);
      points[0] = [x,y];
      // window.requestAnimationFrame(() => {
      //   this.lineMove(ctx, points)
      // })
      setTimeout(() => {
        this.lineMove(ctx, points)
      },17)
    },
  },
  mounted() {
    this.draw();
  }
}
</script>

<style scoped>

</style>
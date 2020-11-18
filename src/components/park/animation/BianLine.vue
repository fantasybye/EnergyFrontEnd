<template>
  <canvas id="BianLine" width="3206" height="717"></canvas>
</template>

<script>
export default {
  name: "BianLine",
  methods:{
    draw(){
      let canvas = document.getElementById('BianLine');
      let ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.moveTo(3206,0);
      ctx.lineTo(0,717);
      ctx.lineJoin='round';
      ctx.lineCap='round';
      ctx.lineWidth = 10;
      ctx.strokeStyle= '#FFF000';
      ctx.stroke();
      ctx.closePath();
      // this.lineMove(ctx, [[3206,0],[1603,359]])
      // this.lineMove(ctx,[[0,717],[1603,359]])
      // setTimeout(()=>{
      //   this.lineMove(ctx, [[1108,466],[953,254]])
      //   this.lineMove(ctx,[[1108,466],[1160,534]])
      //   this.lineMove(ctx, [[1631,349],[1514,168]])
      //   this.lineMove(ctx,[[1631,349],[1683,413]])
      //   this.lineMove(ctx, [[2489,159],[2520,185]])
      //   this.lineMove(ctx,[[2556,149],[2435,28]])
      // },3000)
    },
    drawLine(ctx, x1,y1, x2,y2){
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineWidth = 10;
      ctx.strokeStyle = '#FFF000';
      ctx.lineJoin='round';
      ctx.lineCap='round';
      // ctx.shadowColor ='#FFF000';
      // ctx.shadowBlur = 5;
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    },
    lineMove(ctx,points) {
      const speed = 11;
      if(typeof (points) === "undefined"||points.length < 2) {
        return;
      }
      const [[x1, y1],[x2, y2]] = points;
      let dx = x2 - x1;
      let dy = y2 - y1;
      let x = x1,y=y1;
      if(Math.abs(dx) < 1 && Math.abs(dy) < 1){
        points = points.slice(1);
        this.lineMove(points);
        return;
      }
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
      },16.7)
    }
  },
  mounted() {
    this.draw();
  }
}
</script>

<style scoped>

</style>
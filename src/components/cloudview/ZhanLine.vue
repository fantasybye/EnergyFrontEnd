<template>
  <canvas id="ZhanLine" width="3162" height="917"></canvas>
</template>

<script>
export default {
  name: "ZhanLine",
  methods:{
    draw(){
      let canvas = document.getElementById('ZhanLine');
      let ctx = canvas.getContext('2d');
      // this.lineMove(ctx, [[3162,0],[0,611]])
      // setTimeout(()=>{
      //   this.lineMove(ctx,[[889,448],[947,583]])
      //   this.lineMove(ctx,[[1269,357],[1601,820]])
      //   this.lineMove(ctx,[[1521,315],[1601,446]])
      //   this.lineMove(ctx,[[1903,245],[2309,650]])
      //   this.lineMove(ctx,[[2223,184],[2368,324]])
      //   this.lineMove(ctx,[[2395,149],[2972,547]])
      //   setTimeout(()=>{
      //     this.lineMove(ctx,[[1605,830],[1232,916]])
      //     this.lineMove(ctx,[[2318,665],[1938,765]])
      //     this.lineMove(ctx,[[2972,549],[2648,660]])
      //   },600)
      // },3000)
      this.lineFlow(ctx,[[3162,0],[0,611]])
      setTimeout(()=>{

      },4000)
    },
    drawLine(ctx, x1,y1, x2,y2){
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineWidth = 10;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#AA60FF';
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    },
    lineMove(ctx, points) {
      const speed = 20;
      if(points.length < 2) {
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
      window.requestAnimationFrame(() => {
        this.lineMove(ctx, points)
      })
    },
    drawFlow(ctx, x1,y1, x2,y2){
      ctx.beginPath();
      ctx.clearRect(x2, y1, Math.abs(x2-x1), Math.abs(y2-y1))
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineWidth = 15;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    },
    lineFlow(ctx,points) {
      const speed = 11;
      if(points.length < 2) {
        return;
      }
      const [[x1, y1],[x2, y2]] = points;
      let dx = x2 - x1;
      let dy = y2 - y1;
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
      this.drawFlow(ctx, x1, y1, x, y);
      points[0] = [x,y];
      window.requestAnimationFrame(() => {
        this.lineFlow(ctx, points)
      })
    }
  },
  mounted() {
    this.draw();
  }
}
</script>

<style scoped>

</style>
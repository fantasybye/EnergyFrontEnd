<template>
  <canvas id="BianLine" width="3542" height="795"></canvas>
</template>

<script>
export default {
  name: "BianLine",
  methods:{
    draw(){
      let canvas = document.getElementById('BianLine');
      let ctx = canvas.getContext('2d');
      this.lineMove(ctx, [[3542,0],[1771,393]])
      this.lineMove(ctx,[[0,795],[1771,393]])
      setTimeout(()=>{
        this.lineMove(ctx, [[966,565],[912,387]])
        this.lineMove(ctx,[[1132,544],[1192,692]])
        this.lineMove(ctx, [[1674,417],[1561,222]])
        this.lineMove(ctx,[[1820,385],[1898,531]])
        this.lineMove(ctx, [[2415,260],[2608,430]])
        this.lineMove(ctx,[[2472,232],[2328,100]])
        this.lineMove(ctx,[[912,387],[1092,341]])
        setTimeout(()=>{
          this.lineMove(ctx,[[1092,341],[1035,250]])
          setTimeout(()=>{
            this.lineMove(ctx,[[1020,230],[1152,201]])
          },300)
        },600)
      },3000)
      // setTimeout(()=>{
      //   this.lineFlow(ctx)
      // },4000)
    },
    drawLine(ctx, x1,y1, x2,y2){
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineWidth = 10;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#FFF000';
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    },
    lineMove(ctx,points) {
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
      this.drawLine(ctx, x1, y1, x, y);
      points[0] = [x,y];
      window.requestAnimationFrame(() => {
        this.lineMove(ctx, points)
      })
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
        y=(speed*dy)/Math.abs(dy);
      }else if(dy === 0){
        y=y2;
        x=(speed*dx)/Math.abs(dx);
      }else if(Math.abs(dx) >= 1) {
        let rate = dy/dx;
        x=(speed*dx)/Math.abs(dx);
        y=(speed*rate*dx)/Math.abs(dx);
      }
      this.drawLine(ctx, x1, y1, x, y);
      points[0] = [x,y];
      window.requestAnimationFrame(() => {
        this.lineMove(ctx, points)
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
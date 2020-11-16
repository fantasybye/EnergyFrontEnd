<template>
  <canvas :id="`BianFlow${id}`" width="3206" height="717"></canvas>
</template>

<script>
export default {
  name: "BianFlow",
  props:['id'],
  mounted() {
    let canvas = document.getElementById(`BianFlow${this.id}`);
    let ctx = canvas.getContext('2d');
    let clear= [[1603,0,1603,717],
        [0,0,1603,717]];
    setInterval(()=>{
      this.lineFlow(ctx, [[3206,0],[1603,359]],clear[0])
      this.lineFlow(ctx,[[0,717],[1571,366]],clear[1])
    },5000)
  },
  methods:{
    drawFlow(ctx, x1,y1, x2,y2,coo){
      ctx.clearRect(coo[0], coo[1], coo[2], coo[3])
      ctx.beginPath();
      ctx.moveTo(x2, y2);
      const points = this.triFun(x1,y1,x2,y2);
      ctx.lineTo(points[0][0], points[0][1]);
      ctx.lineTo(points[1][0], points[1][1])
      ctx.fillStyle = '#FFF000';
      ctx.lineJoin='round';
      ctx.lineCap='round';
      // ctx.shadowBlur=5;
      // ctx.shadowColor='#fff';
      ctx.fill();
      ctx.closePath();
    },
    lineFlow(ctx,points,coo) {
      const speed = 10;
      const len = 800;
      if(typeof (coo) === "undefined"||coo.length < 2) {
        return;
      }
      if(typeof (points) === "undefined"||points.length < 2) {
        ctx.clearRect(coo[0], coo[1], coo[2], coo[3])
        return;
      }
      const [[x1, y1],[x2, y2]] = points;
      let dx = x2 - x1;
      let dy = y2 - y1;
      let x = x1,y=y1;
      if(Math.abs(dx)<len/2&&Math.abs(dy)<len/2){
        points = points.slice(1);
        this.lineFlow(ctx,points);
        return
      }
      // if(dx === 0) {
      //   x=x2;
      //   y+=(speed*dy)/Math.abs(dy);
      // }else if(dy === 0){
      //   y=y2;
      //   x+=(speed*dx)/Math.abs(dx);
      // }else if(Math.abs(dx) >= 1) {
      let rate = dy/dx;
      x+=(speed*dx)/Math.abs(dx);
      y+=(speed*rate*dx)/Math.abs(dx);
      // }
      points[0] = [x,y];
      let step = (len * dx) / Math.abs(dx)
      let cut = 30;
      ctx.clearRect(coo[0], coo[1], coo[2], coo[3])
      for(let i = 1; i < cut;i++) {
        ctx.beginPath();
        ctx.moveTo(x+step/cut*(i-1), y+step*rate*(i-1)/cut);
        ctx.lineTo(x + step/cut * i, y + step*rate*i/cut);
        ctx.lineWidth = 10;
        let alpha = 1 - Math.abs(i - cut/2) / cut * 2
        ctx.strokeStyle = 'rgba(255,255,255,'+alpha+')';
        ctx.stroke();
        ctx.closePath();
      }
      window.requestAnimationFrame(() => {
        this.lineFlow(ctx, points, coo)
      })
      // setTimeout(() => {
      //   this.lineFlow(ctx, points, coo)
      // },16.7)
    },
    triFun(x1,y1,x2,y2){
      let tan1 = (y1- y2)/(x1- x2);
      let tan2 = (1+tan1)/(1-tan1);
      let cos = Math.sqrt(1/(1+Math.pow(tan2, 2)));
      let sin = Math.sqrt(1/(1+(1/Math.pow(tan2, 2))));
      let hlen = Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2))
      let nx1,nx2,ny1,ny2;
      if(x1>x2) {
        nx1 = x2 + hlen * cos;
        ny1 = y2 + hlen * sin;
        nx2 = x2 + hlen * sin;
        ny2 = y2 - hlen * cos;
      }else{
        nx1 = x2 - hlen * sin;
        ny1 = y2 + hlen * cos;
        nx2 = x2 - hlen * cos;
        ny2 = y2 - hlen * sin;
      }
      return [[nx1, ny1], [nx2, ny2]]
    }
  }
}
</script>

<style scoped>

</style>
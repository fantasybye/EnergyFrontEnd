<template>
  <canvas :id="`ZhanFlow${id}`" width="2906" height="930"></canvas>
</template>

<script>
export default {
  name: "ZhanFlow",
  props:['id'],
  mounted() {
    let canvas = document.getElementById(`ZhanFlow${this.id}`);
    let ctx = canvas.getContext('2d');
    setInterval(()=>{
      this.lineFlow(ctx,[[2906,0],[0,569]])
    }, 4000)
  },
  methods:{
    drawFlow(ctx, x1,y1, x2,y2){
      ctx.beginPath();
      ctx.clearRect(x2, (y2-30)>0?(y2-30):0, 100, 150)
      ctx.moveTo(x2, y2);
      const points = this.triFun(x1,y1,x2,y2);
      ctx.lineTo(points[0][0], points[0][1]);
      ctx.lineTo(points[1][0], points[1][1]);
      ctx.lineJoin='round';
      ctx.lineCap='round';
      // ctx.arc(x2,y2,8,0,2*Math.PI)
      ctx.fillStyle = '#AA60FF';
      // ctx.shadowBlur=20;
      // ctx.shadowColor='#AA60FF';
      ctx.fill();
      ctx.closePath();
    },
    lineFlow(ctx,points) {
      const speed = 12;
      const len = 1000;
      if(typeof (points) === "undefined"||points.length < 2) {
        ctx.clearRect(0, 0,2906,600);
        return;
      }
      const [[x1, y1],[x2, y2]] = points;
      let dx = x2 - x1;
      let dy = y2 - y1;
      if(Math.abs(dx)<len&&Math.abs(dy)<len){
        points = points.slice(1)
        this.lineFlow(ctx,points)
        return
      }
      let x = x1, y = y1;
      // if (dx === 0) {
      //   x = x2;
      //   y += (speed * dy) / Math.abs(dy);
      // } else if (dy === 0) {
      //   y = y2;
      //   x += (speed * dx) / Math.abs(dx);
      // } else if (Math.abs(dx) >= 1) {
      let rate = dy / dx;
      x += (speed * dx) / Math.abs(dx);
      y += (speed * rate * dx) / Math.abs(dx);
      // }
      points[0] = [x,y];
      let step = (len * dx) / Math.abs(dx)
      let cut = 30;
      ctx.clearRect(0, 0,2906,600);
      for(let i = 1; i < cut;i++) {
        ctx.beginPath();
        ctx.moveTo(x+step/cut*(i-1), y+step*rate*(i-1)/cut);
        ctx.lineTo(x + step/cut * i, y + step*rate*i/cut);
        ctx.lineWidth = 10;
        let alpha = 1 - Math.abs(i - cut/2) / cut * 2
        ctx.strokeStyle = 'rgba(255,255,255,'+alpha+')';
        ctx.stroke();
        ctx.closePath();
        // ctx.beginPath();
        // ctx.moveTo(x+step/30*(i-1), y+step*rate*(i-1)/30);
        // ctx.lineTo(x + step/30 * i, y + step*rate*i/30);
        // ctx.lineWidth = 4;
        // ctx.strokeStyle = '#fff';
        // ctx.stroke();
        // ctx.closePath();
      }
      window.requestAnimationFrame(() => {
        this.lineFlow(ctx, points)
      })
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
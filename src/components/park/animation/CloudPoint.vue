<template>
  <canvas :id="`CloudPoint${id}`" width="280" height="280"></canvas>
</template>

<script>
export default {
  name: "CloudPoint",
  props:['id', 'color'],
  data(){
    return {
      offSet: 0
    }
  },
  mounted() {
    this.draw();
  },
  methods:{
    draw(){
      let canvas = document.getElementById(`CloudPoint${this.id}`);
      let context = canvas.getContext('2d');
      let width = canvas.width;
      let height = canvas.height;
      let circle = {
        context: context,
        x: width/2,
        y: height/2,
        radius: width/2 - 8,
        lineWidth: 8,
        color: this.color,
        startAngle: 0,
        endAngle: 2*Math.PI
      };
      this.drawBorder(circle);
      // setInterval(() => {
      //   this.drawBorder(circle)
      // }, 100)
    },
    drawBorder(circle){
      let ctx = circle.context;
      ctx.clearRect(0, 0, circle.x * 2, circle.y * 2)
      ctx.beginPath();
      ctx.arc(circle.x, circle.y, circle.radius, circle.startAngle, circle.endAngle);
      ctx.setLineDash([30,35])
      ctx.lineWidth = circle.lineWidth;
      ctx.lineDashOffset = -this.offSet;
      ctx.strokeStyle = circle.color;
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
      if(this.offSet > 180) {
        this.offSet = 0;
      }
      this.offSet += 10;
      this.drawCenter(circle);
    },
    drawCenter(circle){
      let ctx = circle.context
      ctx.beginPath();
      ctx.arc(circle.x, circle.y, 90, circle.startAngle, circle.endAngle);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.fill();
      ctx.closePath();
      ctx.restore();
      ctx.beginPath();
      ctx.arc(circle.x, circle.y, this.offSet/5 + 10, circle.startAngle, circle.endAngle);
      ctx.fillStyle = circle.color;
      ctx.fill();
      ctx.closePath();
      ctx.restore();
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <div class="ping-gu-circle">
    <canvas :id="`myCanvas${id}`" class="float" :width="220" :height="220">
<!--      <div class="circle-label">{{ text }}</div>-->
    </canvas>
  </div>
</template>

<script>
export default {
  name: "CirclePanel",
  props:['id','text'],
  methods:{
    draw(){
      let canvas = document.getElementById(`myCanvas${this.id}`)
      let ctx = canvas.getContext("2d");
      let width = canvas.width;
      let height = canvas.height;
      let circleObj={
        ctx: ctx, /*圆心*/
        x: width/2,
        y: height/2,
        radius: width/2 - 15, /*半径,半径比canvas宽的一半要小*/
        lineWidth: 15 /*环的宽度*/
      };
      let grd = ctx.createLinearGradient(width / 2, 0, 0, height);
      grd.addColorStop(0, "#52FFEA");
      grd.addColorStop(1, "#20A0FF");
      circleObj.color = grd;
      circleObj.startAngle = 0;
      circleObj.endAngle = 2 * Math.PI
      this.drawCircle(circleObj);
    },
    drawCircle(circleObj){
      let ctx = circleObj.ctx;
      ctx.beginPath();
      ctx.arc(circleObj.x, circleObj.y, circleObj.radius, circleObj.startAngle, circleObj.endAngle);
      //设定曲线粗细度
      ctx.lineWidth = circleObj.lineWidth;
      //给曲线着色
      ctx.strokeStyle = circleObj.color;
      //连接处样式
      ctx.lineCap = 'round';
      ctx.fillStyle = '#86F4FF';
      ctx.textBaseline="middle";
      ctx.textAlign="center";
      ctx.font='40px PingFangSC-Medium';
      ctx.fillText(this.text,circleObj.x-2,circleObj.y+5,165);
      //给环着色
      ctx.stroke();
      // ctx.fill();
      ctx.closePath();
    },

  },
  mounted() {
    this.draw()
  }
}
</script>

<style scoped>
.ping-gu-circle{
  display: table;
  position: absolute;
  left: 240px;
  width: 220px;
  height: 220px;
  /*border: 10px solid #52FFEA ;*/
  /*border-image: -webkit-linear-gradient(#52FFEA, #20A0FF) 100 0;*/
  /*border-image: -moz-linear-gradient(#52FFEA, #20A0FF) 100 0;*/
  /*border-image: linear-gradient(#52FFEA, #20A0FF) 100 0;*/
  font-size: 40px;
  font-family: PingFangSC-Medium, PingFang SC,serif;
  font-weight: 500;
  color: #86F4FF;
  text-align: center;
}
.float{
  display: table-cell;
  float: left;
  /*position: absolute;*/
  /*left: 0;*/
}
.circle-label{
  /*position: absolute;*/
  /*left: 25px;*/
  padding-left: 30px;
  float: left;
  width: 180px;
  height: 220px;
  display: table-cell;
  vertical-align: middle;
}
</style>
<template>
  <canvas id="canvas-flow" width="1000" height="200"></canvas>
</template>

<script>
export default {
name: "Flow",
  methods:{
    draw(){
    let c = Math.min, m = Math.max, n = Math.abs, l = 4;
    let opt = {};
    opt.canvas = document.getElementById('canvas-flow');


    let _initCanvas = function (canvas, width, height) {
      let devicePixelRatio = window.devicePixelRatio, canvasObj = canvas.getContext("2d");
      canvas.width = width * devicePixelRatio, canvas.height = height * devicePixelRatio, canvas.style.width = width + "px", canvas.style.height = height + "px", canvasObj.scale(devicePixelRatio, devicePixelRatio)
    }

    let resize = function () {
      //resize发生
      opt.timer && cancelAnimationFrame(opt.timer);
      _initCanvas(opt.canvas, opt.width, opt.height), draw(0)
    }

    let _createPattern = function (a) {
      let b = 140, c = 63, d = 1, e = document.createElement("canvas");
      e.width = b, e.height = c, e.style.width = b / d + "px", e.style.height = c / d + "px";
      let f = e.getContext("2d");
      //缩放 宽高 100%
      f.scale(d, d);
      f.lineWidth = .4;
      for (let g = 3, h = .8, j = 1; 30 > j; j++) {
        //设置或返回用于笔触的颜色、渐变或模式
        f.strokeStyle = "RGBA(22, 120, 160, " + h + ")";
        //开始一条路径
        f.beginPath();
        //把路径移动到画布中的指定点，不创建线条
        f.moveTo(0, j * g);
        //添加一个新点，然后在画布中创建从该点到最后指定点的线条
        f.lineTo(b, j * g);
        //绘制已定义的路径
        f.stroke();
        //创建从当前点回到起始点的路径
        f.closePath();
        10 < j && (h -= .1);
      }
      let i = a.getContext("2d").createPattern(e, "repeat-x");
      opt.pattern = i, e = null
    }

    let _drawHightlight = function (a) {
      //a = 0
      let b = opt.canvas.getContext("2d"), d = .3;
      //clearRect 在给定的矩形内清除指定的像素,这里清完了
      b.clearRect(0, 0, 2 * opt.width, 2 * opt.height);
      b.shadowColor = "rgba(0, 193, 220, 1)";
      b.shadowBlur = 5;
      b.strokeStyle = "#004CB3";
      b.lineWidth = .8;
      b.fillStyle = "none";
      _draw(b, false);
      //这里绘制了外围边框线条
      //return false;
      let e = b.createLinearGradient(0, 0, opt.width, opt.height), f = a - d;
      e.addColorStop(c(1, m(0, 0 + f)), "rgba(0,0,0,0)");
      e.addColorStop(c(1, m(0, 0 + f + .1)), "#8ED6FF");
      e.addColorStop(c(1, 0 + f + d), "#8ED6FF");
      e.addColorStop(c(1, 0 + f + d + .1), "rgba(0,0,0,0)");
      e.addColorStop(1, "rgba(0,0,0,0)");
      b.lineWidth = 1.5;
      b.strokeStyle = e;
      b.fillStyle = opt.pattern;
      _draw(b, true)

    }


    let draw = function (a) {
      //console.log(a);
      _drawHightlight(a);
      //return false;

      opt.timer = requestAnimationFrame(function () {
        //console.log(a);
        draw((a + .005) % 1.6)
      })


    }

    let _draw = function (canvasObj, trueorfalse) {
      canvasObj.lineTo(opt.width + 10, opt.height + 10);
      canvasObj.closePath();
      canvasObj.stroke();
      trueorfalse && canvasObj.fill();
      opt.animating && trueorfalse && (opt.curDisX = l, n(l) >= n(opt.distance) && (opt.animating = false, opt.currentIndex = opt.nextIndex))
    }

    // _toggle(1);
    // _calcTabs();
    _initCanvas(opt.canvas, opt.width, opt.height);
    _createPattern(opt.canvas);
    draw(0);

    window.onresize = function () {
      resize();
    };
    }
  },
  mounted() {
    this.draw();
  }
}





</script>

<style scoped>

</style>
<template>
  <div class="head-container">
    <canvas id="my-canvas"></canvas>
    <div class="eye-catching"></div>
    <h1 class="center"><a>黄</a><a>岩</a><a>脚</a></h1>
    <a class="notice" href="https://www.google.com">所有的效果都是抄袭的，不要打扰我，谢谢</a>
  </div>
</template>

<script>
  export default {
    created () {
      this.$http.get('/api/blog')
        .then((res) => {
          console.log(res && res.data)
        })
    },
    mounted () {
      document.addEventListener('touchmove', function (e) {
        e.preventDefault()
      })
      let canvas = document.getElementsByTagName('canvas')[0]
      let ctx = canvas.getContext('2d')
      let dpr = window.devicePixelRatio || 1
      let width = window.innerWidth
      let height = window.innerHeight
      let wide = 90
      let r = 0
      let PI_2 = Math.PI * 2
      let cos = Math.cos
      let random = Math.random
      let path
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
      ctx.globalAlpha = 0.6

      function init () {
        ctx.clearRect(0, 0, width, height)
        path = [{x: 0, y: height * 0.7 + wide}, {x: 0, y: height * 0.7 - wide}]
        while (path[0].x < width + wide) {
          drew(path[0], path[1])
        }
      }

      function drew (start, end) {
        ctx.beginPath()
        ctx.moveTo(start.x, start.y)
        ctx.lineTo(end.x, end.y)
        let nextX = end.x + (random() * 2 - 0.25) * wide
        let nextY = geneY(end.y)
        ctx.lineTo(nextX, nextY)
        ctx.closePath()

        r -= PI_2 / -50
        ctx.fillStyle = '#' + (cos(r) * 127 + 128 << 16 | cos(r + PI_2 / 3) * 128 << 8 | cos(r + PI_2 / 3 * 2) * 127 + 128).toString(16)
        ctx.fill()
        path[0] = path[1]
        path[1] = {x: nextX, y: nextY}
      }

      function geneY (y) {
        let temp = y + (random() * 2 - 1.1) * wide
        return (temp > height || temp < 0) ? geneY(y) : temp
      }

      document.onclick = init
      document.ontouchstart = init
      init()
    }
  }
</script>

<style>
  .center {
    font-size: 4em;
    color: #ffc107;
  }
  canvas {
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .notice {
    color: #333;
    font-size: 13px;
    position: fixed;
    bottom: 100px;
    right: 100px;
  }
</style>

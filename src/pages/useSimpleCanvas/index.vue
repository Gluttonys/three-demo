<template>
  <canvas id="target"
          class="transition"
          height="1000"
          width="1000"/>

  <a-button class="mt-4" type="primary" @click="downloadImage"> 下载图片</a-button>
</template>

<script lang="ts" setup>
import SimpleCanvas from "@/simpleCanvas/src/SimpleCanvas";
import {onMounted} from "vue";
import {CanvasText, Rect, Region} from "@/simpleCanvas/src/parts/inherit";
import {ceil, delay} from "lodash";

let simpleCanvas: SimpleCanvas = null

onMounted(async () => {
  simpleCanvas = new SimpleCanvas('target')
      .setBackGround('#ffffff')
      .openGrid()
  const ctx = simpleCanvas.get2DCtx()
  const [width, height] = simpleCanvas.getCanvasWidthAndHeight()

  new Region({
    pathList: [
      [150, 475],
      [300, 400],
      [375, 250],
      [450, 400],
      [600, 475],
      [450, 550],
      [375, 700],
      [300, 550],
    ],
    backgroundColor: 'rgba(14,62,1,0.67)'
  }).draw(simpleCanvas.get2DCtx())

  let len = 15

  new CanvasText({x: 20, y: len * 2, fontSize: 30, content: '平移',}).draw(ctx)
  new CanvasText({x: width - 20, y: len * 2, fontSize: 30, content: '旋转', direction: 'rtl'}).draw(ctx)

  for (let i = 0; i < ceil(1000 / len); i++) {
    delay(() => {
      let pos = i * len
      simpleCanvas.deformationTransformations(pos, pos, (ctx) => {
        new Rect({
          width: len,
          height: len,
          backgroundColor: 'rgba(76,1,1,0.32)'
        }).draw(ctx)
      })
    }, i * 50)
  }

  for (let i = 0; i < ceil(1000 / len); i++) {
    delay(() => {
      simpleCanvas.deformationRotate(i % 360, (ctx) => {
        new Rect({
          x: simpleCanvas.getCanvasWidth() - (i + 1) * len,
          y: i * len,
          width: len,
          height: len,
          backgroundColor: 'rgba(76,1,1,0.32)'
        }).draw(ctx)
      })
    }, i * 50)
  }


})

const downloadImage = () => {
  simpleCanvas.toGenerateImage('hello')
}

</script>


<template>
  <canvas id="target"
          class="transition"
          height="1000"
          width="1000"/>
</template>

<script lang="ts" setup>
import {onMounted} from "vue";
import SimpleCanvas from "@/simpleCanvas/src/SimpleCanvas";
import {Rect} from '@/simpleCanvas/src/parts/inherit/index'
import Layer from "@/simpleCanvas/src/Layer";
import {delay} from "lodash";

let simpleCanvas: SimpleCanvas = null

onMounted(async () => {
  simpleCanvas = new SimpleCanvas('target')
      .setBackGround('rgb(255,255,255)')
      .openGrid()

  const rect = new Rect({
    x: 100,
    y: 100,
    width: 500,
    height: 500,
    zIndex: 101,
    backgroundColor: 'rgb(255,159,0)'
  })

  const rect1 = new Rect({
    x: 400,
    y: 100,
    width: 500,
    height: 500,
    zIndex: 102,
    backgroundColor: 'rgb(0,62,255)'
  })

  const layer = new Layer({name: "customLayer", zIndex: 1})
  const rect2 = new Rect({
    x: 300,
    y: 450,
    width: 500,
    height: 500,
    zIndex: 3,
    backgroundColor: 'rgb(239,14,255)'
  })
  const rect3 = new Rect({
    x: 200,
    y: 450,
    width: 500,
    height: 500,
    zIndex: 2,
    backgroundColor: 'rgb(92,101,255)'
  })

  layer.add([rect2, rect3])
  
  simpleCanvas.add(rect).add(rect1).add(layer)

  delay(() => {
    layer.remove(rect3)

    delay(() => {
      layer.remove(rect2)
    }, 1000)
  }, 2000)

})


</script>


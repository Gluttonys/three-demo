<template>
  <canvas id="target"
          class="transition"
          height="1000"
          style="background-color: #000000"
          width="1000"/>
</template>

<script lang="ts" setup>
import SimpleCanvas from "@/simpleCanvas/src/SimpleCanvas";
import {onMounted} from "vue";
import {CanvasText, Rect} from "@/simpleCanvas/src/parts/inherit";

onMounted(async () => {
  const simpleCanvas = new SimpleCanvas('target')
  const ctx = simpleCanvas.canvasCtx

  new Rect({
    width: 500,
    height: 500,
    backgroundColor: 'pink'
  }).draw(ctx)

  const text = new CanvasText({
    x: 100,
    y: 150,
    fontSize: 50,
    color: 'red',
    content: '在黑暗中所有东西都将被揭开',
    backgroundColor: 'green',
    stroke: true
  }).draw(ctx)

})


</script>


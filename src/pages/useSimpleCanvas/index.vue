<template>
  <canvas id="target"
          class="transition"
          height="1000"
          style="background-color: #000000"
          width="1000"/>

  <a-button class="mt-4" type="primary" @click="downloadImage"> 下载图片</a-button>
</template>

<script lang="ts" setup>
import SimpleCanvas from "@/simpleCanvas/src/SimpleCanvas";
import {onMounted} from "vue";

let simpleCanvas: SimpleCanvas = null

onMounted(async () => {
  simpleCanvas = new SimpleCanvas('target')
      .openGrid({line: {spacing: 25, color: '#626262'}, font: {fontSize: 12, color: '#ffffff'}})
})

const downloadImage = () => {
  simpleCanvas.toGenerateImage('hello')
}

</script>


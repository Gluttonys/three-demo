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

let simpleCanvas: SimpleCanvas = null

onMounted(async () => {
  simpleCanvas = new SimpleCanvas('target')
      .setBackGround('#ffffff')
      .openGrid()

})

const downloadImage = () => {
  simpleCanvas.toGenerateImage('hello')
}

</script>


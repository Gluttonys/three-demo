<template>
  <section
      ref="container"
      class="cursor-pointer w-full h-96 bg-gray-800">
    <video :src="videoPath" class="w-full h-full" controls></video>
  </section>

  <br>
  <br>
  <br>
  <hr>

  <br>
  <br>
  <br>

  <section class="flex justify-around items-center">

    <section ref="container1" class="cursor-pointer w-5/12 h-96 bg-gray-300"></section>
    <section ref="container2" class="cursor-pointer w-5/12 h-96 bg-gray-500"></section>

  </section>


</template>

<script lang="ts" setup>

import {onMounted, ref, unref} from "vue";
import {Flowering} from "@/pages/Douyin/flower";
import one from '@/assets/img/1.png'
import two from '@/assets/img/2.png'
import three from '@/assets/img/3.png'
import videoPath from '@/assets/video/test.mp4'


const container = ref<HTMLElement>(null)
const container1 = ref<HTMLElement>(null)
const container2 = ref<HTMLElement>(null)

onMounted(() => {
  new Flowering(unref(container))
  const second = new Flowering(unref(container1))
  new Flowering(unref(container2)).fillingImgs([one, two, three])

  // delay(() => {
  //   console.log("销毁特效")
  //   second.dispose()
  // }, 3_000)
})


</script>

<template>


  <a-alert message="站点 ： https://developer.mozilla.org/zh-CN/docs/Web/CSS/aspect-ratio" type="info"/>

  <h1>CSS : aspect-ratio</h1>

  <section class="w-full bg-gray-200 h-96 p-4 flex items-start justify-start mt-12">


    <div v-for="item in data" :key="item" class="w-32 text-center mr-4">
      <img :alt="img" :src="img" :style="{aspectRatio: item}" class="bg-gray-400"/>

      <p class="mt-4">{{ item }}</p>
    </div>

  </section>

</template>

<script lang="ts" setup>
import img from '@/assets/img/1.png'

const data = [
  "5 / 1",
  "4 / 1",
  "3 / 1",
  "2 / 1",
  "1 / 1",
  "1 / 2",
  "1 / 3",
  "1 / 4",
  "1 / 5",
  "4 / 3",
  "16 / 9",
]


</script>


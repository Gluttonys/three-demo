<template>

  <link-block :links="links"></link-block>

  <h1>CSS : clip-path 属性</h1>
  
  <section class="flex w-full h-96 bg-gray-400 p-4 mt-4">
    <div class="w-36 h-36 bg-gray-900 mr-4">
      <img
          :alt="image"
          :src="image" class="w-full h-full" style="clip-path: circle(30%)">
    </div>

    <div class="w-36 h-36 bg-gray-900 mr-4">
      <img
          :alt="image"
          :src="image" class="w-full h-full" style="clip-path: circle(80%)">
    </div>


    <div class="w-36 h-36 bg-gray-900 mr-4">
      <img
          :alt="image"
          :src="image" class="w-full h-full" style="clip-path: ellipse(40px 50px at 50% 50%)">
    </div>


    <div class="w-36 h-36 bg-gray-900 mr-4">
      <img
          :alt="image"
          :src="image" class="w-full h-full" style="clip-path: ellipse(40px 50px at 30% 80%)">
    </div>


    <div class="w-36 h-36 bg-gray-900 mr-4">
      <img
          :alt="image"
          :src="image" class="w-full h-full" style="clip-path: polygon(50% 0%, 0% 100%, 100% 100%)">
    </div>


    <div class="w-36 h-36 bg-gray-900 mr-4">
      <img
          :alt="image"
          :src="image" class="w-full h-full" style="clip-path: polygon(20% 20%, 80% 20%, 80% 80%, 20% 80%)">
    </div>


    <div class="w-36 h-36 bg-gray-900 mr-4">
      <img
          :alt="image"
          :src="image" class="w-full h-full" style="clip-path: inset(30%)">
    </div>

    <div class="w-36 h-36 bg-gray-900 mr-4">
      <img
          :alt="image"
          :src="image" class="w-full h-full" style="clip-path: inset(40%)">
    </div>
  </section>


</template>

<script lang="ts" setup>
import image from '@/assets/img/1.png'
import LinkBlock from '@/components/LinkBlock/index.vue'

const links: Base.Link[] = [
  {
    title: "MDN",
    link: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path"
  }
]

</script>

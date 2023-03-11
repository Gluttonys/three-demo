<template>

  <link-block :links="links"></link-block>

</template>

<script lang="ts" setup>
import LinkBlock from '@/components/LinkBlock/index.vue'

const links: Base.Link[] = [
  {
    title: "cesium 官网",
    link: "https://cesium.com/"
  },
  {
    title: "npm 地址",
    link: "https://www.npmjs.com/package/cesium"
  },
  {
    title: "cesium 教程",
    link: "http://cesium.xin/wordpress/archives/36.html"
  },
  {
    title: "检测浏览器是否支持 webGl",
    link: "http://get.webgl.org/"
  }
]

</script>

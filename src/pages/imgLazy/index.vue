<template>
  <link-block :links="links"></link-block>


  <section class="h-full w-full bg-gray-300 overflow-auto flex flex-col items-center">
    <img v-for="item in 100" :key="item" :src="`https://picsum.photos/id/${_.random(1, 1000)}/300/200`" alt=""
         class="w-36"
         loading="lazy"
         @load="loadImg">
  </section>
</template>

<script lang="ts" setup>
import * as _ from "lodash"

import LinkBlock from '@/components/LinkBlock/index.vue'

const links: Base.Link[] = [
  {
    title: "事件类型声明列表",
    link: "https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.event.html"
  },
  {
    title: "图片 mock 网址",
    link: "https://picsum.photos/"
  }
]


let count = 0

const loadImg = (event: Event) => {
  console.log(++count)
}

</script>


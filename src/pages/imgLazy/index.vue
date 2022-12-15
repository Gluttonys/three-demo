<template>

  <section class="my-4 shadow p-4">
    <p>
      <span>事件类型声明列表</span>
      <a
          href="https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.event.html"
          target="_blank">
        https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.event.html
      </a>
    </p>

    <p>
      <span>图片 mock 网址</span>
      <a
          href="https://picsum.photos/"
          target="_blank">
        https://picsum.photos/
      </a>
    </p>

  </section>


  <section class="h-full w-full bg-gray-300 overflow-auto flex flex-col items-center">
    <img v-for="item in 100" :key="item" :src="`https://picsum.photos/id/${_.random(1, 1000)}/300/200`" alt=""
         class="w-36"
         loading="lazy"
         @load="loadImg">
  </section>
</template>

<script lang="ts" setup>
import * as _ from "lodash"

let count = 0

const loadImg = (event: Event) => {
  console.log(++count)
}

</script>


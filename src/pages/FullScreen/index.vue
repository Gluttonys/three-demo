<template>
  <LinkBlock :links="links"/>

  <section>
    <a-button class="mr-2" @click="fullScreen">展开全屏</a-button>
    <a-button danger @click="closeFullScreen">关闭全屏</a-button>
  </section>

  <p class="font-bold my-4 text-2xl">电脑是否支持全屏操作: document.fullscreenEnabled => {{ enabled }}</p>
  <p class="font-bold my-4 text-2xl">
    电脑是否当前是否为全屏: document.fullscreenElement === null => {{ isFullScreen }}
  </p>

  <hr>
  <hr>
  <hr>

  <section
      ref="fullEle"
      class="w-2/3 h-2/6 bg-gray-400 my-4 flex items-center justify-center cursor-pointer"
      @click="toFullEle">
    <p class="text-2xl font-bold text-red-500">
      {{ isFullScreen ? '点击我退出全屏' : '点击我全屏该元素' }}
    </p>
  </section>
  
</template>

<script lang="ts" setup>
import LinkBlock from '@/components/LinkBlock/index.vue'
import {ref} from "vue";
import {isNull} from "lodash";


const links: Base.Link[] = [
  {
    title: "MDN",
    link: "https://developer.mozilla.org/zh-CN/docs/Web/API/Fullscreen_API"
  },
  {
    title: "全屏指南",
    link: "https://developer.mozilla.org/zh-CN/docs/Web/API/Fullscreen_API/Guide"
  }
]

const enabled = document.fullscreenEnabled

// 这个值的状态可以自己实现一个 hook ， 不必要每次切换都主动去维护该值状态
const isFullScreen = ref<boolean>(!isNull(document.fullscreenElement))

const fullEle = ref<HTMLDivElement>(null)

const closeFullScreen = () => {
  document.exitFullscreen()

  isFullScreen.value = isNull(document.fullscreenElement)
}

const fullScreen = () => {
  document.body.requestFullscreen()

  isFullScreen.value = isNull(document.fullscreenElement)
}


const toFullEle = () => {
  if (isNull(document.fullscreenElement)) {
    fullEle.value.requestFullscreen()

    isFullScreen.value = isNull(document.fullscreenElement)
  } else {
    document.exitFullscreen()

    isFullScreen.value = isNull(document.fullscreenElement)
  }
}

</script>


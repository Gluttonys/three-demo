<template>
  <section
      ref="container"
      class="cursor-pointer w-screen h-96 bg-gray-800"/>

  <a-switch
      v-model:checked="imgChange"
      checked-children="原始图片"
      un-checked-children="更换图片"
      @change="handleChange"
  ></a-switch>

</template>

<script lang="ts" setup>

import {onMounted, ref, unref} from "vue";
import {Flowering} from "@/pages/Douyin/flower";
import one from '@/assets/img/1.png'
import two from '@/assets/img/2.png'
import three from '@/assets/img/3.png'


const container = ref<HTMLElement>(null)
const imgChange = ref<boolean>(true)

let flower: Flowering = null

onMounted(() => flower = new Flowering(unref(container)))


const handleChange = (value) => {
  if (value) {
    flower.fillingImgs()
  } else {
    flower.fillingImgs([one, two, three])
  }

}

</script>

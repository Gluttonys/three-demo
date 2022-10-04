<template>
  <main ref="container" class="container w-full h-full"/>
</template>


<script lang="ts" setup>

import {onMounted, ref} from "vue";
import Init3D from "./utils/init3D";
import objLoader from "./utils/objLoader";


const container = ref<HTMLElement>(null)

/* 初始化3D场景 */
onMounted(() => {
  window.threeDObj = new Init3D(container.value)
  window.threeDObj.baseCamera.position.set(200, 200, 200)
})

/* 加载模型 */
onMounted(() => objLoader(
    "/models/town/Townoq6GBiipX9dNVysr.obj",
    "/models/town/Town.mtl",
    window.threeDObj.scene
))


</script>



<template>
  <main ref="container" class="w-full h-full"/>

</template>


<script lang="ts" setup>

import {onMounted, ref} from "vue";
import Init3D from "@/utils/init3D";
import {BoxGeometry, Mesh, MeshBasicMaterial} from "three";


const container = ref<HTMLElement>(null)

/* 初始化3D场景 */
onMounted(() => {
  window.threeDObj = new Init3D(container.value)
  window.threeDObj.baseCamera.position.set(500, 500, 500)

  initCube()
})

const initCube = () => {
  const mesh = new Mesh(
      new BoxGeometry(100, 100, 100),
      new MeshBasicMaterial({color: '#380b0b'})
  )

  // todo 物体元素的动画
  // const animateAction = new AnimationAction(
  //     new AnimationMixer(),
  //     new AnimationClip(),
  //     mesh
  // )

  window.threeDObj.scene.add(mesh)
}


/* 加载模型 */
// onMounted(() => objLoader(
//     "/models/town/Townoq6GBiipX9dNVysr.obj",
//     "/models/town/Town.mtl",
//     window.threeDObj.scene
// ))

</script>



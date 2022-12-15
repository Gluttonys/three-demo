<template>
  <main ref="container" class="w-full h-full"/>

</template>


<script lang="ts" setup>

import {onMounted, ref} from "vue";
import Init3D from "@/utils/init3D";
import {BoxGeometry, DoubleSide, Mesh, MeshLambertMaterial, PlaneGeometry} from "three";


const container = ref<HTMLElement>(null)

const cubeSize = 10
const unitAngle = Math.PI / 180

/* 初始化3D场景 */
onMounted(() => {
  window.threeDObj = new Init3D(container.value)
  window.threeDObj.baseCamera.position.set(100, 100, 100)
  window.threeDObj.scene.position.set(0, 0, 0)

  initGround()
  initCube()
})


const initGround = () => {

  const material = new MeshLambertMaterial({color: '#003545'})
  material.side = DoubleSide

  const mesh = new Mesh(
      new PlaneGeometry(100, 100),
      material
  )

  mesh.castShadow = false
  mesh.receiveShadow = true
  mesh.rotateX(-Math.PI / 2)
  window.threeDObj.scene.add(mesh)
}

const initCube = () => {
  const mesh = new Mesh(
      new BoxGeometry(cubeSize, cubeSize, cubeSize),
      new MeshLambertMaterial({color: '#406195'})
  )

  mesh.castShadow = true
  mesh.position.setY(cubeSize / 2 + 0.1)

  window.threeDObj.scene.add(mesh)

  const animation = () => {
    mesh.rotateY(-unitAngle)
    requestAnimationFrame(animation)
  }

  requestAnimationFrame(animation)

}


// /* 加载模型 */
// onMounted(() => objLoader(
//     "/models/town/Townoq6GBiipX9dNVysr.obj",
//     "/models/town/Town.mtl",
//     window.threeDObj.scene
// ))

</script>



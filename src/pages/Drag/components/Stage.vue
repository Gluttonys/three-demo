<template>
  <main
      @dragover="containerDragOver"
      @dragenter="containerDragEnter"
      @dragleave="containerDragLeave"
      @drop="containerDrop"
      ref="container" class="w-full" style="height: 800px"/>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {DoubleSide, Mesh, MeshLambertMaterial, PlaneGeometry} from "three";
import Init3D from "@/utils/init3D";


const container = ref<HTMLElement>(null)

const containerDragOver = (event: DragEvent) => {
  event.preventDefault()
}

const containerDragEnter = (event: DragEvent) => {
  console.log(event.type)
}

const containerDragLeave =  (event: DragEvent) => {
  console.log(event.type)
}

const containerDrop = (event: Event) => {
  event.preventDefault()

}

/* 初始化3D场景 */
onMounted(() => {
  window.threeDObj = new Init3D(container.value)
  window.threeDObj.baseCamera.position.set(100, 100, 100)
  window.threeDObj.scene.position.set(0, 0, 0)

  initGround()
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


</script>

<style lang="less" scoped>

</style>

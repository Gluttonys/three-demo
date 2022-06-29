<template>
  <section id="three-container" ref="threeContainer"/>
</template>

<script lang="ts" setup>
import use3D from "./hooks/use3D";
import {onMounted, ref} from "vue";
import {BoxGeometry, Mesh, MeshBasicMaterial} from "three";
import {useScene} from "../../hooks/threeD";

const threeContainer = ref<HTMLDivElement>(null)
onMounted(() => use3D(threeContainer.value))

// 具体业务
const getGround = (): Mesh => {
  const box = new BoxGeometry(1000, 6, 1000)
  const groundMesh = new MeshBasicMaterial({color: '#1d2c3b'})
  return new Mesh(box, groundMesh)
}

onMounted(() => {
  const scene = useScene()
  scene.add(getGround())
})


</script>

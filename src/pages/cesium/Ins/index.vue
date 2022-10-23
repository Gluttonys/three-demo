<template>
  <section ref="cesiumContainer" class="w-full h-full"/>
</template>

<script lang="ts" setup>
import {Viewer} from 'cesium'
import {onMounted, ref} from "vue";

const cesiumContainer = ref<HTMLElement>(null)
const cesiumIns = ref<Viewer>(null)

/* 初始化 cesium */
const initCesium = () => {
  cesiumIns.value = new Viewer(cesiumContainer.value, {
    geocoder: false,
    homeButton: false,
    sceneModePicker: false,
    baseLayerPicker: false,
    navigationHelpButton: false,
    animation: false,
    infoBox: false,
    timeline: false,
    fullscreenButton: false,
    vrButton: false,
  })

  /* 显示帧率 */
  cesiumIns.value.scene.debugShowFramesPerSecond = true
}

onMounted(initCesium)

</script>

<style scoped>

</style>

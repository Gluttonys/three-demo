<template>
  <section id="three-container" ref="threeContainer"/>
</template>

<script lang="ts" setup>
import use3D from "./hooks/use3D";
import {onMounted, ref} from "vue";

const threeContainer = ref<HTMLDivElement>(null)
onMounted(() => use3D(threeContainer.value))

// 具体业务


</script>

<template>
  <main class="page">
    <Core/>

  </main>
</template>


<script lang="ts" setup>
import Core from './components/Core/index.vue'
import {onMounted} from "vue";

onMounted(() => {
  console.log("开工大吉")
})

</script>


<style lang="less" scoped>
.page {
  position : relative;
  width    : 100vw;
  height   : 100vh;
  overflow : hidden;

}

</style>

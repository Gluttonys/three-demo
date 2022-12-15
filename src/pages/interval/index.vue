<template>

  <ul>
    <li v-for="item in list" :key="item">{{ item }}</li>

  </ul>

</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue'
import myInterval, {clearMyInterval} from "@/utils/myInterval";

const list = ref<string[]>([])


onMounted(() => {

  const timer = myInterval((index) => {
    console.log(index)
  }, 1000)


  const rawTimer = setTimeout(() => {
    clearMyInterval(timer)
    clearTimeout(rawTimer)
  }, 2000)
})


</script>

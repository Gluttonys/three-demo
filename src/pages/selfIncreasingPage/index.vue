<template>
  <SelfIncreasing
      :begin="begin"
      :end="end"
      class="font-bold text-red-500"
      style="font-size: 80px"/>
</template>

<script lang="ts" setup>
import SelfIncreasing from '@/components/selfIncreasing/index.vue'

const begin = 10
const end = 50

</script>

 


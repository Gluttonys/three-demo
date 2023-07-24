<template>

  <section ref="wrapper" class="wrapper">
    <aside class="place-holder"></aside>

    <img ref="box" :src="image" :style="{width: `${size}px`,height: `${size}px`}" alt="" class="box"/>
  </section>

</template>

<script lang="ts" setup>

import {onMounted, ref} from "vue";
import image from '@/assets/img/1.png'
import {max} from "lodash";


const wrapper = ref<HTMLDivElement>()
const box = ref<HTMLDivElement>()
const size = ref<number>(50)


onMounted(() => {
  wrapper.value.addEventListener('scroll', (event) => {
    const {srcElement} = event
    const scrollTop = (srcElement as HTMLDivElement).scrollTop

    size.value = max([scrollTop / 2, 50])
  })

})


</script>

<style lang="less" scoped>

.wrapper {
  height           : 1200px;
  background-color : #00000080;
  overflow         : auto;
  position         : relative;

  .place-holder {
    height           : 2400px;
    width            : 1px;
    background-color : red;
  }

  .box {
    background-color : #a46565;
    border-radius    : 1px;

    position         : fixed;
    top              : 50%;
    left             : 50%;
    transform        : translate(-50%, -50%)
  }
}

</style>

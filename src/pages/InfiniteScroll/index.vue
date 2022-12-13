<template>

  <section ref="wrapper" class="w-96 h-5/6 bg-gray-300 rounded shadow overflow-auto p-4" @scroll="loadMore">

    <section
        v-for="item in data"
        :key="item"
        class="w-full h-20 bg-gray-400 rounded mb-4 shadow-2xl flex items-center justify-center">
      {{ item.name }}
    </section>

  </section>


</template>

<script lang="ts" setup>

import {ref} from "vue";
import {debounce, lte} from "lodash";
import * as _Mock from 'mockjs'

const wrapper = ref<HTMLElement>(null)

const data = ref<{ name: string }[]>([])

for (let i = 0; i < 20; i++) {
  data.value.push({name: _Mock.Random.name()})
}

const loadMore = debounce((event: Event) => {
  const {scrollHeight, scrollTop, clientHeight} = wrapper.value

  const scrollBottom = scrollHeight - scrollTop - clientHeight
  if (lte(scrollBottom, 40) && lte(data.value.length, 200)) {
    for (let i = 0; i < 10; i++) {
      data.value.push({name: _Mock.Random.name()})
    }
  }
}, 1000 / 60)


</script>




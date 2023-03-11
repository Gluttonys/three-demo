<template>

  <p>{{ num }}</p>

</template>

<script lang="ts" setup>/** 缓动函数 */

import {ref} from "vue";

function easeOutCubic(x: number): number {
  return 1 - Math.pow(1 - x, 3);
}

function easeOutQuart(x: number): number {
  return 1 - Math.pow(1 - x, 4);
}

function easeOutBack(x: number): number {
  const c1 = 1.70158;
  const c3 = c1 + 1;

  return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
}

type Props = {
  begin: number
  end: number
}

const props = withDefaults(defineProps<Props>(), {
  begin: 0,
  end: 10
})

/* 动画总共执行时间  2s */
const allTime = 2000

const num = ref<number>(0)

const easeOutTimerList = []

/** 执行粒度 */
const granularity = 1

/* 启动函数 */
const start = () => {
  let {begin, end} = props
  num.value = begin
  const range = end - begin
  const singleValue = 1 / range

  for (let i = 0; i < range; i++) {
    easeOutTimerList[i] = singleValue * i
  }

  easeOutTimerList.reduce(async (pre, cur, index) => {
    let value = await pre

    return new Promise(resolve => {
      const timer = setTimeout(() => {
        num.value = value + 1
        resolve(num.value)
        clearTimeout(timer)
      }, easeOutBack(cur) * 150)
    })
  }, Promise.resolve(begin))
}


start()

</script>

<style lang="less" scoped>

</style>

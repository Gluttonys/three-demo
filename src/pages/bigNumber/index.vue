<template>

  <link-block :links="links"></link-block>

  <section class="shadow p-4 m-4 flex items-center">
    {{ Number.MAX_SAFE_INTEGER }}
    {{ Number.MIN_SAFE_INTEGER }}
  </section>

  <section class="shadow p-4 m-4 flex items-center">
    <a-button class="mr-6">+0.00000001</a-button>
    {{ bigNumber }}
  </section>


  <section class="shadow p-4 m-4 flex items-center">
    <a-button class="mr-6" @click="toAdd">+0.00000001</a-button>
    {{ otherBigNumber }}
  </section>

</template>

<script lang="ts" setup>
import {ref} from "vue";
import BigNumber from "bignumber.js";

import LinkBlock from '@/components/LinkBlock/index.vue'

const links: Base.Link[] = [
  {
    title: "github",
    link: "https://mikemcl.github.io/bignumber.js"
  }
]


const bigNumber = ref<number>(10000000000000000000000100000)

const otherBigNumber = ref<BigNumber>(new BigNumber(10000000000000000000000100000))

console.log(bigNumber.value, otherBigNumber.value.toString())

console.log(Number.MAX_SAFE_INTEGER.toString().length, Number.MIN_SAFE_INTEGER)

const toAdd = () => {
  otherBigNumber.value.plus(new BigNumber(0.000000001))
  console.log(otherBigNumber.value.toString())
}


</script>

<style scoped>

</style>

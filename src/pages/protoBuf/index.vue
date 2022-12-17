<template>
  <link-block :links="links"></link-block>

</template>

<script lang="ts" setup>
import LinkBlock from '@/components/LinkBlock/index.vue'

/**
 * @file protobufJS 实践练习
 *
 * @link https://github.com/protobufjs/protobuf.js
 * @link https://protobufjs.github.io/protobuf.js/
 * @link https://www.npmjs.com/package/protobufjs
 */

const links: Base.Link[] = [
  {
    title: "github",
    link: "https://github.com/protobufjs/protobuf.js"
  },
  {
    title: "MDN文档",
    link: "https://protobufjs.github.io/protobuf.js/"
  },
  {
    title: "npm",
    link: "https://www.npmjs.com/package/protobufjs"
  },
]


</script>


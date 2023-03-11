<template>
  <link-block :links="links"></link-block>
</template>

<script lang="ts" setup>
import LinkBlock from '@/components/LinkBlock/index.vue'
import budDataProto from '@/proto/proto.js'

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
  {
    title: "pfb loader",
    link: "https://www.npmjs.com/package/@grpc/proto-loader"
  },
  {
    title: "简书",
    link: "https://www.jianshu.com/p/da48fb06b29f"
  },
  {
    title: "教程",
    link: "https://www.cnblogs.com/qianxiaox/p/14019522.html"
  }
]


/* 初始化 protobuf */
const initPb = async () => {
  console.log(budDataProto)
  const req = budDataProto.lookup('SomeMessage')
  console.log(req)

  // const message = budDataProto.lookupType("SomeMessage")
  // console.log(message.toString())
}


initPb()


</script>


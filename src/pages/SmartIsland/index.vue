<template>
  <main class="w-full h-full p-4 bg-gray-200 flex">
    <section class="phone relative bg-gray-400 shadow rounded overflow-hidden">
      <Tip ref="smartIsland"/>
    </section>

    <section class="ml-12">
      <a-button @click="sendMessageDouyin">发送抖音消息</a-button>
      <br>
      <a-button @click="sendMessageText">发送一般消息</a-button>
      <br>
      <a-button @click="sendMessageCSS01">发送css01消息</a-button>
      <br>
      <a-button @click="sendMessageCSS02">发送css02消息</a-button>
      <br>
      <br>
      <a-button @click="closeMessage">关闭消息</a-button>
    </section>

  </main>
</template>

<script lang="ts" setup>
import Tip from './component/Tip/index.vue'
import Douyin from '@/pages/Douyin/index.vue'
import Test01 from './testComp/test01.vue'
import CSS01 from '@/pages/CSSClip/index.vue'
import CSS02 from '@/pages/CSSAspectRatio/index.vue'


import {ref} from "vue";


/* 这种东西建议开发放在全局中 */
const smartIsland = ref<InstanceType<typeof Tip>>()


const sendMessageDouyin = () => {
  smartIsland.value.sendMessage({
    width: 95,
    height: 70,
    timeStamp: new Date().getTime(),
    component: Douyin,
    showTime: true
  })
}

const sendMessageText = () => {
  smartIsland.value.sendMessage({
    width: 90,
    height: 12,
    timeStamp: new Date().getTime(),
    component: Test01,
    showTime: false
  })
}

const sendMessageCSS01 = () => {
  smartIsland.value.sendMessage({
    width: 80,
    height: 40,
    timeStamp: new Date().getTime(),
    component: CSS01,
    showTime: true
  })
}

const sendMessageCSS02 = () => {
  smartIsland.value.sendMessage({
    width: 70,
    height: 50,
    timeStamp: new Date().getTime(),
    component: CSS02,
    showTime: false
  })
}

const closeMessage = () => {
  smartIsland.value.closeMessage()
}


</script>

<style lang="less" scoped>
.phone {
  width  : 360px;
  height : 740px
}


</style>

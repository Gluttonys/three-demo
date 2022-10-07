<template>
  <header :style="tipStyle" class="tip">
    <span v-if="message.showTime">{{ curTime }}</span>

    <template v-if="message.component">
      <LegalComponent/>
    </template>
  </header>
</template>

<script lang="ts" setup>
import {Component, computed, ref, shallowRef} from "vue";
import * as dayjs from "dayjs";

const curTime = ref(dayjs().format("YY M D H : m : ss"))
setInterval(() => curTime.value = dayjs().format("YY M D H : m : ss"), 1_000)

type IslandMessage = {
  width: number,
  height: number,

  timeStamp: number,
  showTime: boolean,
  component: Component,
}

const message = shallowRef<IslandMessage>({
  width: 45,
  height: 3.8,
  timeStamp: 0,
  showTime: true,
  component: null
})

const LegalComponent = computed(() => message.value.component)
const tipStyle = computed((): Partial<CSSStyleDeclaration> => {
  if (message.value.width > 100 || message.value.height > 100) {
    throw new Error("元素宽高不能超过100")
  }

  return {
    width: `${message.value.width * 3.6}px`,
    height: `${message.value.height * 7.4}px`,
  }
})


const sendMessage = (msg: IslandMessage) => message.value = msg

const closeMessage = () => {
  message.value = {
    width: 45,
    height: 3.8,
    timeStamp: 0,
    showTime: true,
    component: null
  }
}


defineExpose({
  sendMessage,
  closeMessage
})

</script>

<style lang="css" scoped>

.tip {
  position                   : absolute;
  top                        : 10px;
  left                       : 10px;

  display                    : inline-block;
  padding-left               : 1em;
  padding-right              : 1em;
  border-radius              : 1em;
  background-color           : rgba(0, 0, 0, .5);
  color                      : aliceblue;

  line-height                : 2em;
  overflow                   : auto;
  overflow-x                 : hidden;

  transition-property        : width, height;
  transition-duration        : .1s, .2s;
  transition-delay           : 0s, .1s;
  transition-timing-function : ease-in-out;
}


::-webkit-scrollbar {
  width            : 5px;
  background-color : #F5F5F5;
}


::-webkit-scrollbar-thumb {
  width            : 5px;
  background-color : #CBCBCB;
  border-radius    : 10px;
  box-shadow       : inset 0 0 6px rgba(0, 0, 0, .3);
}

/* 滚动条轨道 */
::-webkit-scrollbar-track {
  box-shadow       : inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius    : 10px;
  background-color : #ebe9e9;
}

</style>

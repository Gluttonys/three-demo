<template>
  <link-block :links="links" titleName="dialog"></link-block>

  <dialog ref="dialogDomRef" class="bg-gray-100 transition w-96 text-justify rounded shadow-xl mt-24 dialog">
    <h1>hello world</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, dicta distinctio eaque eos excepturi in
      ipsa ipsam nesciunt odio omnis perferendis possimus quam quas quis ratione repellendus saepe tempore veniam?
    </p>

    <textarea class="w-full h-60">
      <form class="text-right mr-4" method="dialog">
        <button class="shadow rounded px-4 py-1 hover:bg-gray-400 transition">关闭</button>
      </form>

      <a-button @click="closeDialog">关闭</a-button>
    </textarea>


    <footer class="flex items-center justify-end">
      <form class="text-right mr-4" method="dialog">
        <button class="shadow rounded px-4 py-1 hover:bg-gray-400 transition">关闭</button>
      </form>

      <a-button @click="closeDialog">关闭</a-button>
    </footer>
  </dialog>

  <section class="flex items-center mt-4">
    <a-button @click="openDialog">打开dialog</a-button>
    <a-button @click="closeDialog">关闭dialog</a-button>
  </section>

</template>

<script lang="ts" setup>

import {ref} from "vue";

import LinkBlock from '@/components/LinkBlock/index.vue'


const links: Base.Link[] = [
  {
    title: "MDN 文档",
    link: "https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dialog"
  }
]


const dialogDomRef = ref<HTMLDialogElement>(null)

const openDialog = () => {
  // dialogDomRef.value.show()
  dialogDomRef.value.showModal()
}

const closeDialog = () => {
  if (!dialogDomRef.value.open) return alert("已经是关闭状态了， 不需要再关闭了")

  dialogDomRef.value.close()
}

</script>

<style lang="less" scoped>

.dialog {

  &::backdrop {
    backdrop-filter  : blur(4px);
    background-color : rgba(0, 0, 0, .3);
  }

}
</style>


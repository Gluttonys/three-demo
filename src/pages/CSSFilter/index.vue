<template>

  <link-block :links="links" titleName="CSS : filter 属性"></link-block>

  <section class="mb-4" style="height: 80vh;overflow: auto">
    <div v-for="item in protoList" class="box border p-4 shadow">
      <h2 class="font-bold text-xl">{{ item.value }}</h2>
      <h3>{{ item.desc }}</h3>

      <section v-if="item.unit==='native'" class="grid grid-cols-12 gap-4">
        <div class="box">
          <img :src="image" :style="{filter: 'none'}" alt="" class="w-60">
          <p class="text-center font-bold text-xl">none</p>
        </div>
      </section>

      <section v-if="item.unit==='px'" class="grid grid-cols-12 gap-4">

        <div v-for="i in pxList" class="box">
          <img :src="image" :style="{filter: `${item.value}(${i}px)`}" alt="" class="w-60">
          <p class="text-center font-bold text-xl">{{ `${item.value}(${i}px)` }}</p>
        </div>

      </section>


      <section v-if="item.unit==='%'" class="grid grid-cols-12 gap-4">

        <div v-for="i in percentageList" class="box">
          <img :src="image" :style="{filter: `${item.value}(${i}%)`}" alt="" class="w-60">
          <p class="text-center font-bold text-xl">{{ `${item.value}(${i}%)` }}</p>
        </div>

      </section>

      <section v-if="item.unit==='deg'" class="grid grid-cols-12 gap-4">

        <div v-for="i in degList" class="box">
          <img :src="image" :style="{filter: `${item.value}(${i}deg)`}" alt="" class="w-60">
          <p class="text-center font-bold text-xl">{{ `${item.value}(${i}deg)` }}</p>
        </div>

      </section>

      <section v-if="item.unit==='num'" class="grid grid-cols-12 gap-4">

        <div v-for="i in numList" class="box">
          <img :src="image" :style="{filter: `${item.value}(${i})`}" alt="" class="w-60">
          <p class="text-center font-bold text-xl">{{ `${item.value}(${i})` }}</p>
        </div>

      </section>

      <section v-if="item.unit==='list'" class="grid grid-cols-12 gap-4">

        <div v-for="i in item.child" class="box">
          <img :src="image" :style="{filter: `${item.value}${i}`}" alt="" class="w-60">
          <p class="text-center font-bold text-xl">{{ `${item.value}${i}` }}</p>
        </div>

      </section>

    </div>
  </section>


</template>

<script lang="ts" setup>
import LinkBlock from '@/components/LinkBlock/index.vue'
import image from '@/assets/img/me.jpeg'

const links: Base.Link[] = [
  {
    title: "MDN",
    link: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter"
  }
]

const pxList = []
const percentageList = []
const degList = []
const numList = []

const initList = () => {

  for (let i = 0; i < 21; i++) {
    percentageList.push(i * 10)
    numList.push(i / 10)
    pxList.push(i)
  }

  for (let i = 0; i < 37; i++) {
    degList.push(i * 10)
  }
}

initList()


const protoList = [
  {value: 'none', desc: '无效果 原图', unit: 'native'},
  {value: 'blur', desc: '高斯模糊', unit: 'px'},
  {value: 'contrast', desc: '对比度', unit: '%'},
  {value: 'grayscale', desc: '灰度', unit: '%'},
  {value: 'hue-rotate', desc: '色相旋转', unit: 'deg'},
  {
    value: 'drop-shadow', desc: '图像阴影', unit: 'list', child: [
      '(1px 1px 1px black)',
      '(4px 4px 4px black)',
      '(8px 8px 10px black)',
      '(16px 16px 20px black)',
      '(16px 16px 20px red)',
    ]
  },
  {value: 'invert', desc: '颜色反转', unit: '%'},
  {value: 'opacity', desc: '透明度', unit: '%'},
  {value: 'saturate', desc: '饱和度', unit: '%'},
  {value: 'sepia', desc: '图像转换为深褐色', unit: '%'},
  {value: 'brightness', desc: '光照度变化', unit: 'num'},
]

</script>

<style scoped>

img {
  -webkit-user-drag : none;
}


</style>

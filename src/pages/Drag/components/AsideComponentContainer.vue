<template>
  <aside class="aside-component-container">
    <div class="component-item" v-for="item in imageList">
      <img :src="item.url" :alt="item.url" :title="item.url">

      <div
          @drag="imageDrag"
          @dragstart="imageDragStart($event, item)"
          @dragend="imageDragEnd"
          draggable="true"
          class="mask"></div>
    </div>
  </aside>
</template>

<script lang="ts" setup>

import MockImgUtil from "@/utils/MockImgUtil";
import useDragData from "@/pages/Drag/useDragData";

const imageList = [
  {url: MockImgUtil.getMockImgUrl({width: 150,height: 150, seed: '1'}), id: 1},
  {url: MockImgUtil.getMockImgUrl({width: 150,height: 150, seed: '2'}), id: 2},
  {url: MockImgUtil.getMockImgUrl({width: 150,height: 150, seed: '3'}), id: 3},
  {url: MockImgUtil.getMockImgUrl({width: 150,height: 150, seed: '4'}), id: 4},
  {url: MockImgUtil.getMockImgUrl({width: 150,height: 150, seed: '5'}), id: 5},
  {url: MockImgUtil.getMockImgUrl({width: 150,height: 150, seed: '6'}), id: 6},
]


const imageDrag = (event: DragEvent) => {
  console.log(event.type)
}

const imageDragStart = (event: DragEvent, data: {url: string, id: number}) => {
  const target = event.target as HTMLImageElement
  const dragData = useDragData();
  dragData.curElementId = data.id;

  target.classList.add('sepia')
}

const imageDragEnd = (event: DragEvent) => {
  const target = event.target as HTMLImageElement

  const dragData = useDragData();
  dragData.curElementId = null

  target.classList.remove('sepia')
}


</script>

<style lang="less" scoped>

.aside-component-container {
  width: 320px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, .5);

  .component-item {
    width: 150px;
    height: 150px;

    position: relative;

    img {
      object-fit: cover;
    }

    .mask {
      position: absolute;
      top:0;
      left: 0;
      width: 150px;
      height: 150px;
    }
  }


}


</style>

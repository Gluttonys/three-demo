<template>
  <section id="map-container"></section>
  <button @click="btnClick">添加marker</button>
</template>


<script lang="ts" setup>
import {load} from '@amap/amap-jsapi-loader'
import {onMounted, onUnmounted, ref} from "vue";
import MapQueue, {CallbackFun} from "./utils/mapQueue";

const AMap = ref(null)

/**
 * 添加一个标记
 * @param map
 * @param AMapObject
 */
const addOneMarker: CallbackFun = (map, AMapObject) => {
  map.add(new AMapObject.Marker({
    position: new AMapObject.LngLat(115.3195, 32.562106)
  }))
}


/**
 * @desc 初始化地图
 */
const initMap = () => {
  const position = [115.3195, 32.562106]

  load({
    key: '989fa3bf9c5d59c66786aa1350f2d74c',
    version: '2.0',
    plugins: ['AMap.Scale', 'AMap.ToolBar']
  }).then((MapObject) => {
    const {Map, Marker, LngLat} = MapObject
    AMap.value = new Map('map-container', {
      viewMode: "3D",    //是否为3D地图模式
      zoom: 5,           //初始化地图级别
      pitch: 0,
      center: position, //初始化地图中心点位置
    })

    window.queue = new MapQueue(AMap.value, MapObject)

    // 地图模块加载完成后触发
    AMap.value.on('complete', () => {
      console.log("地图资源加载完成")
    })
  }).catch(console.error)
}

const btnClick = () => {
  window.queue.register(addOneMarker)
  window.queue.run()
}


onMounted(initMap)
onUnmounted(() => AMap.value.destroy())

</script>


<style lang="css" scoped>

#map-container {
  width: 100vw;
  height: 100vh;
}

</style>

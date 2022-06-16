<template>

</template>

<script lang="ts" setup>

import {BoxGeometry, Mesh, MeshBasicMaterial} from 'three'
import ThreedObj from "../utils/threedObj";

const threeDObj = new ThreedObj()


const getBox = (): Mesh => {
  const geometry = new BoxGeometry()
  const material = new MeshBasicMaterial({color: '#d61515'})
  return new Mesh(geometry, material)
}


threeDObj.add(getBox())
threeDObj.setLight()
threeDObj.toRender()

</script>

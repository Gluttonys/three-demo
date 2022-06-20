<template>

</template>

<script lang="ts" setup>

import {BoxGeometry, Group, Mesh, MeshBasicMaterial} from 'three'
import ThreedObj from "../utils/threedObj";

const threeDObj = new ThreedObj()

let initPosition = 0

const getBoxMesh = (): Mesh => {
  const geometry = new BoxGeometry(50, 200, 100)
  const material = new MeshBasicMaterial({
    color: '#15c6d6',
    transparent: true,
    opacity: 0.6
  })
  const mesh = new Mesh(geometry, material)
  mesh.position.set(initPosition, 100, 50)
  return mesh
}

const boxMeshFactory = (groupName?: string): Group => {
  const group = new Group()
  group.name = groupName || "分组-" + group.uuid

  for (let i = 0; i < 50; i++) {
    const tempBoxMesh = getBoxMesh().clone(false)
    tempBoxMesh.position.set(initPosition += 150, 100, 50)
    group.add(tempBoxMesh)
  }

  return group
}


threeDObj.add(boxMeshFactory())
threeDObj.toRender()


</script>

<template>
  <section id="three-container" ref="threeContainer"/>
</template>

<script lang="ts" setup>
import use3D from "./hooks/use3D";
import {onMounted, ref} from "vue";
import {
  BoxGeometry,
  CameraHelper,
  CircleGeometry,
  DoubleSide,
  Mesh,
  MeshBasicMaterial,
  MeshPhongMaterial,
  PlaneGeometry
} from "three";
import {useDirectionalLight, useScene} from "../../hooks/threeD";

const threeContainer = ref<HTMLDivElement>(null)
onMounted(() => use3D(threeContainer.value))

// 具体业务
const getGround = () => {
  const ground = new PlaneGeometry(1000, 1000)
  const groundMesh = new MeshBasicMaterial({color: '#5c5c5c'})
  const mesh = new Mesh(ground, groundMesh)

  ground.rotateX(Math.PI * -0.5)
  groundMesh.side = DoubleSide
  mesh.castShadow = false
  mesh.receiveShadow = true
  return mesh
}

const getBox = () => {
  const geoBox = new BoxGeometry(100, 100, 100)
  const boxMaterial = new MeshPhongMaterial({
    color: '#6a88ab',
    shininess: 100,
    side: DoubleSide,
    clipShadows: true
  })
  const mesh = new Mesh(geoBox, boxMaterial)

  mesh.castShadow = true
  mesh.receiveShadow = false
  mesh.position.set(100, 50, 100)
  return mesh
}

const getCircle = () => {
  const geometry = new CircleGeometry(100, 32, 0, Math.PI);
  const material = new MeshBasicMaterial({
    color: '#ffff00',
    side: DoubleSide
  });
  const mesh = new Mesh(geometry, material);
  mesh.position.set(-200, 200, 200)

  return mesh
}

onMounted(() => {
  const scene = useScene()
  const [dirLight] = useDirectionalLight()
  const cameraHelper = new CameraHelper(dirLight.shadow.camera)

  scene.add(
      cameraHelper,
      getBox(),
      getCircle(),
      getGround(),
  )
})


</script>

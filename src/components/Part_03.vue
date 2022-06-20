<template>

</template>

<script lang="ts" setup>

import {ref} from "vue";
import {AmbientLight, Camera, Color, DirectionalLight, Fog, PerspectiveCamera, Scene, WebGLRenderer} from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

const {innerWidth: width, innerHeight: height, devicePixelRatio} = window

const renderer = ref<WebGLRenderer>(null)
const camera = ref<Camera>(null)
const scene = ref<Scene>(null)
const controls = ref<OrbitControls>(null)

// 初始化渲染器
const initRenderer = () => {
  renderer.value = new WebGLRenderer({antialias: true, alpha: true})
  renderer.value.setPixelRatio(devicePixelRatio)
  renderer.value.setSize(width, height)
  document.body.append(renderer.value.domElement)
}

const initCamera = () => {
  camera.value = new PerspectiveCamera(45, width / height, 0.1, 10_000)
  camera.value.position.set(200, 200, 200)
  camera.value.lookAt(0, 0, 0)
}


const initScene = () => {
  scene.value = new Scene()
  scene.value.background = new Color(0x020924)
  scene.value.fog = new Fog(0x020924, 200, 1000);
}

const initControls = () => {
  controls.value = new OrbitControls(camera.value, renderer.value.domElement)
  controls.value.enableDamping = true
  controls.value.enableZoom = true
  controls.value.enablePan = true
  controls.value.autoRotate = false
  controls.value.autoRotateSpeed = 2
}

const initLight = () => {
  const ambientLight = new AmbientLight(0xcccccc, 1.1)
  scene.value.add(ambientLight)
  const directionalLight = new DirectionalLight(0xffffff, 0.2)
  directionalLight.position.set(1, 0.1, 0).normalize()
}


// function initLight() {
//   const ambientLight = new THREE.AmbientLight( 0xcccccc, 1.1 );
//   scene.add( ambientLight );
//   var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.2 );
//   directionalLight.position.set( 1, 0.1, 0 ).normalize();
//   var directionalLight2 = new THREE.DirectionalLight( 0xff2ffff, 0.2 );
//   directionalLight2.position.set( 1, 0.1, 0.1 ).normalize();
//   scene.add( directionalLight );
//   scene.add( directionalLight2 );
//   var hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444, 0.2 );
//   hemiLight.position.set( 0, 1, 0 );
//   scene.add( hemiLight );
//   var directionalLight = new THREE.DirectionalLight( 0xffffff );
//   directionalLight.position.set( 1, 500, - 20 );
//   directionalLight.castShadow = true;
//   directionalLight.shadow.camera.top = 18;
//   directionalLight.shadow.camera.bottom = - 10;
//   directionalLight.shadow.camera.left = - 52;
//   directionalLight.shadow.camera.right = 12;
//   scene.add(directionalLight);
// }
</script>

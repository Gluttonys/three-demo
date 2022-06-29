<template>
  <section id="three-container" ref="threeContainer"/>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {
  useAmbientLight,
  useBaseRender,
  useDirectionalLight,
  useOrbitControls,
  usePerspectiveCamera,
  useScene
} from '../../hooks/threeD/index'

// 3D 场景 dom 引用对象
const threeContainer = ref<HTMLDivElement>(null)

const scene = useScene()
const baseRender = useBaseRender()

const cameraPosition: [number, number, number] = [100, 100, 100]
const camera = usePerspectiveCamera()
camera.position.set(...cameraPosition)
camera.lookAt(scene.position)

const [_, directionLightHelper] = useDirectionalLight()
const ambientLight = useAmbientLight()
const orbitControls = useOrbitControls(camera, baseRender.domElement)

/**
 * 整合所有3D相关元素
 */
const integrate = () => {
  /** 添加光源 */
  scene.add(ambientLight, directionLightHelper)
  threeContainer.value.appendChild(baseRender.domElement)

  window.addEventListener('resize', () => {
    const {innerWidth, innerHeight} = window
    camera.aspect = innerWidth / innerHeight
    camera.updateProjectionMatrix()
    baseRender.setSize(innerWidth, innerHeight)
  })

  animate()
}


const animate = () => {
  requestAnimationFrame(animate)

  orbitControls.update()
  baseRender.render(scene, camera)
}


onMounted(integrate)

</script>

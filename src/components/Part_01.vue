<template>

</template>

<script lang="ts" setup>
// import * as THREE from 'three'
import {
  AmbientLight,
  BoxGeometry,
  Camera,
  Mesh,
  MeshLambertMaterial,
  OrthographicCamera,
  PointLight,
  Renderer,
  Scene,
  WebGLRenderer
} from "three";
import {onMounted} from "vue";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";


/**
 * 创建场景对象Scene ， 类似地图环境
 */
const scene = new Scene();

/**
 * @desc 创建一个几何体。 创建网格模型
 */
// const geometry = new SphereGeometry(60, 40, 40); //创建一个球体几何对象
const geometry = new BoxGeometry(200, 100, 100); //创建一个立方体几何对象Geometry
/**
 * @desc 创建一个材质
 * @desc 材质对象Material
 */
const material = new MeshLambertMaterial({
  color: 0x0000ff
});

/**
 * @desc 网格模型对象
 */
const mesh = new Mesh(geometry, material); //网格模型对象Mesh

/**
 * @desc 网格模型添加到场景中
 */
scene.add(mesh);


/**
 * @desc 光源设置
 */
//点光源
const point = new PointLight("#ffffff");
point.position.set(400, 700, 300); //点光源位置
scene.add(point); //点光源添加到场景中
//环境光
const ambient = new AmbientLight("#3b3b3b");
scene.add(ambient);


/**
 * 相机设置
 */
const {innerWidth: width, innerHeight: height} = window

const k = width / height; //窗口宽高比
const s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
//创建相机对象
const camera = new OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
camera.position.set(200, 300, 200); //设置相机位置
camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
/**
 * 创建渲染器对象
 */
const renderer = new WebGLRenderer();
renderer.setSize(width, height);//设置渲染区域尺寸
renderer.setClearColor("#000000", 1); //设置背景颜色


onMounted(() => {
  document.body.appendChild(renderer.domElement); //body元素中插入canvas对象
  //执行渲染操作   指定场景、相机作为参数
  renderer.render(scene, camera);
})

/**
 * @desc 快捷添加控制器
 * @param camera 相机对象
 * @param renderer 渲染对象
 */
const addControls = (camera: Camera, renderer: Renderer) => {
  const controls = new OrbitControls(camera, renderer.domElement);

  controls.addEventListener('change', () => renderer.render(scene, camera))
}

addControls(camera, renderer)

</script>

<style scoped>

</style>

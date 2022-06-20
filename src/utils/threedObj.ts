import {
  AmbientLight,
  AxesHelper,
  Camera,
  DirectionalLight,
  DirectionalLightHelper,
  Object3D,
  PerspectiveCamera,
  Scene,
  SpotLight,
  WebGLRenderer
} from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

const {innerHeight: height, innerWidth: width} = window

enum BASIC_VALUE {
  black = '#000000',
  white = '#ffffff',
  ambientLight = '#ffffff'
}


/**
 * @desc 3D 模型工具类
 */
class ThreedObj {

  scene: Scene = new Scene()
  camera: Camera = new PerspectiveCamera(40, width / height, 0.1, 10_000)
  render: WebGLRenderer = new WebGLRenderer()

  ambientLight: AmbientLight = new AmbientLight(BASIC_VALUE.ambientLight, 1)
  directionalLight: DirectionalLight = new DirectionalLight(BASIC_VALUE.ambientLight, 1)
  spotLight: SpotLight = new SpotLight(BASIC_VALUE.ambientLight, 0.9)

  constructor() {
    this.init()
  }

  init() {
    this.setAxes()
    this.setLight()
    this.setCamera()
    this.addControls()
  }

  setAxes() {
    this.scene.add(new AxesHelper(1_000))
  }

  setCamera() {
    this.scene.add(this.camera)
    this.camera.position.set(500, 500, 500)
    this.camera.lookAt(this.scene.position)
  }

  setLight(): void {
    this.directionalLight.position.set(50, 250, 200)
    this.spotLight.position.set(100, 250, 200)

    const helper = new DirectionalLightHelper(this.directionalLight)
    // this.scene.add(helper, this.directionalLight, this.spotLight, this.ambientLight)
    this.scene.add(this.directionalLight)
  }

  addControls(): void {
    const controls = new OrbitControls(this.camera, this.render.domElement)
    controls.addEventListener('change', () => this.render.render(this.scene, this.camera))
  }

  add(...object: Object3D[]): Scene {
    return this.scene.add(...object)
  }

  getScene(): Scene {
    return this.scene
  }

  toRender(): void {
    this.render.setSize(width, height)
    this.render.setClearColor(BASIC_VALUE.black, 1)
    this.render.render(this.scene, this.camera)
    document.body.append(this.render.domElement)
  }
}


export default ThreedObj

import {AmbientLight, AxesHelper, Camera, Object3D, PerspectiveCamera, Scene, WebGLRenderer} from "three";

const {innerHeight: height, innerWidth: width} = window

class ThreedObj {

  scene: Scene = new Scene()
  camera: Camera = new PerspectiveCamera(45, width / height, 0.1, 1_000)
  render: WebGLRenderer = new WebGLRenderer()
  ambient: AmbientLight = new AmbientLight(0xffffff)

  constructor() {
    this.setAxes()
  }

  setAxes() {
    this.scene.add(new AxesHelper(1_000))
  }

  toRender(): void {
    this.render.setSize(width, height, true)
    this.scene.add(this.camera)
    this.render.render(this.scene, this.camera)
    document.body.append(this.render.domElement)
  }
  
  setLight(): void {
    this.scene.add(this.ambient)
  }

  getScene(): Scene {
    return this.scene
  }

  add(...object: Object3D[]): Scene {
    return this.scene.add(...object)
  }
}


export default ThreedObj

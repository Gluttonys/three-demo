import {
  AmbientLight,
  AxesHelper,
  DirectionalLight,
  DirectionalLightHelper,
  PCFSoftShadowMap,
  PerspectiveCamera,
  PointLight,
  Scene,
  SpotLight,
  WebGLRenderer
} from "three";
import {CSS2DRenderer} from "three/examples/jsm/renderers/CSS2DRenderer";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {DragControls} from "three/examples/jsm/controls/DragControls";
import {noop} from "lodash"

class Init3D {

  width = window.innerWidth
  height = window.innerHeight

  scene: Scene = new Scene()
  axes: AxesHelper = new AxesHelper(1000)
  baseRenderer: WebGLRenderer = new WebGLRenderer({antialias: true})
  css2DRenderer: CSS2DRenderer = new CSS2DRenderer()
  // gridHelper: GridHelper = new GridHelper(GRID_WIDTH, GRID_DIVISIONS, 'red')
  baseCamera: PerspectiveCamera = new PerspectiveCamera(70, this.width / this.height, 0.1, 5000)

  // 控制器
  orbitControls: OrbitControls
  dragControls: DragControls

  // 灯光
  ambientLight: AmbientLight = new AmbientLight('#ffffff', 1)
  directionalLight: DirectionalLight = new DirectionalLight(0xffffff, 0.5)
  directionalLightHelper: DirectionalLightHelper
  pointLight: PointLight = new PointLight("#ffffff", 0.5, 1000)
  spotLight: SpotLight = new SpotLight("#ffffff", 0.8)

  // 3D dom 容器
  containerDom: HTMLElement


  /** 是否开启组拖拽 */
  isDragGroup: boolean = true
  _raf_value: number

  constructor(domElement: HTMLElement, isDragGroup: boolean = true) {
    this.containerDom = domElement
    this.isDragGroup = isDragGroup

    this.initAxes()
    this.initBaseRender()
    this.initRender()
    this.initBaseCamera()
    this.initLight()
    this.initOrbitControls()
    this.initEvent()
  }

  /** 销毁整个对象 */
  destroy() {
    window.removeEventListener('resize', this.atWindowResize)

    this.axes.dispose()

    this.orbitControls.dispose()
    this.dragControls.dispose()

    this.ambientLight.dispose()
    this.directionalLight.dispose()
    this.directionalLightHelper.dispose()

    cancelAnimationFrame(this._raf_value)
    this.baseRenderer.dispose()
    this.baseRenderer.forceContextLoss()
    this.baseRenderer.context = null
    this.baseRenderer.domElement = null
    this.baseRenderer = null

    this.scene.remove(...this.scene.children)
    this.scene.clear()
  }

  /** 初始化坐标轴 */
  initAxes() {
    // this.scene.add(this.axes)
    this.scene.position.set(0, 0, 0)
  }

  /** 初始化 基础 render */
  initBaseRender() {
    this.baseRenderer.setPixelRatio(window.devicePixelRatio)
    this.baseRenderer.setSize(this.width, this.height)
    this.baseRenderer.setClearColor('rgb(209,209,209)', 1)

    /* 预加载渲染 */
    this.baseRenderer.compile(this.scene, this.baseCamera)

    this.baseRenderer.shadowMap.enabled = true
    this.baseRenderer.shadowMap.type = PCFSoftShadowMap
  }

  /** 初始化(2D / webGL)渲染器 */
  initRender() {
    this.css2DRenderer.domElement.style.position = "absolute"
    this.css2DRenderer.domElement.style.zIndex = "5"
    this.css2DRenderer.domElement.style.top = "0"

    this.css2DRenderer.setSize(this.width, this.height)

    this.containerDom.appendChild(this.baseRenderer.domElement)
    this.containerDom.appendChild(this.css2DRenderer.domElement)
  }

  /** 初始化摄像头 */
  initBaseCamera() {
    this.baseCamera.lookAt(this.scene.position)
  }

  /** 初始化灯光 */
  initLight() {
    // this.directionalLight.name = ObjectName.DIR_LIGHT

    this.directionalLight.position.set(2000, 2500, 1000)
    this.directionalLight.castShadow = true

    this.directionalLight.shadow.camera.zoom = 0.2
    this.directionalLight.shadow.camera.near = 10
    this.directionalLight.shadow.camera.far = 6000

    this.directionalLight.shadow.camera.right = 500;
    this.directionalLight.shadow.camera.left = -500;
    this.directionalLight.shadow.camera.top = 500;
    this.directionalLight.shadow.camera.bottom = -500;

    this.directionalLight.shadow.mapSize.width = 1024;
    this.directionalLight.shadow.mapSize.height = 1024;

    this.directionalLightHelper = new DirectionalLightHelper(this.directionalLight, 5, '#d93333')
    // this.directionalLightHelper.name = ObjectName.DIR_LIGHT_HELPER

    this.pointLight.position.set(0, 1000, 0)
    this.pointLight.visible = true

    this.pointLight.lookAt(0, 0, 0)
    this.pointLight.castShadow = true

    this.pointLight.shadow.bias = 0.001

    this.pointLight.shadow.camera.zoom = 1
    this.pointLight.shadow.camera.near = 0.5;
    this.pointLight.shadow.camera.far = 500;

    this.pointLight.shadow.mapSize.width = 1014;
    this.pointLight.shadow.mapSize.height = 1014;

    this.spotLight.castShadow = true
    this.spotLight.position.set(1500, 4000, 1500)
    this.spotLight.shadow.camera.far = 5000


    this.scene.add(
      this.ambientLight,
      // this.directionalLight,
      // this.spotLight,
      // new CameraHelper(this.directionalLight.shadow.camera),
      // new CameraHelper(this.spotLight.shadow.camera),
    )
  }

  /** 初始化控制器 */
  initOrbitControls() {
    this.orbitControls = new OrbitControls(this.baseCamera, this.containerDom)
    this.orbitControls.listenToKeyEvents(window)
  }


  atWindowResize = () => {
    const {innerWidth, innerHeight} = window
    this.width = innerWidth
    this.height = innerHeight
    this.baseCamera.aspect = (this.width / this.height)
    this.baseCamera.updateProjectionMatrix()
    this.baseRenderer.setSize(this.width, this.height)
  }

  /** 初始化监听事件 */
  initEvent() {
    window.addEventListener('resize', this.atWindowResize)

    const reRender = () => {
      try {
        this.baseRenderer.render(this.scene, this.baseCamera)
        this.css2DRenderer.render(this.scene, this.baseCamera)
      } catch (e) {
        noop(e)
      }

      requestAnimationFrame(reRender)
    }

    this._raf_value = requestAnimationFrame(reRender)
  }

}

export default Init3D

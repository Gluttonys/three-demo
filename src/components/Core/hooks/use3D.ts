import {
  useAmbientLight,
  useBaseRender,
  useDirectionalLight,
  useOrbitControls,
  usePerspectiveCamera,
  useScene
} from "../../../hooks/threeD";

/**
 * @desc 初始化3D场景
 * @param elementDom 页面dom容器
 */
const use3D = (elementDom: Element): void => {

  const scene = useScene()
  const baseRender = useBaseRender()

  const cameraPosition: [number, number, number] = [1000, 1000, 1000]
  const camera = usePerspectiveCamera()
  camera.position.set(...cameraPosition)
  camera.lookAt(scene.position)

  const [dirLight, directionLightHelper] = useDirectionalLight()
  const ambientLight = useAmbientLight()

  const orbitControls = useOrbitControls(camera, baseRender.domElement)


  /**
   * 整合所有3D相关元素
   */
  const integrate = () => {
    /** 添加光源 */
    scene.add(
      ambientLight,
      dirLight,
      // directionLightHelper
    )
    elementDom.appendChild(baseRender.domElement)

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


  integrate()
}

export default use3D

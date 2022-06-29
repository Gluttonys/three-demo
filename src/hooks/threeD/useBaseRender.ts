import {PCFSoftShadowMap, WebGLRenderer} from 'three'


/**
 * @link https://threejs.org/docs/index.html?q=web#api/zh/renderers/WebGLRenderer
 */
const useBaseRender = () => {
  let renderer: WebGLRenderer | null = null

  return (): WebGLRenderer => {
    if (renderer) return renderer

    const {innerWidth, innerHeight, devicePixelRatio} = window
    renderer = new WebGLRenderer()

    renderer.setPixelRatio(devicePixelRatio)
    renderer.setSize(innerWidth, innerHeight)//设置渲染区域尺寸
    renderer.setClearColor('#141c24', 1) //设置背景颜色

    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = PCFSoftShadowMap
    return renderer
  }
}


export default useBaseRender()

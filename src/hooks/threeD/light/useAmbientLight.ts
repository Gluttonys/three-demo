import {AmbientLight, ColorRepresentation} from "three";

/**
 * @desc 环境光
 *
 * ! 环境光的初始化只在第一次调用 useAmbientLight 传入的参数有效， 第二次调用函数设置参数无效
 *
 * @link https://threejs.org/docs/index.html?q=AmbientLight#api/zh/lights/AmbientLight
 */

const useAmbientLight = () => {

  let ambientLight: AmbientLight | null = null

  return (color?: ColorRepresentation, intensity?: number): AmbientLight => {
    if (ambientLight) return ambientLight

    ambientLight = new AmbientLight(color || '#ffffff', intensity || 1)
    return ambientLight
  }
}

export default useAmbientLight()

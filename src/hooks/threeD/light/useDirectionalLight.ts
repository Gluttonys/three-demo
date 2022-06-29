import {ColorRepresentation, DirectionalLight, DirectionalLightHelper} from 'three'

/**
 * @desc 平行光 模拟太阳光
 *
 *
 * @link https://threejs.org/docs/index.html?q=DirectionalLight#api/zh/lights/DirectionalLight
 * @link https://threejs.org/docs/index.html?q=DirectionalLight#api/zh/helpers/DirectionalLightHelper
 */
const useDirectionalLight = () => {
  let directionalLight: DirectionalLight | null = null
  let directionalLightHelper: DirectionalLightHelper | null = null

  return (color?: ColorRepresentation, intensity?: number): [DirectionalLight, DirectionalLightHelper] => {
    if (directionalLight && directionalLightHelper) return [directionalLight, directionalLightHelper]

    directionalLight = new DirectionalLight(color || 0xffffff, intensity || 1)

    directionalLight.position.set(1000, 1000, 1000)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 1000
    directionalLight.shadow.mapSize.height = 1000
    directionalLight.shadow.camera.near = 0.5
    directionalLight.shadow.camera.far = 500
    directionalLight.shadow.camera.left = -1000
    directionalLight.shadow.camera.right = 1000
    directionalLight.shadow.camera.top = 1000
    directionalLight.shadow.camera.bottom = -1000

    /** size : 平面尺寸， 就是辅助器的尺寸（那个小正方形） 默认设置为红色 */
    directionalLightHelper = new DirectionalLightHelper(directionalLight, 5, 0xff0000)

    return [directionalLight, directionalLightHelper]
  }
}

export default useDirectionalLight()

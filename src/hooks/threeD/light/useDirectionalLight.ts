import {ColorRepresentation, DirectionalLight, DirectionalLightHelper} from 'three'
import {DIR_LIGHT_HELPER_NAME, DIR_LIGHT_NAME} from "../../../constant/common";

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
    directionalLight.name = DIR_LIGHT_NAME

    directionalLight.position.set(500, 500, 500)
    directionalLight.castShadow = true

    directionalLight.shadow.bias = 0.001

    directionalLight.shadow.camera.zoom = 4
    directionalLight.shadow.camera.near = 100;
    directionalLight.shadow.camera.far = 1000;

    directionalLight.shadow.camera.right = 500;
    directionalLight.shadow.camera.left = -500;
    directionalLight.shadow.camera.top = 500;
    directionalLight.shadow.camera.bottom = -500;

    directionalLight.shadow.mapSize.width = 1014;
    directionalLight.shadow.mapSize.height = 1014;

    /** size : 平面尺寸， 就是辅助器的尺寸（那个小正方形） 默认设置为红色 */
    directionalLightHelper = new DirectionalLightHelper(directionalLight, 5, 0xff0000)
    directionalLightHelper.name = DIR_LIGHT_HELPER_NAME

    return [directionalLight, directionalLightHelper]
  }
}

export default useDirectionalLight()

import {AxesHelper, Scene} from 'three'
import {AXES_HELPER_NAME} from "../../constant/common";


/**
 * @link https://threejs.org/docs/index.html?q=sc#api/zh/scenes/Scene
 */
const useScene = () => {
  let scene: Scene | null = null

  return (withHelper: boolean = true): Scene => {
    if (scene) return scene

    scene = new Scene()
    const axes = new AxesHelper(1000)
    axes.name = AXES_HELPER_NAME
    if (withHelper) scene.add(axes)
    return scene
  }
}

export default useScene()

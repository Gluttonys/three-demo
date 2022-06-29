import {AxesHelper, Scene} from 'three'


/**
 * @link https://threejs.org/docs/index.html?q=sc#api/zh/scenes/Scene
 */
const useScene = () => {
  let scene: Scene | null = null

  return (withHelper: boolean = true): Scene => {
    if (scene) return scene

    scene = new Scene()
    if (withHelper) scene.add(new AxesHelper(1000))
    return scene
  }
}

export default useScene()

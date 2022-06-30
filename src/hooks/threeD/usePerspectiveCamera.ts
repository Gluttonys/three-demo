import {PerspectiveCamera} from 'three'


/**
 * @desc 透视相机
 *
 * @link https://threejs.org/docs/index.html?q=PerspectiveCamera#api/zh/cameras/PerspectiveCamera
 */
const usePerspectiveCamera = () => {
  let perspectiveCamera: PerspectiveCamera | null = null


  return (): PerspectiveCamera => {
    if (perspectiveCamera) return perspectiveCamera

    const {innerWidth, innerHeight} = window

    perspectiveCamera = new PerspectiveCamera(70, innerWidth / innerHeight, 0.1, 10000)

    return perspectiveCamera
  }
}

export default usePerspectiveCamera()

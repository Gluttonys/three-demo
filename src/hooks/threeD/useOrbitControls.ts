import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {Camera} from "three/src/Three";

const useOrbitControls = () => {
  let orbitControls: OrbitControls | null = null

  return (camera: Camera, domElement?: HTMLElement): OrbitControls => {
    if (orbitControls) return orbitControls

    orbitControls = new OrbitControls(camera, domElement)

    // orbitControls.enableDamping = true
    // orbitControls.dampingFactor = 0.05
    // orbitControls.screenSpacePanning = false
    // orbitControls.maxPolarAngle = Math.PI / 2
    orbitControls.listenToKeyEvents(window)
    return orbitControls
  }
}

export default useOrbitControls()

import {Group, Scene} from "three";
import {MTLLoader} from "three/examples/jsm/loaders/MTLLoader";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import {isUndefined} from "lodash";

/**
 * @description 添加一个obj模型
 * @param objPath    obj 对象路径地址
 * @param mtlPath    mtl 文件对应地址
 * @param container  是否添加到指定容器内
 */
const objLoader = (objPath: string, mtlPath: string, container?: Scene): Promise<Group> => {

  return new Promise(resolve => {
    const mtlLoader = new MTLLoader()
    mtlLoader.load(mtlPath, materialCreator => {

      const objLoader = new OBJLoader()
      objLoader.setMaterials(materialCreator)
      objLoader.load(objPath, obj => {
        if (!isUndefined(container)) container.add(obj)
        resolve(obj)
      })
    })
  })
}

export default objLoader

/**
 * @desc 定义全局模块， 常量声明文件
 */
import Init3D from "./utils/init3D";


declare global {

  interface Window {
    threeDObj: Init3D
  }

}

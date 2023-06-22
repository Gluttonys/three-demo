import {isNil, isNull} from "lodash";

class SimpleCanvas {
  canvasDom: HTMLCanvasElement = null
  canvasCtx: CanvasRenderingContext2D = null


  constructor(canvasId: string) {
    this.init(canvasId)
  }

  setWidth(width: number): SimpleCanvas {
    this.canvasDom.width = width
    return this
  }

  setHeight(height: number): SimpleCanvas {
    this.canvasDom.height = height
    return this
  }

  setWidthAndHeight(width: number, height: number): SimpleCanvas {
    this.setWidth(width)
    this.setHeight(height)
    return this
  }

  getCanvasWidth(): number {
    return this.canvasDom.width
  }

  getCanvasHeight(): number {
    return this.canvasDom.height
  }

  getCanvasWidthAndHeight(): [number, number] {
    return [
      this.getCanvasWidth(),
      this.getCanvasHeight()
    ]
  }

  /**
   * @description 清除画布
   */
  clean() {
    this.canvasCtx.clearRect(0, 0, this.getCanvasWidth(), this.getCanvasHeight())
    return this
  }

  private init(canvasId: string) {
    const canvasDom = document.getElementById(canvasId) as HTMLCanvasElement
    if (isNull(canvasDom)) throw new ReferenceError(`未能查找到ID为${canvasId}的dom结构`)

    this.canvasDom = canvasDom

    // 兼容性检查
    if (isNil(canvasDom.getContext)) throw new ReferenceError("抱歉，您的设备不支持Canvas")
    this.canvasCtx = canvasDom.getContext('2d')
  }

}

export default SimpleCanvas

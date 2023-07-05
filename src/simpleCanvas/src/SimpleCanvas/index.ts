import {assign, ceil, defaultTo, isNil, isNull, uniqueId} from "lodash";
import {CanvasText, Rect} from "@/simpleCanvas/src/parts/inherit";

class SimpleCanvas {
  canvasDom: HTMLCanvasElement = null
  private canvasCtx: CanvasRenderingContext2D = null


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
    const width = this.getCanvasWidth()
    const height = this.getCanvasHeight()
    return [width, height]
  }

  get2DCtx(): CanvasRenderingContext2D {
    return this.canvasCtx
  }

  /**
   * @description 清除画布
   */
  clean() {
    this.canvasCtx.clearRect(0, 0, this.getCanvasWidth(), this.getCanvasHeight())
    return this
  }

  /**
   * @description 开启网格线
   */
  openGrid(gridOpt?: SimpleCanvas.GridOpt): SimpleCanvas {

    const defaultOpt: SimpleCanvas.GridOpt = {
      font: {
        color: '#000000',
        fontSize: 14
      },
      line: {
        color: '#b3b3b3',
        spacing: 50
      }
    }
    assign(defaultOpt, defaultTo(gridOpt, {}))

    const ctx = this.get2DCtx()
    const [width, height] = this.getCanvasWidthAndHeight()
    const {line: {color: lineColor, spacing}, font: {color: fontColor, fontSize}} = defaultOpt
    const column = ceil(width / spacing)  // 列
    const row = ceil(height / spacing)    // 行

    ctx.save()
    ctx.strokeStyle = lineColor

    for (let i = 0; i < column; i++) {
      ctx.beginPath()
      ctx.moveTo(0, i * spacing)
      ctx.lineTo(this.getCanvasHeight(), i * spacing)
      ctx.closePath()
      ctx.stroke()

      new CanvasText({
        content: `${i * spacing}`,
        textBaseline: 'middle',
        fontSize,
        color: fontColor,
        x: 0,
        y: i * spacing
      }).draw(this.get2DCtx())
      new CanvasText({
        content: `${i * spacing}`,
        fontSize,
        color: fontColor,
        x: this.getCanvasWidth(),
        y: i * spacing,
        textBaseline: 'middle',
        direction: 'rtl'
      }).draw(this.get2DCtx())
    }

    for (let j = 0; j < row; j++) {
      ctx.beginPath()
      ctx.moveTo(j * spacing, 0)
      ctx.lineTo(j * spacing, this.getCanvasWidth())
      ctx.closePath()
      ctx.stroke()

      new CanvasText({
        content: `${j * spacing}`,
        textBaseline: 'hanging',
        textAlign: 'center',
        fontSize,
        color: fontColor,
        x: j * spacing,
        y: 0
      }).draw(this.get2DCtx())
      new CanvasText({
        content: `${j * spacing}`,
        fontSize,
        color: fontColor,
        x: j * spacing,
        y: this.getCanvasHeight(),
        textBaseline: 'alphabetic',
        direction: 'rtl',
        textAlign: 'center',
      }).draw(this.get2DCtx())
    }

    ctx.restore()
    return this
  }

  /**
   * @description canvas 生成图片
   * @param imageName
   */
  toGenerateImage(imageName?: string) {
    const tempName = defaultTo(imageName, uniqueId('canvas_image_'))
    const imageString = this.canvasDom.toDataURL('image/png', 1)

    const tempLinkDom = document.createElement('a')
    tempLinkDom.download = tempName
    tempLinkDom.href = imageString
    tempLinkDom.click()
    tempLinkDom.remove()
  }

  /**
   * @description 给画布设置背景颜色
   * @param backgroundColor
   */
  setBackGround(backgroundColor: SimpleCanvas.Parts.RectOpt['backgroundColor']) {
    const [width, height] = this.getCanvasWidthAndHeight()
    new Rect({
      width,
      height,
      backgroundColor
    }).draw(this.get2DCtx())
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

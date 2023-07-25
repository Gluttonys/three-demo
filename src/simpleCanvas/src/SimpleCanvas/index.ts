import {assign, ceil, defaultTo, first, inRange, isArray, isEmpty, isNil, isNull, sortBy, uniqueId} from "lodash";
import {CanvasText, Line, Rect} from "@/simpleCanvas/src/parts/inherit";
import BaseParts from "@/simpleCanvas/src/parts/BaseParts";
import Layer from "@/simpleCanvas/src/Layer";


class SimpleCanvas {
  /**
   * @description 存放所有图层元素的 map
   * @private
   */
  private layers: Layer[] = []

  private defaultLayer: Layer = new Layer({name: uniqueId("default_layer_"), zIndex: 0})
  private gridLayer: Layer = new Layer({name: uniqueId("default_grid_layer_"), zIndex: -1})
  private baseLayer: Layer = new Layer({name: uniqueId("base_layer_"), zIndex: -2})

  private canvasDom: HTMLCanvasElement = null
  private canvasCtx: CanvasRenderingContext2D = null

  private gridVisible: boolean = false
  private gridOpt: SimpleCanvas.GridOpt = null

  private backgroundColor: SimpleCanvas.Parts.RectOpt['backgroundColor'] = '#ffffff'

  constructor(canvasId: string) {
    this.initCanvas(canvasId)
    this.initLayers()
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
   * @description 获取 canvas dom 引用
   */
  getCanvasDom(): HTMLCanvasElement {
    return this.canvasDom
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
    this.gridVisible = true
    this.gridOpt = defaultTo(gridOpt, null)

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

    const [width, height] = this.getCanvasWidthAndHeight()

    const {line: {color: lineColor, spacing}, font: {color: fontColor, fontSize}} = defaultOpt
    const column = ceil(height / spacing)  // 列
    const row = ceil(width / spacing)    // 行

    for (let i = 0; i <= column; i++) {
      const line = new Line({
        pointList: [
          [0, i * spacing],
          [width, i * spacing]
        ],
        color: lineColor
      })

      const topText = new CanvasText({
        content: `${i * spacing}`,
        textBaseline: 'middle',
        fontSize,
        color: fontColor,
        x: 0,
        y: i * spacing
      })
      const bottomText = new CanvasText({
        content: `${i * spacing}`,
        fontSize,
        color: fontColor,
        x: width,
        y: i * spacing,
        textBaseline: 'middle',
        direction: 'rtl'
      })

      this.gridLayer.add([line, topText, bottomText])
    }

    for (let j = 0; j <= row; j++) {

      const line = new Line({
        pointList: [
          [j * spacing, 0],
          [j * spacing, height]
        ],
        color: lineColor
      })

      const leftText = new CanvasText({
        content: `${j * spacing}`,
        textBaseline: 'hanging',
        textAlign: 'center',
        fontSize,
        color: fontColor,
        x: j * spacing,
        y: 0
      })
      const rightText = new CanvasText({
        content: `${j * spacing}`,
        fontSize,
        color: fontColor,
        x: j * spacing,
        y: height,
        textBaseline: 'alphabetic',
        direction: 'rtl',
        textAlign: 'center',
      })

      this.gridLayer.add([line, leftText, rightText])
    }

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
   *
   * !!! todo 重新实现
   */
  setBackGround(backgroundColor: SimpleCanvas.Parts.RectOpt['backgroundColor']) {
    this.backgroundColor = backgroundColor
    const [width, height] = this.getCanvasWidthAndHeight()

    this.baseLayer.add(new Rect({
      width,
      height,
      backgroundColor: this.backgroundColor
    }))

    return this.reDraw()
  }

  /**
   * @description 变形 - 移动
   */
  deformationTransformations(x: number, y: number, callback: (ctx: CanvasRenderingContext2D) => any): SimpleCanvas {
    this.canvasCtx.save()
    this.canvasCtx.translate(x, y)
    callback(this.get2DCtx())
    this.canvasCtx.restore()
    return this
  }

  deformationRotate(deg: number, callback: (ctx: CanvasRenderingContext2D) => any): SimpleCanvas {
    if (!inRange(deg, 0, 360)) throw new RangeError("角度值异常，[0， 360]")
    const _deg = (Math.PI / 180) * deg
    this.canvasCtx.save()
    this.canvasCtx.rotate(_deg)
    callback(this.canvasCtx)
    this.canvasCtx.restore()
    return this
  }

  add(part: BaseParts, reDraw?: boolean): SimpleCanvas
  add(parts: BaseParts[], reDraw?: boolean): SimpleCanvas
  add(layer: Layer, reDraw?: boolean): SimpleCanvas
  add(layers: Layer[], reDraw?: boolean): SimpleCanvas
  add(partOrLayer: BaseParts | BaseParts[] | Layer | Layer[], reDraw: boolean = true): SimpleCanvas {
    if (isArray(partOrLayer)) {
      if (isEmpty(partOrLayer)) return
      const firstEle = first(partOrLayer as unknown[])

      if (firstEle instanceof BaseParts) {
        this.defaultLayer.add(partOrLayer as BaseParts[])
      } else if (firstEle instanceof Layer) {
        (partOrLayer as Layer[]).forEach(layer => layer.parent = this)
        this.layers.push(...partOrLayer as Layer[])
      } else {
        throw new ReferenceError("错误的参数值，请传入组件或图层")
      }
    } else {
      if (partOrLayer instanceof BaseParts) {
        this.defaultLayer.add(partOrLayer as BaseParts)
      } else if (partOrLayer instanceof Layer) {
        partOrLayer.parent = this
        this.layers.push(partOrLayer)
      } else {
        throw new ReferenceError("错误的参数值，请传入组件或图层")
      }
    }

    if (reDraw) {
      return this.reDraw()
    } else {
      return this
    }
  }

  reDraw(): SimpleCanvas {
    return this.draw()
  }

  /**
   * @description 重新绘制 canvas
   * @private
   */
  private draw(): SimpleCanvas {
    this.clean()
    const ctx = this.get2DCtx()

    const sortLayers = sortBy(this.layers, "zIndex")
    sortLayers.forEach(layer => layer.draw(ctx))
    return this
  }

  /**
   * @description 初始化默认图层
   * @private
   */
  private initLayers() {
    this.add([this.defaultLayer, this.gridLayer, this.baseLayer], false)
  }

  /**
   * @description 初始化 canvas
   * @param canvasId
   * @private
   */
  private initCanvas(canvasId: string) {
    const canvasDom = document.getElementById(canvasId) as HTMLCanvasElement
    if (isNull(canvasDom)) throw new ReferenceError(`未能查找到ID为${canvasId}的dom结构`)

    this.canvasDom = canvasDom

    // 兼容性检查
    if (isNil(canvasDom.getContext)) throw new ReferenceError("抱歉，您的设备不支持Canvas")
    this.canvasCtx = canvasDom.getContext('2d')
  }


}

export default SimpleCanvas

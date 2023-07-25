import BaseParts from "@/simpleCanvas/src/parts/BaseParts";
import {assign, defaultTo, floor, isNil, isNull} from "lodash";
import ParamsError from "@/simpleCanvas/src/utils/ParamsError";

type ImageOpt = SimpleCanvas.Parts.ImageOpt


class CanvasImage extends BaseParts {

  imageDom: HTMLImageElement = null

  defaultOpt: ImageOpt = {
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    src: null,
    backgroundColor: 'transparent'
  }

  constructor(opt: ImageOpt) {
    super(opt);
    this.setOpt(opt)
  }


  draw(ctx: CanvasRenderingContext2D): Promise<CanvasImage> {
    this.checkCtx(ctx)

    const {x, y, width, height} = this.defaultOpt

    this.setBackground()
    this.generateImageDom()

    return new Promise((resolve, reject) => {
      this.imageDom.onload = () => {

        this.ctx.save()
        this.ctx.drawImage(this.imageDom, x, y, width, height)
        this.ctx.restore()

        resolve(this)
      }

      this.imageDom.onerror = () => {
        reject(this)
      }
    })
  }

  setOpt(partsOpt?: ImageOpt): CanvasImage {
    assign(this.defaultOpt, defaultTo(partsOpt, {}))
    return this
  }

  /**
   * @description 平铺图片
   */
  toTile(smallImgWidth: number, smallImgHeight: number) {
    
    if (isNull(this.imageDom)) this.generateImageDom()
    this.setBackground()

    const {x, y, width, height} = this.defaultOpt
    const xNum = floor(width / smallImgWidth)
    const yNum = floor(height / smallImgHeight)

    for (let i = 0; i < xNum; i++) {
      for (let j = 0; j < yNum; j++) {
        this.ctx.drawImage(
          this.imageDom,
          x + i * smallImgWidth,
          y + j * smallImgHeight,
          smallImgWidth,
          smallImgHeight)
      }
    }
  }


  private generateImageDom() {
    const {src} = this.defaultOpt
    if (isNil(src)) throw new ParamsError('图片src属性传参错误')

    // 绘制图片
    this.imageDom = new Image()
    this.imageDom.src = src
  }

  private setBackground() {
    const {x, y, width, height, backgroundColor} = this.defaultOpt
    // 绘制背景颜色
    this.ctx.fillStyle = backgroundColor
    this.ctx.fillRect(x, y, width, height)
  }


}

export default CanvasImage

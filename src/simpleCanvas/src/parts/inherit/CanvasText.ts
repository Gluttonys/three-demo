import BaseParts from "@/simpleCanvas/src/parts/BaseParts";
import SimpleCanvas from "@/simpleCanvas/src/SimpleCanvas";
import {assign, defaultTo, eq} from "lodash";


export type CanvasTextOpt = SimpleCanvas.Parts.TextOpt

class CanvasText extends BaseParts {

  textMetrics: TextMetrics = null

  defaultOpt: CanvasTextOpt = {
    x: 0,
    y: 0,
    color: 'black',
    content: 'default text',
    fontSize: 14,
    fontStyle: 'serif',
    stroke: false,
    textAlign: 'start',
    textBaseline: 'alphabetic',
    direction: 'ltr',
    maxWidth: Number.MAX_SAFE_INTEGER,
    backgroundColor: 'transparent'
  }

  constructor(opt?: CanvasTextOpt) {
    super(opt);
    this.setOpt(opt)
  }

  draw(ctx: CanvasRenderingContext2D): CanvasText {
    this.checkCtx(ctx)

    const {
      x,
      y,
      color,
      content,
      fontStyle,
      fontSize,
      stroke,
      textBaseline,
      textAlign,
      direction,
      maxWidth,
      backgroundColor
    } = this.defaultOpt
    this.ctx.save()

    this.ctx.font = `${fontSize}px ${fontStyle}`
    this.ctx.textBaseline = textBaseline
    this.ctx.textAlign = textAlign
    this.ctx.direction = direction

    this.textMetrics = this.ctx.measureText(content)

    const {width, fontBoundingBoxAscent} = this.textMetrics
    this.ctx.fillStyle = backgroundColor

    let _width = eq(maxWidth, Number.MAX_SAFE_INTEGER) ? width : maxWidth
    this.ctx.fillRect(x, y - fontBoundingBoxAscent, _width, fontSize)

    if (stroke) {
      this.ctx.strokeStyle = color
      this.ctx.strokeText(content, x, y, maxWidth)
    } else {
      this.ctx.fillStyle = color
      this.ctx.fillText(content, x, y, maxWidth)
    }

    this.ctx.restore()
    return this
  }

  remove(): CanvasText {
    const {x, y, fontSize, maxWidth} = this.defaultOpt
    const {width, fontBoundingBoxAscent} = this.textMetrics

    let _width = eq(maxWidth, Number.MAX_SAFE_INTEGER) ? width : maxWidth
    this.ctx.clearRect(x, y - fontBoundingBoxAscent, _width, fontSize)

    return this;
  }

  setOpt(partsOpt?: CanvasTextOpt): CanvasText {
    assign(this.defaultOpt, defaultTo(partsOpt, {}))
    return this
  }


}


export default CanvasText

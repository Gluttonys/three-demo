import BaseParts from "@/simpleCanvas/src/parts/BaseParts";
import {assign, defaultTo} from "lodash";

type StrokeOpt = SimpleCanvas.Parts.StrokeRect

class StrokeRect extends BaseParts {

  defaultOpt: StrokeOpt = {
    x: 0,
    y: 0,
    zIndex: 1,
    width: 50,
    height: 50,
    borderColor: 'black',
    lineWidth: 1
  }

  constructor(opt?: StrokeOpt) {
    super(opt);
    this.setOpt(opt)
  }

  setOpt(opt?: StrokeOpt): StrokeRect {
    assign(this.defaultOpt, defaultTo(opt, {}))
    return this
  }

  draw(ctx: CanvasRenderingContext2D): StrokeRect {
    this.checkCtx(ctx)

    const {x, y, width, height, borderColor, lineWidth} = this.defaultOpt

    this.ctx.save()
    this.ctx.strokeStyle = borderColor
    this.ctx.lineWidth = lineWidth
    this.ctx.strokeRect(x, y, width, height)
    this.ctx.restore()
    return this
  }

}

export default StrokeRect

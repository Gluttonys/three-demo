import BaseParts from "@/simpleCanvas/src/parts/BaseParts";
import {assign, defaultTo} from "lodash";

type RectOpt = SimpleCanvas.Parts.RectOpt

class Rect extends BaseParts {

  defaultOpt: RectOpt = {
    x: 0,
    y: 0,
    zIndex: 1,
    width: 50,
    height: 50,
    backgroundColor: 'transparent'
  }

  constructor(opt?: RectOpt) {
    super(opt);
    this.setOpt(opt)
  }

  setOpt(opt?: RectOpt): Rect {
    assign(this.defaultOpt, defaultTo(opt, {}))
    return this
  }
  
  draw(ctx: CanvasRenderingContext2D): Rect {
    this.checkCtx(ctx)

    const {x, y, width, height, backgroundColor} = this.defaultOpt

    this.ctx.save()
    this.ctx.fillStyle = backgroundColor
    this.ctx.fillRect(x, y, width, height)
    this.ctx.restore()

    return this
  }

}

export default Rect

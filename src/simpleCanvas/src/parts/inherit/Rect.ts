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

  clearRect(x: number, y: number, region: number): Rect
  clearRect(x: number, y: number, width: number, height?: number): Rect
  clearRect(x: number, y: number, widthOrRegion: number, height?: number): Rect {
    let _x = this.defaultOpt.x + x
    let _y = this.defaultOpt.y + y

    let _height: number = defaultTo(height, widthOrRegion)

    this.ctx.clearRect(_x, _y, widthOrRegion, _height)
    return this
  }

  remove(): Rect {
    const {width, height} = this.defaultOpt
    return this.clearRect(0, 0, width, height)
  }

}

export default Rect
